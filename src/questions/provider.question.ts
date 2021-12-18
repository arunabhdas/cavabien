import inquirer from 'inquirer';

import { Answer, StackValue, Choice } from '../models/answer-choice';

export async function providerQuestion(): Promise<Answer> {

    const listOfFiles: Choice[] = [
        {name: 'Django', value: StackValue.STACK1},
        {name: 'SpringBoot', value: StackValue.STACK2},
        {name: 'Rails', value: StackValue.STACK3},
        {name: 'Node', value: StackValue.STACK4},
    ];

    return await inquirer.prompt([{
        name: 'provider',
        type: 'list',
        message: 'Select a target stack:',
        choices: listOfFiles,
    }]);
}