document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contact-form');
    const bookingForm = document.querySelector('.booking-form form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        
        if (name === "" || email === "" || message === "") {
            alert('Please fill in all fields.');
            return;
        }

        
        console.log({ name, email, message });
        alert('Message sent successfully!\nThank You for your feedback!');
        
        contactForm.reset();
    });

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const arrival = document.getElementById('arrival').value;
        const departure = document.getElementById('departure').value;
        const adults = document.getElementById('adults').value;
        const children = document.getElementById('children').value;

        
        if (arrival === "" || departure === "" || adults === "" || children === "") {
            alert('Please fill in all fields.');
            return;
        }

        
        if (new Date(arrival) >= new Date(departure)) {
            alert('Departure date must be after arrival date.');
            return;
        }
        console.log({ arrival, departure, adults, children });
        alert('Available!');
        

        bookingForm.reset();
    });
});
