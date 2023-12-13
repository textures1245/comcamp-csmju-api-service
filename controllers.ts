import sgMail from "@sendgrid/mail";
import { Response, Request } from "express";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config();

const Controller = {
  mailSender: async (req: Request, res: Response) => {
    type MailData = {
      to: string;
      from: string;
      subject: string;
      text: string;
      html?: string;
    };

    const { to, from, subject, text }: MailData = req.body;

    if (!to || !from || !subject || !text) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    const msg = {
      to,
      from,
      subject,
      text,
    };

    sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

    try {
      await sgMail.send(msg);
      console.log("Email sent successfully");
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error: any) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        error: "Internal server error",
        details: error?.message,
      });
    }
  },
};

export default Controller;
