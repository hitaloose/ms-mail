"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_adapter_1 = require("../adapter/controller-adapter");
var make_send_email_controller_1 = require("../factories/make-send-email-controller");
exports.default = controller_adapter_1.controllerAdapter(make_send_email_controller_1.makeSendEmailController());
