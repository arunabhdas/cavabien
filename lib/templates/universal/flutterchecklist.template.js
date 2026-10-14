"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flutterChecklist = void 0;
const filename_1 = require("../../models/filename");
const default_template_1 = require("../default/default.template");
function flutterChecklist() {
    const fileName = filename_1.FileName.CHECKLIST;
    const fileContent = () => {
        return `### TODO

---

- [ ] Dart
- [ ] Git
- [ ] Install the Flutter SDK and set up an IDE
- [ ] Basics of OOP
- [ ] Widgets (Stateless vs Stateful)
- [ ] Layouts and the widget tree
- [ ] Navigation and routing
- [ ] State management (Provider, Riverpod or Bloc)
- [ ] Async programming (Futures and Streams)
- [ ] Networking and JSON serialization
- [ ] Local storage (shared_preferences, sqflite)
- [ ] Packages from pub.dev
- [ ] Testing (unit, widget and integration tests)
- [ ] Building and releasing for Android and iOS
- [ ] Keep Learning`;
    };
    return (0, default_template_1.defaultTemplate)(fileName, fileContent());
}
exports.flutterChecklist = flutterChecklist;
