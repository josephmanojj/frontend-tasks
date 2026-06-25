const buttons = document.querySelectorAll(".toggle-button");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const element = this.nextElementSibling;
        element.classList.toggle("hidden");
        if (button.textContent === '+') {
        button.textContent = '-';
        } else {
            button.textContent = '+';
        }
    });
});