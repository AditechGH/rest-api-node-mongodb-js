import fs from "fs";
import path from "path";
import constants from "../config/constants";

const header = fs.readFileSync(
  path.join(path.resolve("./src/public"), "header.html"),
  "utf8"
);
const footer = fs.readFileSync(
  path.join(path.resolve("./src/public"), "footer.html"),
  "utf8"
);

export function userWelcomeEmail() {
  const email = fs.readFileSync(
    path.join(path.resolve("./src/public"), "welcomeEmail.html"),
    "utf8"
  );
  return email;
}

export function courierWelcomeEmail(options) {
  const email = `${header}
  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                    <tbody>
                        <tr>
                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                                <h1 id="_name" style="text-align: left;">
  <span style="font-size:24px">Thank you for choosing GooSendr</span>
  </h1></td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
    <tbody class="mcnDividerBlockOuter">
        <tr>
            <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 18px 18px 0px;">
                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">
                    <tbody>
                        <tr>
                            <td> <span></span></td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                    <tbody>
                        <tr>
                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                                <p align="left"> <span style="color:#000000">
  Congratulations! You have successfully registered with GooSendr as a courier.<br/><br/>
  You've entered <strong><a href="mailto:${options.email}" target="_blank" >${
    options.email
  }</a> </strong> as the contact email address for your GooSendr account. To complete the process, we just need to verify that this email address belongs to you. Simply click the link below and sign in.</span></p>

                                <p style="padding: 5px; margin: 0 0 6px;"><strong> <a style="background: #3853a4; color: #fff; display: block; font-size: 12px; font-weight: bold; height: 24px; line-height: 20px; padding-top: 2px; text-align: center; text-decoration: none; width: 99px;" href="${
                                  constants.url
                                }/email-verification?token=${
    options.token
  }&email=${options.email}" target="_blank" >Verify Now</a> </strong></p>
                                <p align="left"> <span style="color:#000000"> <strong>This link is only valid for 24 hours.</strong> </span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
  ${footer}`;
  return email;
}

export function forgotPassword(options) {
  const email = `${header}
  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                    <tbody>
                        <tr>
                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                                <h1 id="_name" style="text-align: left;">
  <span style="font-size:24px">Hello ${options.username}</span>
  </h1></td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
    <tbody class="mcnDividerBlockOuter">
        <tr>
            <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 18px 18px 0px;">
                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">
                    <tbody>
                        <tr>
                            <td> <span></span></td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                    <tbody>
                        <tr>
                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                                <p align="left"> <span style="color:#000000"> We're sorry you're having trouble logging into your <span class="il">gooSendr</span> account. We're happy to be of service, just click on the forget my password link.
                                    <a href="${
                                      constants.url
                                    }/reset-password?token=${
    options.token
  }" target="_blank">reset password</a>
                                    </span>
                                </p>
                                <p align="left"> <span style="color:#000000"> <strong>This link is only valid for 24 hours.</strong> </span></p>
                                <p align="left"> <span style="color:#000000"> If you didn't ask us for help with your password,send an email to <a>support@<span class="il">gooltd</span>.com</a> or call us at <strong>(+233)-20-051 6773</strong>. </span>
                                </p>
                                <p align="left"><span style="color:#000000">Reporting, it is important because it helps us prevent fraudsters from stealing your information</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
   ${footer}`;
  return email;
}

export function resetPassword(options) {
  const email = `
  ${header}
  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
  <tbody class="mcnTextBlockOuter">
      <tr>
          <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                  <tbody>
                      <tr>
                          <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                              <h1 id="_name" style="text-align: left;">
<span style="font-size:24px">Hello ${options.username}</span>
</h1></td>
                      </tr>
                  </tbody>
              </table>
          </td>
      </tr>
  </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
  <tbody class="mcnDividerBlockOuter">
      <tr>
          <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 18px 18px 0px;">
              <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">
                  <tbody>
                      <tr>
                          <td> <span></span></td>
                      </tr>
                  </tbody>
              </table>
          </td>
      </tr>
  </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
  <tbody class="mcnTextBlockOuter">
      <tr>
          <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                  <tbody>
                      <tr>
                          <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                              <p align="left"> <span style="color:#000000">
   You just changed your password.<br /> If you didn't change your password, give us a call right away at <strong>(+233)-20-051 6773</strong>
   </span></p>
                              <p>Just a reminder:</p>
                              <ul>
                                  <li style="text-indent: 0px;margin-left: 28px;">Never share your password with anyone.</li>
                                  <li style="text-indent: 0px;margin-left: 28px;">
                                      Create passwords that are hard to guess and don't use personal information. Be sure to include uppercase and lowercase letters, numbers, and symbols.</li>
                              </ul>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </td>
      </tr>
  </tbody>
</table>
  ${footer}
  `;
  return email;
}
