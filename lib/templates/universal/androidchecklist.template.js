"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.androidChecklist = void 0;
const filename_1 = require("../../models/filename");
const default_template_1 = require("../default/default.template");
function androidChecklist() {
    const fileName = filename_1.FileName.CHECKLIST;
    const fileContent = () => {
        return `### TODO

---

- [ ] Java.
- [ ] Kotlin
- [ ] Git
- [ ] Install Android Studio
- [ ] Learn the basics of Kotlin
- [ ] Basics of OOP
- [ ] DataStructures and Algorithms
- [ ] What is and how to use Gradle
- [ ] Keep Learning`;
    };
    return (0, default_template_1.defaultTemplate)(fileName, fileContent());
}
exports.androidChecklist = androidChecklist;
