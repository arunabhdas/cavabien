// import { codeOfConduct, contributing, license, toDo, readme, changelog, dockerFile } from '../templates/universal';
import { readme, checklist, androidChecklist, reactChecklist, cocoaChecklist, flutterChecklist, angularChecklist } from '../templates/universal';
import { githubFileQuestion } from '../questions';
import { ConsoleMessage } from '../models/console-message';
import { showInfo } from '../utils/logger.util';
import {Answer, FrameworkChoiceValue, PlatformChoiceValue, StackValue} from "../models/answer-choice";

export async function stack1Actions(): Promise<any> {
    const githubFileAnswer: Answer = await githubFileQuestion();

    switch (githubFileAnswer.files) {
        case StackValue.README: {
            return readme();
        }
        case StackValue.CHECKLIST: {
            return checklist();
        }
        case PlatformChoiceValue.PLATFORM_ANDROID: {
            return androidChecklist();
        }
        case FrameworkChoiceValue.FRAMWORK_REACT: {
            return reactChecklist();
        }
        case FrameworkChoiceValue.FRAMEWORK_COCOA_TOUCH: {
            return cocoaChecklist();
        }
        case FrameworkChoiceValue.FRAMEWORK_FLUTTER: {
            return flutterChecklist();
        }
        case FrameworkChoiceValue.FRAMWORK_ANGULAR: {
            return angularChecklist();
        }
        default: {
            return showInfo(`The ${githubFileAnswer.files} roadmap is not available yet.`);
        }
    }
}