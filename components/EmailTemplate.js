import grupomatLogo from "@/public/grupomatLogo.png";

export const EmailTemplate = ({ name }) => (
  <div>
    <h1>Confirmación: Hemos Recibido Su Mensaje</h1>
    <h4>
      Estimado/a {name}, Gracias por ponerse en contacto con GrupoMat. <br />
      Valoramos su interés y apreciamos que haya tomado el tiempo para enviarnos
      su mensaje. <br />
      Su solicitud ha sido recibida y será revisada por nuestro equipo. Nos
      esforzamos por ofrecer respuestas rápidas y detalladas a todas las
      consultas que recibimos. En un plazo máximo de 48 horas hábiles, uno de
      nuestros representantes se pondrá en contacto con usted para
      proporcionarle la información que necesita. Agradecemos la oportunidad de
      atender sus necesidades y esperamos poder ayudarle de la mejor manera
      posible. <br />
      Atentamente, El Equipo de grupomat
    </h4>
  </div>
);
