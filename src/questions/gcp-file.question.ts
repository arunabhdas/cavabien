import inquirer from 'inquirer';

import {Answer, Choice, FrameworkChoiceValue, StackValue} from '../models/answer-choice';

export async function gitlabFileQuestion(): Promise<Answer> {
    const listOfFiles: Choice[] = [
        {name: 'All recommended files (other files can be generated separate)', value: StackValue.DEFAULT},
        {name: 'CI template', value: StackValue.STACK1},
        {name: 'Bug (issue)', value: StackValue.STACK2},
        {name: 'Feature proposal (issue)', value: StackValue.STACK3},
        {name: 'License', value: FrameworkChoiceValue.FRAMEWORK_ANDROID_SDK},
        {name: 'Changelog', value: FrameworkChoiceValue.FRAMEWORK_COCOA_TOUCH},
        {name: 'Contributing', value: FrameworkChoiceValue.FRAMEWORK_FLUTTER},
        {name: 'Contributing', value: FrameworkChoiceValue.FRAMWORK_REACT}
    ];

    return await inquirer.prompt([{
        name: 'files',
        type: 'list',
        message: 'Which Gitlab files do you want to generate?',
        choices: listOfFiles,
    }]);
}