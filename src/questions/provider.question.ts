import inquirer from 'inquirer';

import { Answer, StackValue, Choice } from '../models/answer-choice';

export async function providerQuestion(): Promise<Answer> {

    const listOfFiles: Choice[] = [
        {name: 'Frontend', value: StackValue.STACK1},
        {name: 'Backend', value: StackValue.STACK2},
        {name: 'DevOps', value: StackValue.STACK3},
        {name: 'Fullstack', value: StackValue.STACK4}
    ];

    return await inquirer.prompt([{
        name: 'provider',
        type: 'list',
        message: 'Select a target roadmap',
        choices: listOfFiles,
    }]);
}