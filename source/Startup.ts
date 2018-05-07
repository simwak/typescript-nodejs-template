//#region Absolute Path Module Resolve
import * as fs from 'fs';
const moduleProto = Object.getPrototypeOf(module);
const originalRequire = moduleProto.require;
moduleProto.require = function(request: string) {
    var path : string = __dirname + "\\" + request;
    return originalRequire.call(this, (!request.startsWith(".") && fs.existsSync(path + ".js")) ? path : request);
}
//#endregion

import { Application } from "Application";
new Application();