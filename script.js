function shortcut(str1, str2) {
    if (str1 === '' || str2 === '') {
        return '';
    }

    const firstLetterStr1 = str1.charAt(0);
    const firstLetterStr2 = str2.charAt(0);

    // Swap the case of the initial letters
    const initialLetters = (firstLetterStr1 === firstLetterStr1.toUpperCase() && firstLetterStr1 === firstLetterStr1.toUpperCase())
        ? firstLetterStr1.toUpperCase() + firstLetterStr2.toUpperCase()
        : firstLetterStr1.toLowerCase() + firstLetterStr2.toLowerCase();

    return initialLetters;
}

// Taking user input using prompt
// const userInput1 = prompt('Enter the first string:');
// const userInput2 = prompt('Enter the second string:');

// // Calling the shortcut function with user input
// const result = shortcut(userInput1, userInput2);

// // Displaying the result
// alert(result);
