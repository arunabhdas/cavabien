import {Answer, InfrastructureChoiceValue, StackValue} from './models/answer-choice';
import { stack1Actions } from './actions';
import { providerQuestion } from './questions';
import { showTitleAndBanner } from './utils/logger.util';

export async function Cavabien(): Promise<any> {
    showTitleAndBanner();

    const providerAnswer: Answer = await providerQuestion();

    if (providerAnswer.provider === StackValue.STACK1) {
        return await stack1Actions();
    }
    /*
    else if (providerAnswer.provider === StackValue.STACK2)  {
        return await gitlabActions();
    } else if (providerAnswer.provider === StackValue.STACK3)  {
        return await bitbucketActions();
    } else if (providerAnswer.provider === StackValue.STACK4)  {
        return await codecommitActions();
    }
    */
}