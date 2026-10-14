"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angularChecklist = void 0;
const filename_1 = require("../../models/filename");
const default_template_1 = require("../default/default.template");
function angularChecklist() {
    const fileName = filename_1.FileName.CHECKLIST;
    const fileContent = () => {
        return `### TODO

---

- [ ] HTML, CSS and JavaScript basics
- [ ] TypeScript
- [ ] Git
- [ ] npm and the Angular CLI
- [ ] Components and Templates
- [ ] Data binding and Directives
- [ ] Services and Dependency Injection
- [ ] Routing
- [ ] Forms (Template-driven and Reactive)
- [ ] HttpClient and fetching data from APIs
- [ ] RxJS and Observables
- [ ] Signals and state management (NgRx)
- [ ] Testing with Jasmine/Karma or Jest
- [ ] Keep Learning`;
    };
    return (0, default_template_1.defaultTemplate)(fileName, fileContent());
}
exports.angularChecklist = angularChecklist;
