// Wait for the HTML document to be fully loaded before running our code
document.addEventListener("DOMContentLoaded", () => {

    // Select the navbar element
    const navbar = document.getElementById("navbar");

    // Get the initial distance of the navbar from the top of the page
    const stickyPosition = navbar.offsetTop;

    // Function to add or remove 'sticky' class based on scroll position
    function handleScroll() {
        // Run this check only if navbar exists
        if (navbar) {
            // If we've scrolled past the initial position of the navbar
            if (window.scrollY > stickyPosition) {
                // Make it sticky
                navbar.classList.add("sticky");

                // Add padding to body so the content doesn't abruptly jump up
                // (because fixed elements behave somewhat like absolute positioning and take zero space)
                document.body.style.paddingTop = `${navbar.offsetHeight}px`;
            } else {
                // Remove sticky effect if we scroll back to top
                navbar.classList.remove("sticky");

                // Remove the extra padding
                document.body.style.paddingTop = "0";
            }
        }
    }

    // Attach our handleScroll function to the scroll event
    window.addEventListener("scroll", handleScroll);
});
