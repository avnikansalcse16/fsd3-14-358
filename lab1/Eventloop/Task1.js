const f1 = () => {
    console.log("f1 starts");
    f2();
    console.log("f1 running");
    console.log("f1 end")
};
const f2 = () => {
    console.log("f2 starts");
    f3();
    console.log("f2 running");
    console.log("f2 end")
 };
const f3 = () => {
    console.log("f3 starts");
    console.log("f3 running");
    console.log("f3 end")
 };

 
function main() {
console.log("main");
f1();
console.log("end main");
}
main();
//synchronous call
//single stated
//In asynchronous we use event loop to manage the call stack.
//asynchronous call itself using timers. These are :
//set timers
//set immediate
//process. next tick
//set interval