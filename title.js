function updateHighlightText() {
    const highlightElement = document.querySelector('.highlight');

    if (window.innerWidth <= 800) {
        highlightElement.textContent = "AK";
    } else {
        highlightElement.textContent = "Kacper Adamiak";
    }
}
window.addEventListener('load', updateHighlightText);
window.addEventListener('resize', updateHighlightText);