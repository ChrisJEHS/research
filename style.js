// Simple client-side router for clean single-page switching
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".page-section");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            
            // Remove active states
            navLinks.forEach(item => item.classList.remove("active"));
            sections.forEach(sec => sec.classList.remove("active"));

            // Add active state to clicked link
            link.classList.add("active");

            // Extract target section ID from href and show it
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).classList.add("active");

            // Scroll slightly back to top of main workspace gracefully
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});