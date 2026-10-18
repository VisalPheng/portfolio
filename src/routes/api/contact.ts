import { title } from "@/constants/strings";
import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_KEY);

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const data = await request.json();
          const { name, email, message, recaptcha_token } = data;
          if (!name || !email || !message || !recaptcha_token)
            return Response.json({ error: "Invalid data, please try again!" });

          // const res = await resend.emails.send({
          //   subject: "Thank you for contacting me",
          //   from: title + "<" + process.env.SENDER_EMAIL + ">",
          //   to: [email],
          //   bcc: process.env.FORWARD_EMAIL,
          //   react: ContactEmailTemplate(data),
          // });
          // return Response.json(res);
        } catch (error) {
          return Response.json({ error });
        }
      },
    },
  },
});
