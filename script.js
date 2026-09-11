const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

const form = document.getElementById('contact-form');
const formError = document.getElementById('form-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  formError.textContent = '';

  if (!name || !email || !message) {
    formError.textContent = 'Please fill in all fields.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formError.textContent = 'Please enter a valid email address.';
    return;
  }

  alert('Message sent! Thank you, ' + name + '.');
  form.reset();
});