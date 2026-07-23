"use client";

import Reveal from "@/components/Reveal";
import Flourish from "@/components/Flourish";
import Calendar from "@/components/ui/Calendar";
import { useT } from "@/lib/i18n";

/** Section 2 — Invitation intro */
export default function Invitation() {
  const t = useT();
  return (
    <section id="invitation" className="bg-sand/40 pb-16 sm:pb-24 md:pt-16">
      <div className="section-container text-center">
        <Reveal>
          <h2 className="eyebrow text-xl">{t.invitation.eyebrow}</h2>
          <Flourish className="mx-auto mt-6 h-6 w-32" />
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-2xl font-serif text-2xl font-light leading-relaxed text-espresso md:text-3xl">
            {t.invitation.paragraph}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
