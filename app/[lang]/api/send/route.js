import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { name, email, subject, message } = await req.json();
  console.log("asdadsaa");
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail],
      subject: subject,
      react: (
        <>
          <h2>
            {name} con email: {email} llenó el formulario de la pagina de
            grupomat y dice lo siguiente:
          </h2>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.log("Errorsito");
    return NextResponse.json({ error });
  }
}
