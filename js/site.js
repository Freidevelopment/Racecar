// get the string from the user
function getValues() {
    let inputString = document.getElementById('inputString').value;
     let replaceCharacters = '';
     let inspectedString = inspectCharacters(inputString, replaceCharacters);
    
    let stringResult = checkForPalindrome(inspectedString);

    displayResults(stringResult, inspectedString);
}

// Inspects and replaces any special characters or spaces in inputString
function inspectCharacters(inputString, replaceCharacters) {
    let lowerCase = inputString.toLowerCase();
    return lowerCase.replaceAll(/[^a-zA-Z0-9]/g, replaceCharacters);
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
function displayResults(stringResult, inspectedString) {
    
    if(stringResult == 'isPalindrome') {
      // display a corecct message
      Swal.fire({
        icon: 'success',
        title: 'Nice!',
        text: `Yes ${inspectedString} is a Palindrome`,
        background: 'var(--njf-theme-100)',
        backdrop: false
    });
    } else if(stringResult == 'notPalindrome') {
      // display a false message
      Swal.fire({
        icon: 'error',
        title: 'Sorry!',
        text: `No, unfortunately ${inspectedString} is not a Palindrome`,
        background: 'var(--njf-theme-150)',
        backdrop: false
    });
    }
}