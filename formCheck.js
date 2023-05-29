function emailCheck() {
    let emailCheck = String(document.getElementById('emailCheck').value);
    let validMsg = document.getElementById('validEmail');
    let invalidMsg = document.getElementById('invalidEmail');
    
    if(emailCheck.includes('@')) {
        if(emailCheck.includes('.')) {
        emailCheck.setAttribute('class', 'form-control is-valid');
        validMsg.style.display = "block";
        invalidMsg.style.display = "none";
    }
    else{
    emailCheck.setAttribute('class', 'form-control is-invalid');
        validMsg.style.display = "none";
        invalidMsg.style.display = "block";
    }
    }
    else {
        emailCheck.setAttribute('class', 'form-control is-invalid');
        validMsg.style.display = "none";
        invalidMsg.style.display = "block";
    }
}

function clearForm() {
    let email = document.getElementById('emailCheck').value;

    console.log('Email entered:' + email);

    document.getElementById('mailListForm').reset();
}