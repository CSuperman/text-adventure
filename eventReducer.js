// event reducer

const events = [
    { msg: "something just happened! ...", type: "main" },
    { msg: "ut oh! ...", type: "destructive" },
    { msg: "something just happened! ...", type: "main" },
    { msg: "...", type: "series" }
];
 
let output = 
    events.filter( (event) => event.type == "IT");
for (let i = 0; i < output.length; i++) {
    console.log(output[i].msg)
};
