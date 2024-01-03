import { title } from "@/constants/strings";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message, recaptcha_token } = data;
    if (!name || !email || !message || !recaptcha_token)
      return NextResponse.json({ error: "Invalid data, please try again!" });

    // const res = await resend.emails.send({
    //   subject: "Thank you for contacting me",
    //   from: title + "<" + process.env.SENDER_EMAIL + ">",
    //   to: [email],
    //   bcc: process.env.FORWARD_EMAIL,
    //   react: ContactEmailTemplate(data),
    // });
    // return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
