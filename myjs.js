// myjs.js
document.addEventListener('DOMContentLoaded', function () {
    const primaryOrderButton = document.querySelector('.button');
    const secondaryOrderButtons = document.querySelectorAll('.sec-button');

    primaryOrderButton.addEventListener('click', () => {
        alert('Please Select a meal.');
    });

    secondaryOrderButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Your food is being processed!');
        });
    });
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}
);
