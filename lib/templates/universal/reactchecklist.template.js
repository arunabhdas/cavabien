"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactChecklist = void 0;
const filename_1 = require("../../models/filename");
const default_template_1 = require("../default/default.template");
function reactChecklist() {
    const fileName = filename_1.FileName.CHECKLIST;
    const fileContent = () => {
        return `### TODO

---

- [ ] HTML, CSS and JavaScript basics
- [ ] Git
- [ ] npm and package management
- [ ] Create a React app with Vite
- [ ] JSX and Components
- [ ] Props vs State
- [ ] Conditional rendering and lists
- [ ] Hooks (useState, useEffect, custom hooks)
- [ ] Routing with React Router
- [ ] State management (Context, Redux or Zustand)
- [ ] Fetching data from APIs
- [ ] Styling (CSS Modules, Tailwind)
- [ ] Testing with Jest and React Testing Library
- [ ] Keep Learning`;
    };
    return (0, default_template_1.defaultTemplate)(fileName, fileContent());
}
exports.reactChecklist = reactChecklist;
