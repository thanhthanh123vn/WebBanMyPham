// xác nhận thông tin 
function Validator(formSelector, option) {
    // xác nhận có onSubmit() hay không 
    if (!option) {
        option = {};

    }
    // nguyên tắc form
    // lấy phần tử cha của element 
    function getParet(element, selector) {

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
    };
    /**Quy ước tạo rule 
     * nếu có lỗi thì return lại error message 
     * nếu không lỗi thì return về undefined 
     */
    // xác nhận các trường input 
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
            }
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} kí tự`;
            };

        }
    };


    // lấy element trong DOM  theo id 
    var formElement = document.querySelector(formSelector);
    // chỉ xử lý ckhi có element trong DOM
    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        //console.log(inputs);

        for (var input of inputs) {
            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {
                var isRuleHasvalue = rule.includes(':');
                var ruleInfo;
                if (isRuleHasvalue) {
                    ruleInfo = rule.split(':');
                    //console.log(ruleInfo);
                    rule = ruleInfo[0];
                    // chạy function trong function n
                    // console.log(validatorRules[rule](ruleInfo[1]));
                }

                var ruleFunc = validatorRules[rule];
                if (isRuleHasvalue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                    console.log(ruleInfo[1]);

                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }
            // lắng nge sự kiện để validate (blur ,change )
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
            // nếu có lỗi hiển thị error message ra website
            if (errorMessage) {
                console.log(event.target);
                var formGroup = getParet(event.target, '.form-group');
                if (formGroup) {
                    var formMessage = formGroup.querySelector('.form-message');
                    formGroup.classList.add('invalid');
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }
            return !errorMessage;
        }// hàm clear MessageError 
        function handleClearError(event) {
            var formGroup = getParet(event.target, '.form-group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');
                if (formMessage) {
                    formMessage.innerText = '';
                }
            }
        }
    }
    // Xử lý hành vi submit
    formElement.onsubmit = function (event) {
        event.preventDefault();
        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;
        for (var input of inputs) {
    
            if (!handleValidate({
                target: input
            })) {
                isValid = false;


            }
        }
        // khi không có lỗi thì submit form
        if (isValid) {

            if (typeof option.onSubmit === 'function') {
                for (var input of inputs) {

                    option.onSubmit(`${input.name} : ${input.value}`);
                }
            } else {
                formElement.onsubmit();

            }
        }
    }
    //console.log(formRules);
}
