"use client";

import { Fragment, useRef, useState, type FormEvent } from "react";
import styles from "@/assets/styles/components/contact/ContactForm.module.scss";
import { contact } from "@/data/contact";

export default function ContactForm() {
  const { form } = contact;
  const [agree, setAgree] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleTextareaInput = () => {
    const t = textareaRef.current;
    if (!t) return;
    t.style.height = "auto";
    t.style.height = `${t.scrollHeight}px`;
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <aside className={styles.aside}>
          <div className={styles.displayWrap}>
            <h2 className={styles.display}>
              <span>{form.display.eyebrow}</span>
              <span>{form.display.title}</span>
            </h2>
            <span className={styles.displayBadge} aria-hidden="true">
              <svg
                viewBox="0 0 34 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.displayBadgeIcon}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.0238 7.6101C0 8.6001 0 9.7203 0 11V14.6667C0 19.8513 0 22.4455 1.6115 24.0551C3.2212 25.6667 5.8153 25.6667 11 25.6667H22C27.1847 25.6667 29.7788 25.6667 31.3885 24.0551C33 22.4455 33 19.8513 33 14.6667V11C33 9.7203 33 8.5983 32.9762 7.6101L18.2802 15.774C17.7356 16.0764 17.1229 16.2351 16.5 16.2351C15.8771 16.2351 15.2644 16.0764 14.7198 15.774L0.0238 7.6101ZM0.4455 3.7216C0.5983 3.7583 0.7468 3.817 0.891 3.8976L16.5 12.5693L32.109 3.8976C32.2544 3.8182 32.4029 3.7595 32.5545 3.7216C32.3162 2.8526 31.9495 2.1725 31.3885 1.6115C29.7788 0 27.1847 0 22 0H11C5.8153 0 3.2212 0 1.6115 1.6115C1.0487 2.1725 0.6838 2.8526 0.4455 3.7198"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          <ul className={styles.infoList}>
            {form.info.map((item) => (
              <li key={item.label} className={styles.infoItem}>
                <p className={styles.infoLabel}>{item.label}</p>
                <p className={styles.infoValue}>{item.value}</p>
              </li>
            ))}
          </ul>
        </aside>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.fieldGrid}>
            {form.fields.map((field, i) => (
              <Fragment key={field.name}>
                <div className={styles.fieldCell}>
                  <label htmlFor={field.name} className={styles.label}>
                    {field.label}
                    {field.required && (
                      <span className={styles.required}>*</span>
                    )}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type ?? "text"}
                    placeholder={field.placeholder}
                    className={styles.input}
                    required={field.required}
                  />
                </div>
                {i === 0 && (
                  <div className={styles.fieldCellEmpty} aria-hidden="true" />
                )}
              </Fragment>
            ))}
          </div>

          {form.checkboxGroups.map((group) => {
            const legendId = `${group.name}-legend`;
            return (
            <div
              key={group.name}
              className={styles.group}
              role="group"
              aria-labelledby={legendId}
            >
              <p id={legendId} className={styles.label}>
                {group.label}
                {group.required && <span className={styles.required}>*</span>}
              </p>
              <div className={styles.checkboxColumns}>
                {group.columns.map((column, ci) => (
                  <div key={ci} className={styles.checkboxColumn}>
                    {column.map((opt) => {
                      const id = `${group.name}-${opt}`;
                      return (
                        <label
                          key={opt}
                          htmlFor={id}
                          className={styles.checkRow}
                        >
                          <input
                            id={id}
                            type="checkbox"
                            name={group.name}
                            value={opt}
                            className={styles.checkbox}
                          />
                          <span className={styles.checkBox} aria-hidden="true">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              className={styles.checkIcon}
                            >
                              <path
                                d="m2.5 6.2 2.4 2.4L9.7 3.6"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className={styles.checkLabel}>{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            );
          })}

          <div className={styles.fieldCell}>
            <label htmlFor={form.textarea.name} className={styles.label}>
              {form.textarea.label}
              {form.textarea.required && (
                <span className={styles.required}>*</span>
              )}
            </label>
            <textarea
              ref={textareaRef}
              id={form.textarea.name}
              name={form.textarea.name}
              placeholder={form.textarea.placeholder}
              className={styles.textarea}
              required={form.textarea.required}
              onInput={handleTextareaInput}
            />
          </div>

          <div className={styles.consentRow}>
            <label htmlFor="consent" className={styles.checkRow}>
              <input
                id="consent"
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className={styles.checkbox}
              />
              <span className={styles.checkBox} aria-hidden="true">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={styles.checkIcon}
                >
                  <path
                    d="m2.5 6.2 2.4 2.4L9.7 3.6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className={styles.consentText}>
                {form.consent.text}
                <strong className={styles.consentBadge}>
                  {form.consent.badge}
                </strong>
              </span>
            </label>
          </div>

          <button type="submit" className={styles.submit}>
            {form.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
