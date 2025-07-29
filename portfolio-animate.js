// GSAP hero animation
window.onload = () => {
    gsap.from("#name", {duration: 1.2, opacity: 0, y: -50});
    gsap.from(".tagline", {duration: 1, opacity: 0, y: 30, delay: 0.7});
    gsap.from(".icons a", {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        delay: 1.2,
        duration: 0.8
    });

    // Initialize AOS for scroll animations
    AOS.init({
        duration: 900,
        once: true
    });
};

// Prevent form submit (demo)
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent! (Demo only)");
});