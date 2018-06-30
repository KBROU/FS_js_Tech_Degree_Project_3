// Kody Broussard
// Project 3: Build an Interactive Form
//6/12/2018
//Built using Vanilla JavaScript

//General Variables
const firstName = document.getElementById('name');
const userEmail = document.getElementById('mail');
const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var emailResult = false; 
const otherTitle = document.getElementById('other-title');
const jobList = document.getElementById('title');
const option = document.getElementsByTagName('option');
const otherField = document.getElementById('other-title');
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
const shirtColorArray = Array.from(shirtColor);
const activitiesCheck = document.querySelector('.activities');
const allCheck  = document.querySelectorAll('input[type="checkbox"]');
const allCheckArray = Array.prototype.slice.call(allCheck);
var checkBoxResult = false;
const allClass = document.querySelector("input[name='all']");
const expressClass = document.querySelector("input[name='express']");
const jsFrameClass = document.querySelector("input[name='js-frameworks']");
const jsLibClass = document.querySelector("input[name='js-libs']");
const nodeClass = document.querySelector("input[name='node']");
const ul = document.createElement('ul');
const priceArray = []; 
const activitiesField = document.querySelector('.activities');
var registerButton = document.querySelector('button[type="submit"]');

//Variable for calculator
const priceDisplay = document.createElement('label');
    priceDisplay.className = 'legend';
    priceDisplay.textContent = 'Total Price - $' + 0;
    priceDisplay.style.fontSize = '1.25em';
    activitiesField.appendChild(priceDisplay);
    priceDisplay.style.display = 'none';

//Variables for credit card information
const creditCard = document.querySelector('.credit-card');
const creditCardInput = document.getElementById('cc-num');
const zipInput = document.getElementById('zip');
const cvvInput = document.getElementById('cvv');
const payment = document.getElementById('payment');
payment.options[1].setAttribute('selected', 'selected');
payment.options[0].disabled = true;
const paypal = creditCard.nextElementSibling;
    paypal.className = 'paypal';
const bitcoin = paypal.nextElementSibling; 
    bitcoin.className = 'bitcoin'; 
var creditCardResult = false;
var zipResult = false;
var cvvResult = false;
const reCredit = /^[0-9]{13,16}$/;// [0-9] is digits allowed {13,16} is min & max
const reZip = /^[0-9]{5}$/;
const reCvv = /^[0-9]{3}$/;

//Variables and styling for Error messages
const nameError = document.createElement('span');
nameError.textContent = 'Please Enter Full Name';
nameError.className = 'error';
nameError.style.color = 'black';
const nameErrorSelector= firstName.parentNode;

const emailError = document.createElement('span');
emailError.textContent = 'Please Enter Real Email';
emailError.className = 'error';
emailError.style.color = 'black';
const emailErrorSelector= userEmail.parentNode;

const checkError = document.createElement('span');
checkError.textContent = 'Please Check One Activity';
checkError.className = 'error';
checkError.style.color = 'black';

const creditError = document.createElement('span');
creditError.textContent = 'Enter a 13-16 Digit Number';
creditError.className = 'error';
creditError.style.color = 'black';
const creditErrorSelector = creditCardInput.parentNode;
var experation = cvvInput.parentNode.nextSibling.nextSibling;

const zipError = document.createElement('div');
zipError.textContent = 'Enter a 5 Digit Number';
zipError.className = 'error';
zipError.style.color = 'black';
const zipErrorSelector = zipInput.parentNode;

const cvvError = document.createElement('div');
cvvError.textContent = 'Enter a 3 Digit Number';
cvvError.className = 'error';
cvvError.style.color = 'black';
const cvvErrorSelector = cvvInput.parentNode;

//CSS Code for Error Messages
var errorStyle = document.createElement('style');
errorStyle.type = 'text/css';
errorStyle.innerHTML = '.error { color = red; font-size: 1em;  border: 2px solid red; width: 10%; margin-left: 1%; text-align: center; margin-bottom: 10px; padding:8px 5px; }';
document.getElementsByTagName('head')[0].appendChild(errorStyle);    

//Set focus on the first text field
firstName.focus();

//Text field revealed when other job role is selected

//Hide the Other Title input field and shirt color drop down
otherField.style.display = 'none';
shirtColor.parentNode.style.display = 'none';

//Function to display other title input field with other option is clicked
jobList.addEventListener('click', (e) => {
  if (e.target.value === 'other') {
    otherField.style.display = 'block';
    } else {
        otherField.style.display = 'none';
    }
});

