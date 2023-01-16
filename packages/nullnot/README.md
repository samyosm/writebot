# nullnot

Nullnot is a very small library that checks if a template literal has a null value. If it does, it return nothing. But if it doesn't then it simply return the result of the string literal.
This could be useful for making strings from variables and you allow the variables to be null.

## Installation

You can install story-gen by doing `npm install nullnot` or `yarn add nullnot`.

## Usage

If you need a message from a name, and an email that can be null. You could ensure the email part is not included by doing the following:

```javascript
const { nn } = require('notnull')

const getMessage = (name, email) => {
    email = nn`Your email is ${email}.`;
    
    return `Hello, ${name}. ${email}`;
}

console.log(getMessage('Samyos')); // Hello, Samyos.
console.log(getMessage('Samyos', 'samy.osmium@gmail.com')); // Hello, Samyos. Your email is samy.osmium@gmail.com
```
