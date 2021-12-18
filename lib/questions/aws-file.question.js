"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubFileQuestion = void 0;
const tslib_1 = require("tslib");
const inquirer_1 = (0, tslib_1.__importDefault)(require("inquirer"));
const answer_choice_1 = require("../models/answer-choice");
async function githubFileQuestion() {
    const listOfFiles = [
        { name: 'Android', value: answer_choice_1.FrameworkChoiceValue.FRAMEWORK_ANDROID_SDK },
        { name: 'Cocoa', value: answer_choice_1.FrameworkChoiceValue.FRAMEWORK_COCOA_TOUCH },
        { name: 'Flutter', value: answer_choice_1.FrameworkChoiceValue.FRAMEWORK_FLUTTER },
        { name: 'React', value: answer_choice_1.FrameworkChoiceValue.FRAMWORK_REACT },
        { name: 'Angular', value: answer_choice_1.FrameworkChoiceValue.FRAMWORK_ANGULAR }
    ];
    return inquirer_1.default.prompt([{
            name: 'files',
            type: 'list',
            message: 'Which framework would you like to use?',
            choices: listOfFiles,
        }]);
}
exports.githubFileQuestion = githubFileQuestion;
