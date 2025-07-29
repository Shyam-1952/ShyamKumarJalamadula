// Handles contact form submission and sends an email using mailto
// This script prevents default form submission and opens the user's email client with pre-filled details

document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('section:last-child form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var name = form.querySelector('input[type="text"]').value;
      var email = form.querySelector('input[type="email"]').value;
      var message = form.querySelector('textarea').value;
      var subject = encodeURIComponent('Portfolio Contact from ' + name);
      var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
      window.location.href = 'mailto:j.shyam9999@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});
