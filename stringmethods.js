//  -----  .length  -----

const success = "Success";
const needLongerPassword = "Password should be at least 8 characters";

function findPasswordLength(password) {
   
    
    return password.length >= 8 ? success : needLongerPassword;
}


// ----  .trim  -----


function trimPasswordString(generatedPassword) {
    
    return generatedPassword.trim();
}


///----- startsWith  -----

const valid = 'Valid Phone Number';
const invalid = 'Invalid Phone Number';

function isPhoneNumberValid(phoneNumber) {
    
    return phoneNumber.startsWith('1-') ? valid : invalid;
}


//  -----  .toLowerCase ------
function transformCityToLowerCase(city) {
    
    return city.toLowerCase(); 
}


// ------  .toUpperCase -----
function transformPageHeading(heading) {
    return heading.toUpperCase();
}

// ----- .includes -----
const positive = 'positive';
const negative = 'negative';
// use of the ternary '?' to check if and what to do if not
function hasFun(message) {
    
    return message.includes('fun') ? positive.toUpperCase() : negative.toUpperCase();
}

// -----  .split(splits a string into an array!) -----

function splitEmails(emailList) {
    
    return emailList.split(', ');
}


// ------  slice ----
function getAccountNumberLastFour(accountNumber) {
    // 
    return accountNumber.slice(5)
}

// ----  .replace  ----
function fixTypo(emailList) {
    return emailList.replace('pgn.com', 'atn.com');
}

// ----  