"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerQuestion = void 0;
const tslib_1 = require("tslib");
const inquirer_1 = (0, tslib_1.__importDefault)(require("inquirer"));
const answer_choice_1 = require("../models/answer-choice");
async function providerQuestion() {
    const listOfFiles = [
        { name: 'Github', value: answer_choice_1.StackValue.STACK1 },
        { name: 'Gitlab', value: answer_choice_1.StackValue.STACK2 },
        { name: 'CodeCommit (AWS)', value: answer_choice_1.StackValue.STACK3 },
        { name: 'Bitbucket', value: answer_choice_1.StackValue.STACK4 },
    ];
    return await inquirer_1.default.prompt([{
            name: 'provider',
            type: 'list',
            message: 'Select a Git hosting provider:',
            choices: listOfFiles,
        }]);
}
exports.providerQuestion = providerQuestion;
