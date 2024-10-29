// xác nhận thông tin 
function Validator(formSelector, option) {
    // xác nhận có onSubmit() hay không 
    if (!option) {
        option = {};
    }
    
    // lấy phần tử cha của element 
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    
    // chứa các rule fullname và email 
    var formRules = {
        fullname: 'required',
        email: 'required|email',
        password: 'required|min:6',
        'confirm-password': 'required|min:6|match:password',
    };
    
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email';
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`;
            };
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} kí tự`;
            };
        },
        match: function (matchField) {
            return function (value) {
                const matchValue = document.querySelector(`[name=${matchField}]`).value;
                return value === matchValue ? undefined : 'Mật khẩu không khớp';
            };
        }
    };

    var formElement = document.querySelector(formSelector);
    
    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        var isSubmitting = false;

        for (var input of inputs) {
            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {
                var isRuleHasValue = rule.includes(':');
                var ruleFunc;

                if (isRuleHasValue) {
                    var ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                    ruleFunc = validatorRules[rule](ruleInfo[1]);
                } else {
                    ruleFunc = validatorRules[rule];
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }

        function handleValidate(event) {
            var rules = formRules[event.target.name];
            var errorMessage;
            rules.find(function (rule) {
                errorMessage = rule(event.target.value);
                return errorMessage;
            });

            if (errorMessage) {
                var formGroup = getParent(event.target, '.form-group');
                if (formGroup) {
                    var formMessage = formGroup.querySelector('.form-message');
                    formGroup.classList.add('invalid');
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }
            return !errorMessage;
        }

        function handleClearError(event) {
            var formGroup = getParent(event.target, '.form-group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');
                if (formMessage) {
                    formMessage.innerText = '';
                }
            }
        }

        formElement.onsubmit = function (event) {
            event.preventDefault();

            if (isSubmitting) return; // Ngăn không cho nhấn submit nhiều lần
            isSubmitting = true; // Đánh dấu là đang submit

            var inputs = formElement.querySelectorAll('[name][rules]');
            var isValid = true;
            for (var input of inputs) {
                if (!handleValidate({ target: input })) {
                    isValid = false;
                }
            }

            if (isValid) {
                if (typeof option.onSubmit === 'function') {
                    option.onSubmit();
                }
            }

            isSubmitting = false; // Đánh dấu là đã hoàn tất submit
        }
    }
}
