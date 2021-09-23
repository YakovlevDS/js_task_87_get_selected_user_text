// ? Task:Get Selected Text


// Solution 1

const getSelectedText = () => window.getSelection().toString();
console.log("alert: ", getSelectedText());

// ! Explanation: Get the text the user has select using inbuilt getSelection property.
