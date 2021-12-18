import inquirer from 'inquirer';

import { Answer, StackValue, Choice } from '../models/answer-choice';

export async function providerQuestion(): Promise<Answer> {

    const listOfFiles: Choice[] = [
        {name: 'Github', value: StackValue.STACK1},
        {name: 'Gitlab', value: StackValue.STACK2},
        {name: 'CodeCommit (AWS)', value: StackValue.STACK3},
        {name: 'Bitbucket', value: StackValue.STACK4},
    ];

    return await inquirer.prompt([{
        name: 'provider',
        type: 'list',
        message: 'Select a Git hosting provider:',
        choices: listOfFiles,
    }]);
}