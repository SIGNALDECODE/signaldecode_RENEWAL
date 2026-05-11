export type ContactInfoItem = {
  label: string;
  value: string;
};

export type ContactBreadcrumb = {
  label: string;
};

export type ContactHeroData = {
  bg: string;
  title: string;
  desc: string;
  breadcrumb: ContactBreadcrumb[];
};

export type ContactInputField = {
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  type?: "text" | "email" | "tel" | "url";
};

export type ContactCheckboxGroup = {
  name: string;
  label: string;
  required: boolean;
  columns: string[][];
};

export type ContactTextareaField = {
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
};

export type ContactConsent = {
  text: string;
  badge: string;
};

export type ContactFormData = {
  display: {
    eyebrow: string;
    title: string;
  };
  info: ContactInfoItem[];
  fields: ContactInputField[];
  checkboxGroups: ContactCheckboxGroup[];
  textarea: ContactTextareaField;
  consent: ContactConsent;
  submitLabel: string;
};

export type ContactData = {
  hero: ContactHeroData;
  form: ContactFormData;
};
