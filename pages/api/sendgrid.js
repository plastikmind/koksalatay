import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "koksalatayshop@gmail.com", // Your email where you'll receive emails
      from: "koksalatayshop@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>
                <div><p>e-posta: ${req.body.email}</p>
                    <p>isim: ${req.body.name}</p>
                    <p>soyisim: ${req.body.lastname}</p>
                    <p>adres: ${req.body.address}</p>
                    <p>posta kodu:${req.body.postalcode}</p>
                    <p>şehir: ${req.body.city}</p>
                    <p>telefon:${req.body.phone}</p>
                    <p>fiyat: ${req.body.totalPrice}</p>
                    <p>deneme: ${req.body.deneme}</p>
                </div>
            </div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;