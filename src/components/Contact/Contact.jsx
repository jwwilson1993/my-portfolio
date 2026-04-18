import Section from "../ui/Section/Section";
import Button from "../ui/Button/Button";
import {
  GitHubIcon,
  LinkedInIcon,
  socialButtonIconClass,
} from "../ui/SocialBrandIcons";

export default function Contact({ isDark, data }) {
  const { contact } = data;

  return (
    <Section id="contact" className="py-20">
      <div
        className={
          isDark
            ? "rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-8 md:p-10"
            : "rounded-3xl border border-slate-300 bg-gradient-to-br from-cyan-100 to-indigo-100 p-8 md:p-10"
        }
      >
        <p
          className={
            isDark
              ? "text-sm uppercase tracking-[0.2em] text-cyan-300"
              : "text-sm uppercase tracking-[0.2em] text-cyan-700"
          }
        >
          {contact.eyebrow}
        </p>

        <h2 className="mt-2 text-3xl font-bold">{contact.heading}</h2>

        <p
          className={
            isDark ? "mt-4 max-w-2xl text-slate-300" : "mt-4 max-w-2xl text-slate-700"
          }
        >
          {contact.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span
            className={
              isDark
                ? "text-base font-medium text-cyan-200"
                : "text-base font-medium text-cyan-950"
            }
          >
            {contact.email}
          </span>

          <Button href={contact.githubUrl} isDark={isDark} variant="secondary">
            <span className="inline-flex items-center gap-2">
              <GitHubIcon className={socialButtonIconClass} />
              {contact.githubLabel}
            </span>
          </Button>

          <Button href={contact.linkedInUrl} isDark={isDark} variant="secondary">
            <span className="inline-flex items-center gap-2">
              <LinkedInIcon className={socialButtonIconClass} />
              {contact.linkedInLabel}
            </span>
          </Button>
        </div>
      </div>
    </Section>
  );
}