const prompt = require('prompt-sync')();
let length = prompt("Enter Length of Stack : ");

let stack = new Array();

let ch = 0;
do
{
    console.log("\n---Stack Operations---");
    console.log("1.PUSH()");
    console.log("2.POP()");
    console.log("3.DISPLAY()");
    console.log("4.EXIT()");
    ch = parseInt(prompt("Choose Operation : "));

    switch(ch)
    {
        case 1:
            if(stack.length >= length)
            {
                console.log("> Stack Overflow!! :(");
            }
            else
            {
                let val = prompt("Enter a Number : ");
                stack.push(val);  
            }
            break;

        case 2:
            if(stack.length <= 0)
            {
                console.log("> Stack Underflow!! :(");
            }
            else
            {
                console.log(stack.pop()+" popped!!");  
            }
            break;

        case 3:
            if(stack.length <= 0)
            {
                console.log("> Stack Underflow!! :(");
            }
            else
            {
                console.log("Stack Elements : ");  
                stack.forEach(ele => {
                    console.log(ele+" ");
                });
            }
            break;

        case 4:
            console.log("Thank You!!");
            return 1;
            break;

        default :
            console.log("Choose Valid Operation !!");
    }
}while(ch!=0);
