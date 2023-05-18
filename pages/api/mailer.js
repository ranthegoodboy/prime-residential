import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const Mailer = async (req, res) => {
  try {
    await sendgrid.send({
      to: `${req.body.formValues.cemail}`,
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
      subject: `Prime Credit Application`,
      html: `${req.body.message}`,
    });
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
};

export default Mailer;
