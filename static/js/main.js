document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('uploadForm');
  const videoInput = document.getElementById('videoInput');
  const processingMessage = document.getElementById('processingMessage');
  const resultBox = document.getElementById('resultBox');
  const resetBtn = document.getElementById('resetBtn');

  // Show alert after file upload
  videoInput.addEventListener('change', function () {
    const file = videoInput.files[0];
    if (file) {
      const uploadNotice = document.getElementById('uploadNotice');
      uploadNotice.textContent = `✅ "${file.name}" uploaded. You can detect now!`;
      uploadNotice.style.display = 'block';
 
    }
  });

  form.addEventListener('submit', function () {
    processingMessage.innerHTML = `
      <div class="spinner"></div>
      <p>Please wait... Detecting deepfake</p>
    `;
  });

  resetBtn.addEventListener('click', function () {
    form.reset();
    processingMessage.textContent = '';
    if (resultBox) {
      resultBox.style.display = 'none';
      resultBox.innerHTML = '';
    }
  });
});
