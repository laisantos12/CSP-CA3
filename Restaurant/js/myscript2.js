// Password Validation Section
function removeElementById(id) {
    if (document.getElementById(id)) {
        document.getElementById(id).remove();
    }
}

function addErrorParagraph(id, text) {
    if (!document.getElementById(id)) {
        var tempParagraph = document.createElement('p');
        tempParagraph.classList.add('error');
        tempParagraph.setAttribute('id', id);
        tempParagraph.appendChild(document.createTextNode(text));
        document.getElementById('error-messages').insertAdjacentElement('beforeend', tempParagraph);
    }
}

window.validateInput = function (event) {
    var value = event.target.value;
    // lowercase validation
    if ((/[a-z]/.test(value))) {
        removeElementById('lowercase-error-msg');
    } else {
        addErrorParagraph('lowercase-error-msg', 'The password must have at least one lowercase letter.');
    }
    // uppercase validation
    if ((/[A-Z]/.test(value))) {
        removeElementById('uppercase-error-msg');
    } else {
        addErrorParagraph('uppercase-error-msg', 'The password must have at least one uppercase letter.');
    }
    // special characters validation
    if ((/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value))) {
        removeElementById('special-char-error-msg');
    } else {
        addErrorParagraph('special-char-error-msg', 'It must contain one digit and one special character.');
    }
    // min length validation
    if (value.length < 8) {
        addErrorParagraph('length-error-msg', 'And it must be at least eight characters long.');
    } else {
        removeElementById('length-error-msg');
    }
}