// contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;

    // form submission logic here
    console.log(`Form submitted: ${name}, ${email}, ${destination}`);
});
