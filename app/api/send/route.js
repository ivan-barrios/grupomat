import { EmailTemplate } from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = "grupomat <info@grupomatagency.com>";
//grupomat.realestate@gmail.com
//This is to send to grupomat
export async function POST(req, res) {
  const { name, email, phone, subject, message } = await req.json();
  try {
    const dataGM = await resend.emails.send({
      from: fromEmail,
      to: ["grupomat.realestate@gmail.com"],
      subject: subject,
      react: (
        <>
          <h1>
            El usuario con nombre: {name}, con email: {email} y numero de
            teléfono {phone} llenó el formulario de la pagina de grupomat y dice
            lo siguiente:
          </h1>
          <p>{message}</p>
        </>
      ),
    });

    const dataClient = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Gracias por Contactar a GrupoMat",
      react: (
        <>
          <EmailTemplate name={name} />
        </>
      ),
    });

    return NextResponse.json({ dataGM, dataClient });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
