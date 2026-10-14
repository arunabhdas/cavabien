# Cavabien
CLI tool for generating roadmaps

Cavabien asks you which roadmap and framework you want to learn, then writes a `CHECKLIST.md`
of the topics to cover into your current directory. Tick items off as you go and track your
progress in git alongside your project.

Inspired by
https://roadmap.sh

## Screenshots
![](https://raw.githubusercontent.com/arunabhdas/cavabien/main/screenshots/screenshot_1.png)

## Installation

Requires [Node.js](https://nodejs.org/) and npm.

```bash
npm install -g cavabien
```

## NPMjs

https://www.npmjs.com/package/cavabien

## Usage

Run `cavabien` from the folder where you want the checklist to be created:

```bash
mkdir my-learning-plan && cd my-learning-plan
cavabien
```

Cavabien asks two questions. Use the arrow keys to pick an answer and press Enter.

**1. Select a target roadmap**

| Roadmap   | Status          |
|-----------|-----------------|
| Frontend  | Available       |
| Backend   | Not available yet |
| DevOps    | Not available yet |
| Fullstack | Not available yet |

**2. Which framework would you like to use?** (Frontend)

| Choice    | What you get                                                                   |
|-----------|--------------------------------------------------------------------------------|
| Checklist | A blank starter checklist to fill in yourself                                  |
| Android   | Java, Kotlin, Android Studio, OOP, data structures and algorithms, Gradle      |
| Cocoa     | iOS with Swift, UIKit, SwiftUI, Auto Layout, concurrency, Core Data, XCTest, App Store release |
| Flutter   | Dart, widgets, navigation, state management, async, networking, testing, release |
| React     | HTML/CSS/JS, JSX, components, hooks, React Router, state management, testing   |
| Angular   | TypeScript, components, dependency injection, routing, forms, RxJS, NgRx, testing |

### Example

```
? Select a target roadmap Frontend
? Which framework would you like to use? React
GENERATE: CHECKLIST.md...
CREATE: CHECKLIST.md
```

This creates `CHECKLIST.md` in the current directory:

```markdown
### TODO

---

- [ ] HTML, CSS and JavaScript basics
- [ ] Git
- [ ] npm and package management
- [ ] Create a React app with Vite
...
- [ ] Keep Learning
```

Mark an item as done by changing `- [ ]` to `- [x]`. GitHub and most markdown viewers render
these as checkboxes.

### If CHECKLIST.md already exists

Cavabien asks `This file already exists. Do you want to overwrite it?`

- **Yes** replaces the file with a fresh checklist (`UPDATE: CHECKLIST.md`). Any items you ticked
  off are lost.
- **No** (the default) leaves the file untouched and exits with `ERROR: CHECKLIST.md already exists!`

## Running locally (development)

```bash
git clone https://github.com/arunabhdas/cavabien.git
cd cavabien
npm install
npm run build
npm link        # makes the `cavabien` command point at your local build
```

After changing anything in `src/`, run `npm run build` again. There is no need to re-link.

If you previously installed cavabien from npm, remove that copy first so it doesn't shadow your
local build:

```bash
npm uninstall -g cavabien
```

To run without linking, use `node /path/to/cavabien/bin/cavabien`.

When you're done, remove the link with `npm unlink -g cavabien`.

### Adding a new checklist

1. Create a template in `src/templates/universal/` (copy `reactchecklist.template.ts` as a starting point)
2. Export it from `src/templates/universal/index.ts`
3. Add a choice in `src/questions/aws-file.question.ts` and a matching `case` in `src/actions/stack1.actions.ts`
4. `npm run build`

### npm scripts

| Script                    | What it does                                        |
|---------------------------|-----------------------------------------------------|
| `npm run build`           | Compile `src/` to `lib/`                            |
| `npm run docs`            | Generate API docs with TypeDoc into `docs/`         |
| `npm run tscov`           | Check TypeScript type coverage (minimum 90%)        |
| `npm run publish-package` | Build, then publish to npm                          |

## Publishing steps

```bash
npm login
npm run publish-package
```

## Dependencies
figlet — Get a nice ASCII art from a string
inquirer — A collection of common interactive command line user interfaces.
fs-extra — fs-extra contains methods that aren’t included in the vanilla Node.js fs package. Such as mkdir -p, cp -r, and rm -rf.
kleur — The fastest Node.js library for formatting terminal text with ANSI colors!
tslib — Runtime library for TypeScript helper functions
