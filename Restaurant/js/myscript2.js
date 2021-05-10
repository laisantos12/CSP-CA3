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
//Get Btn And Create Function
document.getElementById('myBtn').addEventListener('click', getData);

function getData() {
    // console.log('test');

    //Get API
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => {
            //console.log(data);

            let author = data.results;
            // console.log(author);

            //Get Data Value
            let output = "<h2><center>Get User Data</center></h2>";

            //Get Data Loop Through
            author.forEach(function (lists) {
                output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">Phone Number: ${lists.cell}</li>
                            <li class="list-group-item">DOB: ${lists.dob.date}</li>
                            <li class="list-group-item">Age: ${lists.dob.age}</li>
                            <li class="list-group-item">Email ID: ${lists.email}</li>
                            <li class="list-group-item">Gender: ${lists.gender}</li>
                            <li class="list-group-item">City: ${lists.location.city}</li>
                            <li class="list-group-item">Country: ${lists.location.country}</li>
                            <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
                        </ul>
                    </div>
                </div> `;
            });

            //Show On Our Screen All Data
            document.getElementById('output').innerHTML = output;

        });
};
