"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bugReport = void 0;
const path_1 = require("../../models/path");
const filename_1 = require("../../models/filename");
const default_template_1 = require("../default/default.template");
function bugReport() {
    const fileName = filename_1.FileName.BUG_REPORT;
    const hasPath = true;
    const filePath = path_1.GCPPath.ISSUE_TEMPLATE;
    const fileContent = () => {
        return `---
name: Bug report
about: Create a report to help us improve
title: ''
labels: ''
assignees: ''

---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
    - OS: [e.g. iOS]
    - Browser [e.g. chrome, safari]
    - Version [e.g. 22]

**Smartphone (please complete the following information):**
    - Device: [e.g. iPhone6]
    - OS: [e.g. iOS8.1]
    - Browser [e.g. stock browser, safari]
    - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.
        `;
    };
    return (0, default_template_1.defaultTemplate)(fileName, fileContent(), hasPath, filePath);
}
exports.bugReport = bugReport;
