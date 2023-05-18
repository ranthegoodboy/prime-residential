export const creditApplicationStepsMap = {
  step1: {
    active: true,
    fields: [
      "cname",
      "cemail",
      "cphone",
      "cfax",
      "ctype",
      "cshippingadd",
      "ccity",
      "cstate",
      "czipcode",
    ],
  },
  step2: {
    active: false,
    fields: [
      "bcfname",
      "bclname",
      "bcemail",
      "bcphone",
      "bcfax",
      "bcbilladd",
      "bccity",
      "bcstate",
      "bczipcode",
      "bcbankname",
      "bcbankadd",
      "bcbankcity",
      "bcbankstate",
      "bcbankzipcode",
      "bcbankphone",
    ],
  },
  step3: { active: false, fields: [] },
  step4: {
    active: false,
    fields: ["acceptTerms1", "acceptTerms2", "acceptTerms3"],
  },
};
