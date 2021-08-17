type ConstantsProps = {
  sendEmailTopic: 'SEND_EMAIL' | 'HML/SEND_EMAIL' | undefined
}

export const constants: ConstantsProps = {
  sendEmailTopic: process.env.SEND_EMAIL_TOPIC as any
}