//T-Shirt Info function
function displayColor (cIndex, theme) {
    if (theme.value === 'heart js' || theme.value === 'js puns') {
    shirtColor.parentNode.style.display =  'block';
    } else {
        shirtColor.parentNode.style.display = 'none';
    }

    if (theme.value === 'heart js') {
        const JsSelect = shirtColor.options[3];
        JsSelect.setAttribute('selected', 'selected');  
        for (i = 0; i <= 2; i++) {
            const JSIndex = cIndex[i];
            JSIndex.style.display = 'none';
        }
    } else {
        const JsSelect = shirtColor.options[3];
        JsSelect.removeAttribute('selected'); 
    }  
    
    if (theme.value === 'js puns') {
        const JsSelect = shirtColor.options[0];
        JsSelect.setAttribute('selected', 'selected');  
        for (i = 3; i <= 5; i++) {
            const JSIndex = cIndex[i];
            JSIndex.style.display = 'none';
        }
    } else {
        const JsSelect = shirtColor.options[0];
        JsSelect.removeAttribute('selected');
    }  
}

//Register for activities functions
function register (check) {
    if ((check.name === 'js-frameworks' || check.name === 'express') && check.checked) {
        expressClass.disabled = true;
        expressClass.parentNode.style.color = 'grey';
        jsFrameClass.disabled = true;
        jsFrameClass.parentNode.style.color = 'grey';
        if ( check.name === 'express') {
                expressClass.disabled = false;
                 expressClass.parentNode.style.color = 'black';
            }else if (check.name === 'js-frameworks') {
                jsFrameClass.disabled = false;
                jsFrameClass.parentNode.style.color = 'black';
            }
        
   } else if (check.name === 'js-frameworks' || check.name === 'express')  {
        expressClass.disabled = false;
        expressClass.parentNode.style.color = 'black';
        jsFrameClass.disabled = false;
        jsFrameClass.parentNode.style.color = 'black';
   }
  
   if ((check.name === 'js-libs' || check.name === 'node') && check.checked) {
        jsLibClass.disabled = true;
        jsLibClass.parentNode.style.color = 'grey';
        nodeClass.disabled = true;
        nodeClass.parentNode.style.color = 'grey';
        if ( check.name === 'js-libs') {
                jsLibClass.disabled = false;
                jsLibClass.parentNode.style.color = 'black';
            }else if (check.name === 'node') {
                nodeClass.disabled = false;
                nodeClass.parentNode.style.color = 'black';
            }
        
   } else if (check.name === 'js-libs' || check.name === 'node')  {
        jsLibClass.disabled = false;
        jsLibClass.parentNode.style.color = 'black';
        nodeClass.disabled = false;
        nodeClass.parentNode.style.color = 'black';
   } 
    
//Calculate Cost functions   
}

function cost (money) {
    const value = money.parentNode.textContent.match(/\d+/g).map(Number);
    var lengthNumber = value.length - 1;

        if (money.checked) {
            var price = value[lengthNumber];
        } else {
            var price = - value[lengthNumber];
        }
    
        calculatorArray(price);
}

function calculatorArray (calTotal) {
    const priceInput = calTotal;
    priceArray.push(priceInput); 
    calculate();
    const li = document.createElement('li');
    li.textContent = priceInput;
    ul.appendChild(li); 
    
}
//Use of reduce() Method
function getSum(total, num) {
    return total + num;
}
//Sum of the price array using reduce() Method
function calculate () {
    const finalPrice = priceArray.reduce(getSum);
    priceDisplay.textContent = 'Total - Price $' + finalPrice;
}


//Payment info section
paypal.style.display = 'none'; 
bitcoin.style.display = 'none';

function paymentDisplay (pay) {
    if (pay.value === 'paypal') {
        paypal.style.display = 'block'; 
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
        } else if (pay.value === 'bitcoin') {
            paypal.style.display = 'none'; 
            creditCard.style.display = 'none';
            bitcoin.style.display = 'block'; 
        } else {
            paypal.style.display = 'none'; 
            creditCard.style.display = 'block';
            bitcoin.style.display = 'none'; 
        }
}


//Form validation

