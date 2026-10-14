"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cocoaChecklist = void 0;
const filename_1 = require("../../models/filename");
const default_template_1 = require("../default/default.template");
function cocoaChecklist() {
    const fileName = filename_1.FileName.CHECKLIST;
    const fileContent = () => {
        return `### TODO

---

- [ ] Swift
- [ ] Git
- [ ] Install Xcode
- [ ] Basics of OOP and Protocol-Oriented Programming
- [ ] UIKit and Cocoa Touch fundamentals
- [ ] SwiftUI
- [ ] Auto Layout
- [ ] App lifecycle
- [ ] Concurrency (GCD, async/await)
- [ ] Networking with URLSession
- [ ] Persistence (UserDefaults, Core Data, SwiftData)
- [ ] Dependency management with Swift Package Manager
- [ ] Testing with XCTest
- [ ] Publishing to the App Store
- [ ] Keep Learning`;
    };
    return (0, default_template_1.defaultTemplate)(fileName, fileContent());
}
exports.cocoaChecklist = cocoaChecklist;
