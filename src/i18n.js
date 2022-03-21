import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      payment: "The only pay app you need for your smartphone",
      sendEmail: "Send us an email to get a demo",
      form: {
        name: "Name",
        message: "Message",
        email: "Email",
      },
      ourFeatures: "Our app features",
    },
  },
  ro: {
    translation: {
      payment: "Singura aplicatie de plati de care ai nevoie",
      sendEmail: "Trimiteti-ne un mail",
      form: {
        name: "Nume",
        message: "Mesaj",
        email: "Email",
      },
      ourFeatures: "Caracteristicile aplicatiei noastre",
    },
  },
  fr: {
    translation: {
      payment:
        "La seule application de méthode de paiement dont vous avez besoin pour votre smartphone",
      sendEmail: "Envoyez-nous un e-mail pour obtenir une démo",
      form: {
        name: "Nom",
        message: "Un message",
        email: "Email",
      },
      ourFeatures: "Fonctionnalités de notre application",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["path"],
    },

    interpolation: {
      escapeValue: false,
    },
  });

const i18Config = { resources, i18n };
export default i18Config;
