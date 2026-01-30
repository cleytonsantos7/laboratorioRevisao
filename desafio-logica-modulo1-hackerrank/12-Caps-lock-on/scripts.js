function processData(input) {
    if (input === input.toUpperCase()) {
         input = input.toLowerCase();
    } else if (input[0] === input[0].toLowerCase() && input.slice(1) === input.slice(1).toUpperCase()) {
         input = input[0].toUpperCase() + input.slice(1).toLowerCase();
    }
    
    console.log(input);
} 

const input0 = 'cAPS';
const input1 = 'lock';
const input2 = 'CAPS';

processData(input0);
processData(input1);
processData(input2);