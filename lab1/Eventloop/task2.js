const f1 = () => {
    console.log("f1 ");
}; 
const f2 = () => {
    console.log("f2 ");  
 };
const main = () => {
    console.log("main");
   // setTimeout(f1, 5000);
    setInterval(f2, 1000);
    console.log("end");
};
main();
// promise