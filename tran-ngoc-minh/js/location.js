// Form validation and interaction
        document.addEventListener('DOMContentLoaded', function() {
            const citySelect = document.getElementById('citySelect');
            const postalCode = document.getElementById('postalCode');
            const specificAddress = document.getElementById('specificAddress');
            const mapButton = document.getElementById('mapButton');

            // City selection handler
            citySelect.addEventListener('change', function() {
                const selectedCity = this.value;
                console.log('Selected city:', selectedCity);
                
                // Auto-fill postal code based on city (example)
                const postalCodes = {
                    'hanoi': '10000',
                    'hcm': '70000',
                    'danang': '55000',
                    'haiphong': '18000',
                    'cantho': '94000'
                };
                
                if (postalCodes[selectedCity]) {
                    postalCode.value = postalCodes[selectedCity];
                }
            });

            // Postal code input validation
            postalCode.addEventListener('input', function() {
                // Remove non-numeric characters
                this.value = this.value.replace(/\D/g, '');
                
                // Limit to 6 digits
                if (this.value.length > 6) {
                    this.value = this.value.slice(0, 6);
                }
            });

            // Map button click handler
            mapButton.addEventListener('click', function() {
                // Simulate map selection
                alert('Chức năng chọn từ bản đồ sẽ được triển khai');
                
                // Example: auto-fill address after map selection
                if (specificAddress.value.trim() === '') {
                    specificAddress.value = 'Địa chỉ được chọn từ bản đồ';
                }
            });

            // Form validation
            function validateForm() {
                const city = citySelect.value;
                const postal = postalCode.value;
                const address = specificAddress.value.trim();

                if (!city) {
                    alert('Vui lòng chọn thành phố');
                    citySelect.focus();
                    return false;
                }

                if (!postal || postal.length < 5) {
                    alert('Vui lòng nhập mã bưu điện hợp lệ');
                    postalCode.focus();
                    return false;
                }

                if (!address) {
                    alert('Vui lòng nhập địa chỉ cụ thể');
                    specificAddress.focus();
                    return false;
                }

                return true;
            }

            // Add form submit handler if needed
            document.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    if (validateForm()) {
                        console.log('Form is valid, ready to submit');
                        console.log({
                            city: citySelect.value,
                            postalCode: postalCode.value,
                            specificAddress: specificAddress.value
                        });
                    }
                }
            });
        });