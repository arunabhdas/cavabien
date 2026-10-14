import { FileName } from '../../models/filename';
import { defaultTemplate } from '../default/default.template';

export function cocoaChecklist() {
    const fileName = FileName.CHECKLIST;

    const fileContent = (): string => {
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
    }

    return defaultTemplate(fileName, fileContent());
}
