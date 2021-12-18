import { FileName } from '../../models/filename';
import { defaultTemplate } from '../default/default.template';

export function checklist() {
    const fileName = FileName.TODO;

    const fileContent = (): string => {
        return `### TODO

---

- [x] Add the README.md file in the root of your project.
- [ ] My next todo...
- [ ] Another todo...`;
    }

    return defaultTemplate(fileName, fileContent());
}