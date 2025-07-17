
        let selectedFiles = [];

        // Add sample images on page load
        window.onload = function() {
            addSampleImages();
        };

        function addSampleImages() {
            const sampleImages = [
                'https://via.placeholder.com/100x100/4A90E2/ffffff?text=IMG1',
                'https://via.placeholder.com/100x100/F5A623/ffffff?text=IMG2',
                'https://via.placeholder.com/100x100/7ED321/ffffff?text=IMG3',
                'https://via.placeholder.com/100x100/D0021B/ffffff?text=IMG4'
            ];

            sampleImages.forEach((src, index) => {
                createImagePreview(src, index, 'image');
            });
        }

        function openFileSelector() {
            document.getElementById('fileInput').click();
        }

        function handleFileSelect(event) {
            const files = Array.from(event.target.files);
            
            files.forEach(file => {
                if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const fileType = file.type.startsWith('image/') ? 'image' : 'video';
                        const fileIndex = selectedFiles.length;
                        selectedFiles.push({
                            file: file,
                            url: e.target.result,
                            type: fileType
                        });
                        createImagePreview(e.target.result, fileIndex, fileType);
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        function createImagePreview(src, index, type) {
            const imagePreview = document.getElementById('imagePreview');
            const imageItem = document.createElement('div');
            imageItem.className = 'image-item';
            imageItem.id = `image-${index}`;
            
            const mediaElement = type === 'image' ? 
                `<img src="${src}" alt="Preview ${index + 1}">` : 
                `<video src="${src}" controls></video>`;
            
            imageItem.innerHTML = `
                ${mediaElement}
                <div class="remove-wrapper">
                    <button class="remove-btn" onclick="removeImage(${index})">×</button>
                </div>
            `;
            
            imagePreview.appendChild(imageItem);
        }

        function removeImage(index) {
            const imageItem = document.getElementById(`image-${index}`);
            if (imageItem) {
                imageItem.remove();
                
                // Remove from selectedFiles array if it exists
                if (selectedFiles[index]) {
                    selectedFiles.splice(index, 1);
                }
            }
        }

        function downloadCatalog() {
            // Simulate catalog download
            alert('Chức năng tải lên catalogue sẽ được thực hiện ở đây');
        }

        // Toggle switch functionality
        document.getElementById('defectsToggle').addEventListener('change', function() {
            if (this.checked) {
                console.log('Defects marked: Yes');
            } else {
                console.log('Defects marked: No');
            }
        });
   