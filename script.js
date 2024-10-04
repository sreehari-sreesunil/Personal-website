let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); // Use querySelectorAll for multiple sections
let navLinks = document.querySelectorAll('header nav a'); // Use querySelectorAll for multiple nav links

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
    // Toggle the display style based on the navbar's class
    if (navbar.classList.contains('active')) {
        navbar.style.display = "block"; // Show the navbar
    } else {
        navbar.style.display = "none"; // Hide the navbar
    }
};


function validationForm(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number= document.getElementById('number').value;
    var errorMessage = document.getElementById('error-message')

    errorMessage.innerHTML= "";

    if(name=== ""){
        errorMessage.innerHTML = "Name is required";
        return false;
    }

    if(!email.includes("@") || !email.includes(".")){
        errorMessage.innerHTML = "Please enter a valid eamil";
        return false;
    }

    if(number==='' || number.length !== 10 || !/^\d+$/.test(number)){
        errorMessage.innerHTML = "please enter a valid 10-digit number";
        return false;
    }
    return true;
}