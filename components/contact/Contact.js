import Subtitle from "../Subtitle";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contacto"
      className="scroll-m-[120px] text-white w-full max-w-[1200px] mt-[120px]"
    >
      <div className="card w-full flex flex-col gap-[27px] items-center px-4 py-8 md:p-12">
        <Subtitle text="CONTACTANOS" />
        <div className="w-[70%] bg-white bg-opacity-50 h-[2px]" />
        <p className="text-xl sm:text-2xl text-center">
          Trabajemos juntos y vendé más.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
