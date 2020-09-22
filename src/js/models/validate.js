
let nameInput = document.getElementById('nameInput');
let phoneInput = document.getElementById('phoneInput');
let emailInput = document.getElementById('emailInput');
let seatingInput = document.getElementById('seatingInput');
let dateInput = document.getElementById('dateInput');
let timeInput = document.getElementById('timeInput');

let nameLabel = document.getElementById('nameLabel');
let phoneLabel = document.getElementById('phoneLabel');
let emailLabel = document.getElementById('emailLabel');
let seatingLabel = document.getElementById('seatingLabel');
let dateLabel = document.getElementById('dateLabel');
let timeLabel = document.getElementById('timeLabel');

let inputArr = [nameInput, phoneInput, emailInput, seatingInput, dateInput, timeInput];
let labelArr = [nameLabel, phoneLabel, emailLabel,seatingLabel, dateLabel, timeLabel];
let incompleteArr = [];

let str;

function validateName(){    
    var re = /^[A-Za-z]+$/;
    if(re.test(nameInput.value)) {
        nameLabel.style.borderBottom = 'green 1px solid';
        document.getElementById('invalid1').style.visibility = 'visible';
        document.getElementById('invalid1').innerHTML = 'Perfect';
        document.getElementById('invalid1').style.color = 'green';
        return (true)
    }
    else {
        /*nameInput.value = '';*/
        nameLabel.style.borderBottom = 'red 1px solid';
        document.getElementById('invalid1').style.color = 'red';
        document.getElementById('invalid1').style.visibility = 'visible';
        document.getElementById('invalid1').innerHTML = 'Invalid: Only Letters Allowed';
    }     
}

function validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {   
        emailLabel.style.borderBottom = 'green 1px solid';
        document.getElementById('invalid3').style.visibility = 'visible';
        document.getElementById('invalid3').innerHTML = 'Perfect';
        document.getElementById('invalid3').style.color = 'green';
        return (true)
    } else {
        /*emailInput.value = '';*/
        emailLabel.style.borderBottom = 'red 1px solid';
        document.getElementById('invalid3').style.color = 'red';
        document.getElementById('invalid3').style.visibility = 'visible';
        document.getElementById('invalid3').innerHTML = 'Invalid: Wrong Email';
    }
}

function validatePhone() {
    if (phoneInput.value.length > 9) {  
        phoneLabel.style.borderBottom = 'green 1px solid';
        document.getElementById('invalid2').style.visibility = 'visible';
        document.getElementById('invalid2').innerHTML = 'Perfect';
        document.getElementById('invalid2').style.color = 'green'; 
        return (true)
    } else {
        /*phoneInput.value = '';*/
        phoneLabel.style.borderBottom = 'red 1px solid';
        document.getElementById('invalid2').style.color = 'red'; 
        document.getElementById('invalid2').style.visibility = 'visible';
        document.getElementById('invalid2').innerHTML = 'Invalid: Number Must be 10 digits';
    }
}

function validateSeating() {
    var re = /^[0-9]*$/;
    if ( seatingInput.value > 12 || seatingInput.value == '') {   
        seatingInput.value = '';
        seatingLabel.style.borderBottom = 'red 1px solid';
        document.getElementById('invalid4').style.color = 'red'; 
        document.getElementById('invalid4').style.visibility = 'visible';
        document.getElementById('invalid4').innerHTML = 'Invalid: Numbers (1 - 12) Only';
        return (true)
    } else {
        
        document.getElementById('invalid4').style.visibility = 'visible';
        document.getElementById('invalid4').innerHTML = 'Perfect';
        document.getElementById('invalid4').style.color = 'green'; 
        
        
    }
}

nameInput.addEventListener('keydown', () => {
    validateName();
});
nameInput.addEventListener('keypress', () => {
    validateName();
});
nameInput.addEventListener('keyup', () => {
    validateName();
});

phoneInput.addEventListener('keydown', () => {
    validatePhone();
});
phoneInput.addEventListener('keypress', () => {
    validatePhone();
});
phoneInput.addEventListener('keyup', () => {
    validatePhone();
});

emailInput.addEventListener('keydown', () => {
    validateEmail();
});
emailInput.addEventListener('keypress', () => {
    validateEmail();
});
emailInput.addEventListener('keyup', () => {
    validateEmail();
});

seatingInput.addEventListener('keydown', () => {
    validateSeating();
});
seatingInput.addEventListener('keypress', () => {
    validateSeating();
});
seatingInput.addEventListener('keyup', () => {
    validateSeating();
});
