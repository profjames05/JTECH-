document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  const statusBox = document.getElementById('form-status');

  const showStatus = (message, success) => {
    if (!statusBox) return;
    statusBox.textContent = message;
    statusBox.classList.remove('success', 'error');
    statusBox.classList.add(success ? 'success' : 'error');
  };

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const fullName = String(formData.get('fullName') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!fullName || !email || !message) {
      showStatus('Please fill in all required fields before submitting.', false);
      return;
    }

    if (!validateEmail(email)) {
      showStatus('Please enter a valid email address.', false);
      return;
    }

    if (message.length < 20) {
      showStatus('Your message must be at least 20 characters long.', false);
      return;
    }

    const payload = {
      fullName,
      email,
      phone: String(formData.get('phone') || '').trim(),
      company: String(formData.get('company') || '').trim(),
      service: String(formData.get('service') || '').trim(),
      message
    };

    console.info('Contact form payload ready for backend integration:', payload);
    showStatus('Your enquiry has been prepared successfully. Connect this form to your backend or email service to send it.', true);
    contactForm.reset();
  });
});
