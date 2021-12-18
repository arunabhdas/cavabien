import { FileName } from '../../models/filename';
import { defaultTemplate } from '../default/default.template';

export function androidChecklist() {
    const fileName = FileName.CHECKLIST;

    const fileContent = (): string => {
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
    }

    return defaultTemplate(fileName, fileContent());
}