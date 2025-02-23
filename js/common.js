function handleSidebarMenu() {
    const sidebarDiv = document.querySelector('.menu-sidebar');
    const overlay = document.getElementById('bodyoverlay');
    const mainbody = document.body;
    const toggleNav = document.getElementById('hamburger');
    const closeNav = document.getElementById('close_nav');

    // Show the widget
    toggleNav.addEventListener('click', function() {
        mainbody.style.overflow = 'hidden';
        overlay.style.display = "block";
        overlay.style.opacity = 1;
        sidebarDiv.style.right = 0;
    });

    // Hide the widget
    closeNav.addEventListener('click', function() {
        sidebarDiv.style.right = "-400px";
        overlay.style.display = "none";
        overlay.style.opacity = 0;
        mainbody.style.overflow = '';
    });
}

// Initialize the functionalities
document.addEventListener('DOMContentLoaded', () => {
    handleSidebarMenu();
});