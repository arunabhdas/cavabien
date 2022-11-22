"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checklist = void 0;
const filename_1 = require("../../models/filename");
const default_template_1 = require("../default/default.template");
function checklist() {
    const fileName = filename_1.FileName.CHECKLIST;
    const fileContent = () => {
        return `### TODO

---

- [x] Add the README.md file in the root of your project.
- [ ] My next todo...
- [ ] Another todo...`;
    };
    return (0, default_template_1.defaultTemplate)(fileName, fileContent());
}
exports.checklist = checklist;
