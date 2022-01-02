/* Contact form */
window.addEventListener("DOMContentLoader", function(){
// get the form elements defined in your HTML form section
var form = document.getElementById("my-form");
var button = document.getElementById("my-form-button");
var status= document.getElementById("status");

// Success and Error functions for after the form is submitted

function success() {
    form.reset();
    status.classList.add('success');
    status.innerHTML = "Your message was sent successfully! Thank you!";
}

funciton error() {
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem!";
}

// handle the form submission event
})