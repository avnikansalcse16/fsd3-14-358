# File system of NodeJs
CRUD= Create Retrieve Update Delete.
It allows Js code running outside the browserand interact directly to operating system.
## common operation on file/folder
-Reading and writing files -> readfile(), writefile(), appendfile()
-Directory managment -> mkdir(), rmdir(), readdir()
-Metadata/information -> stat(), lstat(), fstat()
-Watching for changes ->watch(), watchFile(), unwatchFile()
-Streaming Large file -> createReadStream(), cretaeWriteStream()
-File Operations -> rename(), truncate(), unlink(), link(), syslink()

NOTE = await can be used with any promise in async function. That async function will also be accessed by await keyword.