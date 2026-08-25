import { writeFile, readFile, appendFile } from "fs/promises";


// await writeFile("stud.txt", "Avni kansal\nRollno: 82");
//console.log("File written");
//const data = await readFile("stud.txt", "utf-8");
//console.log (`file contents: ${data}`);

const addContent = async (fname, content) =>{
    await writeFile(fname, content);
    console.log(`{Content} written in file: ${fname}`);

};

const readContent = async (fname) =>{
    const data = await readFile(fname, "utf-8");
    return data;

};

const appendData = async (fname, content) => {
    await appendFile(fname, "\n" + content);
    console.log("data appended");
}

// await addContent("notes.txt", "Fs is easy in JS");
// console.log( "contents\n",await readContent('notes.txt'));
await appendData("notes.txt", "it can add, read and update content");
console.log(" updated contents\n", await readContent('notes.txt'));
