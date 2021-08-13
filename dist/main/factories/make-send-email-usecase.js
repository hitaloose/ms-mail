"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSendEmailUsecase = void 0;
var send_email_usecase_1 = require("../../data/usecases/send-email-usecase");
var email_provider_1 = require("../../infra/providers/email-provider");
var contact_repository_1 = require("../../infra/repositories/contact-repository");
var mail_repository_1 = require("../../infra/repositories/mail-repository");
var makeSendEmailUsecase = function () {
    var contactRepository = new contact_repository_1.ContactRepository();
    var mailRepository = new mail_repository_1.MailRepository();
    var emailProvider = new email_provider_1.EmailProvider();
    return new send_email_usecase_1.SendEmail(contactRepository, mailRepository, emailProvider, mailRepository);
};
exports.makeSendEmailUsecase = makeSendEmailUsecase;
