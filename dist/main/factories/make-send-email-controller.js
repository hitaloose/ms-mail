"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSendEmailController = void 0;
var send_email_controller_1 = require("../../application/controllers/send-email-controller");
var make_send_email_usecase_1 = require("./make-send-email-usecase");
var makeSendEmailController = function () {
    return new send_email_controller_1.SendEmailController(make_send_email_usecase_1.makeSendEmailUsecase());
};
exports.makeSendEmailController = makeSendEmailController;
