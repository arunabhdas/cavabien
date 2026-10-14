import { FileName } from '../../models/filename';
import { defaultTemplate } from '../default/default.template';

export function flutterChecklist() {
    const fileName = FileName.CHECKLIST;

    const fileContent = (): string => {
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
    }

    return defaultTemplate(fileName, fileContent());
}
