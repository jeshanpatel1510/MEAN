let ChatBot = require("./Chatboat");
let readline = require('readline');

let r1 = readline.createInterface(
    process.stdin, process.stdout
);

r1.setPrompt("Y => ");
r1.prompt();

r1.on('line', (msq)=>{
    console.log('B => '+ChatBot.Reply(msq));
    r1.prompt();
}).on('close', ()=>{
    process.exit(0);
})