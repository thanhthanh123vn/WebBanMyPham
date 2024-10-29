        const citySelect = document.getElementById('city');
        const districtSelect = document.getElementById('district');
        const addressSelect = document.getElementById('address');

        const districtsData = {
            hanoi: [
                "Ba Đình",
                "Hoàn Kiếm",
                "Đống Đa",
                "Hai Bà Trưng",
                "Hoàng Mai",
                "Long Biên",
                "Nam Từ Liêm",
                "Tây Hồ",
                "Thanh Xuân",
                "Cầu Giấy",
                "Gia Lâm",
                "Sóc Sơn"
            ],
            haiphong: [
                "Hồng Bàng",
                "Lê Chân",
                "Ngô Quyền",
                "Kiến An",
                "Đồ Sơn",
                "Dương Kinh",
                "An Dương",
                "An Lão",
                "Tiên Lãng",
                "Vĩnh Bảo"
            ],
            thuathienhue: [
                "Hương Thủy",
                "Hương Trà",
                "Phú Vang",
                "Phú Lộc",
                "A Lưới",
                "Nam Đông",
                "Bạch Mã"
            ],
            nhatrang: [
                "Nha Trang",
                "Cam Ranh",
                "Vĩnh Hải",
                "Vĩnh Nguyên",
                "Diên Khánh"
            ],
            danang: [
                "Hải Châu",
                "Thanh Khê",
                "Sơn Trà",
                "Ngũ Hành Sơn",
                "Liên Chiểu",
                "Hòa Vang"
            ],
            tphcm: [
                "Quận 1",
                "Quận 2",
                "Quận 3",
                "Quận 4",
                "Quận 5",
                "Quận 6",
                "Quận 7",
                "Quận 8",
                "Quận 9",
                "Quận 10",
                "Quận 11",
                "Quận 12"
            ],
            cantho: [
                "Ninh Kiều",
                "Cái Răng",
                "Ô Môn",
                "Thốt Nốt",
                "Phong Điền",
                "Vĩnh Thạnh",
                "Cờ Đỏ"
            ]
        };

        const addressesData = {
            hanoi: {
                "Ba Đình": ["Phường Trúc Bạch", "Phường Đội Cấn"],
                "Hoàn Kiếm": ["Phường Hàng Bạc", "Phường Hàng Đào"],
                "Đống Đa": ["Phường Khâm Thiên", "Phường Trung Liệt"],
                "Hai Bà Trưng": ["Phường Bùi Thị Xuân", "Phường Vĩnh Tuy"],

            },
            haiphong: {
                "Hồng Bàng": ["Phường Hạ Lý", "Phường Minh Khai"],
                "Lê Chân": ["Phường Vĩnh Niệm", "Phường Dư Hàng Kênh"],

            },
            thuathienhue: {
                "Hương Thủy": ["Phường Thủy Dương", "Phường Thủy Vân"],

            },
            nhatrang: {
                "Nha Trang": ["Phường Vĩnh Hải", "Phường Vĩnh Nguyên"],

            },
            danang: {
                "Hải Châu": ["Phường Hòa Cường Bắc", "Phường Hòa Cường Nam"],

            },
            tphcm: {
                "Quận 1": ["Phường Bến Nghé", "Phường Bến Thành"],

            },
            cantho: {
                "Ninh Kiều": ["Phường An Nghiệp", "Phường An Khánh"],

            }
        };

        citySelect.addEventListener('change', function () {
            const selectedCity = this.value;


            districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
            addressSelect.innerHTML = '<option value="">Chọn phường/xã</option>';

            if (districtsData[selectedCity]) {
                districtsData[selectedCity].forEach(district => {
                    const option = document.createElement('option');
                    option.value = district;
                    option.textContent = district;
                    districtSelect.appendChild(option);
                });
            }
        });

        districtSelect.addEventListener('change', function () {
            const selectedCity = citySelect.value;
            const selectedDistrict = this.value;


            addressSelect.innerHTML = '<option value="">Chọn phường/xã</option>';

            if (addressesData[selectedCity] && addressesData[selectedCity][selectedDistrict]) {
                addressesData[selectedCity][selectedDistrict].forEach(address => {
                    const option = document.createElement('option');
                    option.value = address;
                    option.textContent = address;
                    addressSelect.appendChild(option);
                });
            }
        });

        // Lấy các nút
        const homeButton = document.getElementById('buttonHome');
        const companyButton = document.getElementById('buttonCity');
        const disableButtons = () => {
            buttonHome.disabled = true;
            buttonCity.disabled = true;
        };
        // Xử lý sự kiện cho nút "Nhà riêng"
        buttonHome.addEventListener('click',() => {
            buttonHome.classList.add('active'); // Thêm lớp chọn
            buttonCity.classList.remove('selected'); // Bỏ lớp chọn
            console.log("Đã chọn: Nhà riêng")
           
        });

        // Xử lý sự kiện cho nút "Công ty"
        buttonCity.addEventListener('click', () =>{
            buttonCity.classList.add('selected'); // Thêm lớp chọn
            buttonHome.classList.remove('selected'); // Bỏ lớp chọn
            console.log("Đã chọn: Công ty")
           
        });

       