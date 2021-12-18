"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitlabFileQuestion = void 0;
const tslib_1 = require("tslib");
const inquirer_1 = (0, tslib_1.__importDefault)(require("inquirer"));
const answer_choice_1 = require("../models/answer-choice");
async function gitlabFileQuestion() {
    const listOfFiles = [
        { name: 'All recommended files (other files can be generated separate)', value: answer_choice_1.StackValue.DEFAULT },
        { name: 'CI template', value: answer_choice_1.StackValue.STACK1 },
        { name: 'Bug (issue)', value: answer_choice_1.StackValue.STACK2 },
        { name: 'Feature proposal (issue)', value: answer_choice_1.StackValue.STACK3 },
        { name: 'License', value: answer_choice_1.FrameworkChoiceValue.FRAMEWORK_ANDROID_SDK },
        { name: 'Changelog', value: answer_choice_1.FrameworkChoiceValue.FRAMEWORK_COCOA_TOUCH },
        { name: 'Contributing', value: answer_choice_1.FrameworkChoiceValue.FRAMEWORK_FLUTTER },
        { name: 'Contributing', value: answer_choice_1.FrameworkChoiceValue.FRAMWORK_REACT_NATIVE }
    ];
    return await inquirer_1.default.prompt([{
            name: 'files',
            type: 'list',
            message: 'Which Gitlab files do you want to generate?',
            choices: listOfFiles,
        }]);
}
exports.gitlabFileQuestion = gitlabFileQuestion;
