import { FileName } from '../../models/filename';
import { defaultTemplate } from '../default/default.template';

export function reactChecklist() {
    const fileName = FileName.CHECKLIST;

    const fileContent = (): string => {
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
    }

    return defaultTemplate(fileName, fileContent());
}
