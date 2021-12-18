"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cavabien = void 0;
const answer_choice_1 = require("./models/answer-choice");
const actions_1 = require("./actions");
const questions_1 = require("./questions");
const logger_util_1 = require("./utils/logger.util");
async function Cavabien() {
    (0, logger_util_1.showTitleAndBanner)();
    const providerAnswer = await (0, questions_1.providerQuestion)();
    if (providerAnswer.provider === answer_choice_1.StackValue.STACK1) {
        return await (0, actions_1.stack1Actions)();
    }
}
exports.Cavabien = Cavabien;
