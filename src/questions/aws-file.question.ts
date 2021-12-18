import inquirer from 'inquirer';

import {Answer, Choice, FrameworkChoiceValue, StackValue} from '../models/answer-choice';

export async function githubFileQuestion(): Promise<Answer> {
    const listOfFiles: Choice[] = [
        {name: 'Android', value: FrameworkChoiceValue.FRAMEWORK_ANDROID_SDK},
        {name: 'Cocoa', value: FrameworkChoiceValue.FRAMEWORK_COCOA_TOUCH},
        {name: 'Flutter', value: FrameworkChoiceValue.FRAMEWORK_FLUTTER},
        {name: 'React', value: FrameworkChoiceValue.FRAMWORK_REACT},
        {name: 'Angular', value: FrameworkChoiceValue.FRAMWORK_ANGULAR}
    ];
    return inquirer.prompt([{
        name: 'files',
        type: 'list',
        message: 'Which framework would you like to use?',
        choices: listOfFiles,
    }]);
}