//Check email format function
function emailCheck () {
    var emailResultTest = reEmail.test(userEmail.value);
    if (emailResultTest === true) {
        emailResult = true; 
    } else {
        emailResult = false; 
    }
}
//Check if one of the Registered Activities is checked
function checkBox () {
    for (i=0; i <= allCheckArray.length-1; i++) {
        if (allCheckArray[i].checked) {
            checkBoxResult = true;
            break;
            } else {
                checkBoxResult = false;
            }
    }
}
//Check if credit card information is correct
function creditCheck () {
    var creditResultTest = reCredit.test(creditCardInput.value);
    var zipResultTest = reZip.test(zipInput.value);
    var cvvResultTest = reCvv.test(cvvInput.value);
    if (creditResultTest === true) {
        creditCardResult = true; 
    } else {
        creditCardResult = false; 
    }
    if (zipResultTest === true) {
        zipResult = true; 
    } else {
        zipResult = false; 
    }
    if (cvvResultTest === true) {
        cvvResult = true; 
    } else {
        cvvResult = false; 
    }
    
}
//Validate entire form to enable submit button

 function formVal () {
   if (payment.options[1].value === payment.value) {
     if (firstName.value === "") {
       registerButton.disabled = true;
       } else if (emailResult === false) {
            registerButton.disabled = true;
       } else if (checkBoxResult === false) {
            registerButton.disabled = true;      
       } else if (creditCardResult === false) {
             registerButton.disabled = true;      
        } else if (zipResult === false) {
             registerButton.disabled = true;      
        } else if (cvvResult === false) {
             registerButton.disabled = true;      
        } else {
            registerButton.disabled = false; 
        }
   } else  {
       if (firstName.value === "") {
       registerButton.disabled = true;
       } else if (emailResult === false) {
            registerButton.disabled = true;
       } else if (checkBoxResult === false) {
            registerButton.disabled = true;      
       }  else {
            registerButton.disabled = false; 
        }      
    }
   if (registerButton.disabled === true) {
       registerButton.style.color = 'white';
       registerButton.style.backgroundColor = 'grey';
       registerButton.style.cursor = 'not-allowed';
       } else {
           registerButton.style.color = null;
           registerButton.style.backgroundColor = null;
           registerButton.style.cursor = 'pointer';
       }
}

//Form validation error message

function errorMessage () {
    if (firstName.value === "") {
        nameErrorSelector.insertBefore(nameError, firstName.nextSibling);
        firstName.style.width = '65%';
        nameError.style.display = 'inline';
        } else {
            nameError.style.display = 'none';
            firstName.style.width = '100%';
        }
    if(emailResult === false) {
       emailErrorSelector.insertBefore(emailError, userEmail.nextSibling);
        userEmail.style.width = '65%';
        emailError.style.display = 'inline';
       } else {
            emailError.style.display = 'none';
            userEmail.style.width = '100%';
       }
    if (checkBoxResult === false) {
        activitiesCheck.insertBefore(checkError, activitiesCheck.firstElementChild);
        checkError.style.display ='inline';
        checkError.style.verticalAlign = '20px';
        }else {
            checkError.style.display ='none';
        }
    
    if (creditCardResult === false) {
        creditErrorSelector.insertBefore(creditError, creditCardInput.nextSibling);
        creditError.style.display = 'inline';
        creditError.style.verticalAlign = '15px';
        experation.style.paddingTop = '180px';
        } else {
            creditError.style.display = 'none';
            experation.style.paddingTop = '0px';
        }
    if (zipResult === false) {
        zipErrorSelector.insertBefore(zipError, zipInput.nextSibling);
        zipError.style.display = 'table';
        zipError.style.marginLeft = '5%';
        zipError.style.width = '130px';
        zipError.style.verticalAlign = '15px';
        experation.style.paddingTop = '180px';
        //creditCardInput.style.width = '65%';
        } else {
            zipError.style.display = 'none';
        }
    if (cvvResult === false) {
        cvvErrorSelector.insertBefore(cvvError, cvvInput.nextSibling);
        cvvError.style.display = 'table';
        cvvError.style.marginLeft = '5%';
        cvvError.style.width = '130px';
        cvvError.style.verticalAlign = '15px';
        experation.style.paddingTop = '180px';
        } else {
             cvvError.style.display = 'none';
        }

}


// Event Listeners

//T-Shirt Info Event Listener
shirtDesign.addEventListener('change', (e) => {
    for (i=0; i<=5; i++) {
       shirtColor.options[i].style.display = 'block'; 
    }
    const shirtTheme = e.target;
    displayColor(shirtColorArray, shirtTheme)
    
});

//Register for Activities Event Listener
activitiesCheck.addEventListener('change', (e) => {
    priceDisplay.style.display = 'block';
    const checkSelect = e.target; 
    register(checkSelect);
    cost(checkSelect)
});

//Payment Option Event Listener
payment.addEventListener('change', (e) => {
    const paymentOption = e.target;
    paymentDisplay(paymentOption); 
});

//Event listener for any form changes 
document.addEventListener('change', (e) => {
    formVal();
    checkBox ();
    emailCheck ();
    creditCheck ();
    errorMessage ();
});

//Event listener for any form clicks 
document.addEventListener('click', (e) => {
    formVal();
    checkBox ();
    emailCheck ();
    creditCheck ();
});

//Event listener for any form input
document.addEventListener('input', (e) => {
    formVal();
    checkBox ();
    emailCheck ();
    creditCheck ();
    errorMessage ();
});

//runs for form evaluation function on load
window.onload = function() {formVal()}





















