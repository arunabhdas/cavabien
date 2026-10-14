import { FileName } from '../../models/filename';
import { defaultTemplate } from '../default/default.template';

export function angularChecklist() {
    const fileName = FileName.CHECKLIST;

    const fileContent = (): string => {
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
    }

    return defaultTemplate(fileName, fileContent());
}
