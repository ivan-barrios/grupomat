import Subtitle from "../Subtitle";
import ContactForm from "./ContactForm";

import { getScopedI18n } from "@/locales/server";

const Contact = async () => {
  const t = await getScopedI18n("contactus");

  return (
    <section
      id="contacto"
      className="scroll-m-[120px] text-white w-full max-w-[1200px] mt-[60px] lg:mt-[120px]"
    >
      <div className="card w-full flex flex-col gap-[27px] items-center px-4 py-8 md:p-12">
        <Subtitle text={t("title")} />
        <div className="w-[70%] bg-white bg-opacity-50 h-[2px]" />
        <p className="text-xl sm:text-2xl text-center">{t("subtitle")}</p>
        <ContactForm
          name={t("fields.name")}
          email={t("fields.email")}
          phone={t("fields.phone")}
          subject={t("fields.subject")}
          message={t("fields.message")}
          send={t("fields.send")}
          success={t("success")}
          label={t("label")}
        />
      </div>
    </section>
  );
};

export default Contact;
