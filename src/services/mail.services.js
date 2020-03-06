import aws from 'aws-sdk';
import constants from "../config/constants";


export default function sendEmail(options) {
  aws.config.update({
    accessKeyId: constants.amazon.AccessKeyID,
    secretAccessKey: constants.amazon.SecretAccessKey,
    region: constants.amazon.region
  });
  const ses = new aws.SES({ apiVersion: 'latest' });
  return new Promise((resolve, reject) => {
    ses.sendEmail(
      {
        Source: options.from,
        Destination: {
          CcAddresses: options.cc,
          ToAddresses: options.to,
        },
        Message: {
          Subject: {
            Data: options.subject,
          },
          Body: {
            Html: {
              Data: options.body,
            },
          },
        },
        ReplyToAddresses: options.replyTo,
      },
      (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      },
    );
  });
}
