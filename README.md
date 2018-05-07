# Typescript Node.js Template

A very simple Typescript Node.js template with hot reloading.

## Install

Download this repository and execute these commands in the extracted/cloned folder

    npm install
    

## Commands

| Command       | Description                                         |
|---------------|-----------------------------------------------------|
| npm run build | just builds into build/                             |
| npm run start | starts the application                              |
| npm run watch | watches the application for changes and restarts it |



## Absolute Path Module Resolver
The Absolute Path Module Resolver resolves absolute paths in the compiled Typescript (js). It hooks into require and checks if the required module is found in the directory, if yes, it will load it from the directory, otherwise it searches in node_modules.

An Example for a absolute import in Typescript: 
```javascript 
import { DatabaseHandler } from "Database/DatabaseHandler"; 
```
It imports the DatabaseHandler from the folder Database in the root directory of your sources.

##### The resolver code
```javascript
import * as fs from 'fs';
const moduleProto = Object.getPrototypeOf(module);
const originalRequire = moduleProto.require;
moduleProto.require = function(request: string) {
    var path : string = __dirname + "/" + request;
    return originalRequire.call(this, (!request.startsWith(".") && fs.existsSync(path + ".js")) ? path : request);
}
```