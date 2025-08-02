document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent!');
  this.reset();
});

document.getElementById('commentForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;

  const commentBox = document.createElement('div');
  commentBox.innerHTML = `<strong>${name}:</strong> <p>${comment}</p>`;
  document.getElementById('commentList').appendChild(commentBox);

  this.reset();
});

document.getElementById('downloadBtn').addEventListener('click', function () {
  alert('Resume download not implemented. You can link a PDF file here.');
});

document.getElementById('downloadBtn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'resume.pdf'; // Make sure this file exists in your project folder
  link.download = 'Derico_Garcia_Cadiang_Resume.pdf';
  link.click();
});
