const sgMail = require("@sendgrid/mail");

// use APIKEY provided by SendGrid.
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function test_mail(req, res) {
  // craft your message
  const msg = {
    to: "eric1162004@hotmail.com", // Change to your recipient
    from: "eric1162004@hotmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  // send the email
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ error: "" });
    })
    .catch(error => {
      res.status(200).json({ error: `${error} Please try again.` });
    });
}
