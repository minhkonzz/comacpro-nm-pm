
        // Thêm hiệu ứng hover và click
        document.addEventListener('DOMContentLoaded', function() {
            const banner = document.getElementById('banner');
            
            // Thêm hiệu ứng pulse khi hover
            banner.addEventListener('mouseenter', function() {
                this.classList.add('pulse');
            });
            
            banner.addEventListener('mouseleave', function() {
                this.classList.remove('pulse');
            });
            
            // Thêm hiệu ứng click
            banner.addEventListener('click', function() {
                // Tạo hiệu ứng ripple khi click
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.left = '50%';
                ripple.style.top = '50%';
                ripple.style.width = '20px';
                ripple.style.height = '20px';
                ripple.style.marginLeft = '-10px';
                ripple.style.marginTop = '-10px';
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Thêm CSS cho hiệu ứng ripple
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
