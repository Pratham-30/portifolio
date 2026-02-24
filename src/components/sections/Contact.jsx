import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";
import { personalInfo } from "../../data/portfolio";
import { FiMail, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionHeader title="Contact" subtitle="Send a transmission" />

        <ScrollReveal>
          <div className="glass rounded-sm p-8 md:p-10 border border-val-border">
            <p className="text-text-secondary text-center mb-10 leading-relaxed text-sm">
              Have a project in mind, want to collaborate, or just want to say hi? Reach out through any of the channels below.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 px-6 py-3 rounded-sm border border-val-border text-text-secondary hover:border-accent-red/40 hover:text-accent-red transition-colors text-xs uppercase tracking-[0.15em]"
              >
                <FiMail className="w-5 h-5" /> {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-sm border border-val-border text-text-secondary hover:border-accent-red/40 hover:text-accent-red transition-colors text-xs uppercase tracking-[0.15em]"
              >
                <FiLinkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
