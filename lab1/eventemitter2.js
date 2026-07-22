
import {EventEmitter} from 'node:events'
const task=new EventEmitter();

const sayHi=(name)=>{
    console.log(`Logged-in ${name}`);
};

task.on('greet', sayHi);
task.on("greet",(name) => {
        console.log(` ${name} starts working `);

});
task.once("greet",()=> {
    console.log("System started");
});
task.once("exit", (name) => {
    console.log(`System is shutting down by ${name}`);
});

task.emit('greet', 'avika jain');
task.emit('greet', 'rahul singh');
task.emit('greet', 'sonia singh');
task.emit("greet", "Manager");