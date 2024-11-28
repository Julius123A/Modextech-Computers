document.addEventListener("DOMContentLoaded", () => {
    console.log("Website is loaded and ready.");

    // Contact Form Validation
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        // Simple validation
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you for contacting us, " + name + "! We will get back to you shortly.");
        contactForm.reset();
    });
});
