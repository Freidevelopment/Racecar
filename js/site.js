// get the string from the user
function getValues() {
    let inputString = document.getElementById('inputString').value;
     let replaceCharacters = '';
     let inspectedString = inspectCharacters(inputString, replaceCharacters);
    
    let stringResult = checkForPalindrome(inspectedString);

    displayResults(stringResult, inputString);
}

// Inspects and replaces any special characters or spaces in inputString
function inspectCharacters(inputString, replaceCharacters) {
    return inputString.replaceAll(/[^a-zA-Z0-9]/gi, replaceCharacters);
}
// Check whether a string is a Palindrome or not
function checkForPalindrome(inspectedString) {
    let result = '';
    let inspect = '';

    for(let index = inspectedString.length - 1; index >= 0; index-- ) {
      inspect += inspectedString[index];
    }

    if (inspect == inspectedString) {
        result = "isPalindrome";
    } else {
      result = 'notPalindrome';
    }
    
    return result;

}

// Display the results from checkForPalindrome to the user
function displayResults(stringResult, inputString) {
    
    if(stringResult == 'isPalindrome') {
      // display a corecct message
      Swal.fire({
        icon: 'success',
        title: 'Nice!',
        text: `Yes ${inputString} is a Palindrome`,
        backdrop: false
    });
    } else if(stringResult == 'notPalindrome') {
      // display a corecct message
      Swal.fire({
        icon: 'error',
        title: 'Sorry!',
        text: `No, unfortunately ${inputString} is not a Palindrome`,
        backdrop: false
    });
    }
}