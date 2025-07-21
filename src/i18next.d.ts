// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import translationVie from './translation/translationVie.json';

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "vie";
    // custom resources type
    resources: {
      vie: typeof translationVie;
    };
    // other
  }
}