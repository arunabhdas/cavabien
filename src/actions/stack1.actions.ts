// import { codeOfConduct, contributing, license, toDo, readme, changelog, dockerFile } from '../templates/universal';
import { readme, checklist } from '../templates/universal';
import { githubFileQuestion } from '../questions';
import { ConsoleMessage } from '../models/console-message';
import { showInfo } from '../utils/logger.util';
import {Answer, StackValue} from "../models/answer-choice";

export async function stack1Actions(): Promise<any> {
    const githubFileAnswer: Answer = await githubFileQuestion();

    switch (githubFileAnswer.files) {
        case StackValue.README: {
            return readme();
        }
        case StackValue.CHECKLIST: {
            return checklist();
        }
    }
}