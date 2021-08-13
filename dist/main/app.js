"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var controller_adapter_1 = require("./adapter/controller-adapter");
var make_send_email_controller_1 = require("./factories/make-send-email-controller");
var app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
app.use(cors_1.default);
app.post('/send-email', controller_adapter_1.controllerAdapter(make_send_email_controller_1.makeSendEmailController()));
