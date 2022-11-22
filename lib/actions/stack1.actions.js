"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stack1Actions = void 0;
const universal_1 = require("../templates/universal");
const questions_1 = require("../questions");
const answer_choice_1 = require("../models/answer-choice");
async function stack1Actions() {
    const githubFileAnswer = await (0, questions_1.githubFileQuestion)();
    switch (githubFileAnswer.files) {
        case answer_choice_1.StackValue.README: {
            return (0, universal_1.readme)();
        }
        case answer_choice_1.StackValue.CHECKLIST: {
            return (0, universal_1.checklist)();
        }
        case answer_choice_1.PlatformChoiceValue.PLATFORM_ANDROID: {
            return (0, universal_1.androidChecklist)();
        }
    }
}
exports.stack1Actions = stack1Actions;
