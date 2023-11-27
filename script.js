function shortcut(str1, str2) {
    if (str1 === '' || str2 === '') {
        return '';
    }

    const initialLetters = str1.charAt(0) + str2.charAt(0);
    return initialLetters.toLowerCase();
}

// Taking user input using prompt
const userInput1 = prompt('Enter the first string:');
const userInput2 = prompt('Enter the second string:');

// Calling the shortcut function with user input
const result = shortcut(userInput1, userInput2);

// Displaying the result
alert(result);
