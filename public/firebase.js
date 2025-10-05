const firebaseConfig = {
    apiKey: "AIzaSyA1poNiVcnniQQsGosv_JeG7qXjh66Tnf8",
    authDomain: "portfolio-website-f75b8.firebaseapp.com",
    databaseURL: "https://portfolio-website-f75b8-default-rtdb.firebaseio.com",
    projectId: "portfolio-website-f75b8",
    storageBucket: "portfolio-website-f75b8.appspot.com",
    messagingSenderId: "580094662721",
    appId: "1:580094662721:web:9d621c1b97f517a7e64ec0",
    measurementId: "G-C0D21SJ69K"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contact-form");

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    saveMessages(name, email, message);

    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("contact-form").reset();
}

const saveMessages = (name, email, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        message: message,
    });
};