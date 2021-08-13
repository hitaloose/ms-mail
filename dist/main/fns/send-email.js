"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
var controller_adapter_1 = require("../adapter/controller-adapter");
var make_send_email_controller_1 = require("../factories/make-send-email-controller");
exports.sendEmail = controller_adapter_1.controllerAdapter(make_send_email_controller_1.makeSendEmailController());
