import sendgrid from "@sendgrid/mail";
import generateEmailTemplate from "../../helper/generate-email-template";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function cartMailer(req, res) {
  const stringHtml = generateEmailTemplate(req.body.items, req.body.formValues);

  try {
    await sendgrid.send({
      to: `${req.body.formValues.ShipEmail}`,
      from: {
        email: process.env.EMAIL_FROM,
        name: "Prime Metal",
      },
      bcc: [
        {
          email: `${process.env.EMAIL_BCC_1}`,
        },
        {
          email: `${process.env.EMAIL_BCC_2}`,
        },
        {
          email: `${process.env.EMAIL_BCC_3}`,
        },
        {
          email: `${process.env.EMAIL_BCC_4}`,
        },
      ],
      subject: `New Duct Piping and Fitting Request for Quote From PrimeTime Residential App`,
      html: stringHtml,
      attachments: [
        {
          filename: `primetimeapp-${req.body.formValues.jobName}.pdf`,
          content: req.body.pdf,
          type: "application/pdf",
          disposition: "attachment",
        },
      ],
    });
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default cartMailer;
