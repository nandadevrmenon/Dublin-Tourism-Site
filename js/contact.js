'use strict'

const button = document.querySelector('#contact #form button');
button.addEventListener('click', () => {
    const form = document.querySelector("#form");
    const name = form.name.value;
    const surname = form.surname.value;
    const email = form.email.value;
    const confirmEmail = form.confirmEmail.value;
    const query = form.query.value;

    // make sure that there is no empty fields
    if(validFields(name, surname, email, confirmEmail, query)) {

        // make sure emails are valid
        if(validEmail(email), validEmail(confirmEmail)) {
            
            // since emails are not case sensitive
            if(email.toLowerCase() === confirmEmail.toLowerCase()) {
                
                // success: send message
                showFeedback("Message successfully sent", true)
            }
            else {
                // emails don't match
                showFeedback("The emails do not match", false)
            }
        }
        else {
            showFeedback("Invalid email", false)
        }

    }
    else {
        // fields are empty
        showFeedback("Fields should have at least 3 characters", false);
    }
});

// test that the email is valid 
const validEmail = email => {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}

// fields are valid when they have at least 2 characters
const validFields = (...fields) => {
    let valid = true;
    for (let field of fields) if(field.length < 3) valid = false;

    return valid;
};

// shows a message for a short period of time
const showFeedback = (msg, positive) => {
    const feedback = document.querySelector('#contact #form #feedback');
    const className = positive ? 'positive' : 'negative';
    feedback.textContent = msg;
    feedback.classList.toggle(className);
    setTimeout(() => {
        feedback.textContent = '';
        feedback.classList.toggle(className);
    }, 2000);

} 

