import type { Metadata } from "next";
import Link from "next/link";
import { CalendarRange, Cpu, HelpCircle, Laptop } from "lucide-react";
import dynamic from "next/dynamic";
const DemoForm = dynamic(() => import("@/components/marketing/demo-form").then((mod) => mod.DemoForm));
const FaqAccordion = dynamic(() => import("@/components/ui/faq-accordion").then((mod) => mod.FaqAccordion));
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { contactFaqs, siteConfig } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Get Free Demo",
  description: "Request a custom interactive demo of our web apps, AI integrations, or workflow automations for your business.",
};

const demoSteps = [
  {
    title: "1. Share Your Needs",
    description: "Submit the demo request form with your business details, target solution, and what you would like to automate or build.",
    icon: Laptop,
  },
  {
    title: "2. Custom Development",
    description: "We review your business and design a customized, interactive mock preview or proof-of-concept tailored to your operational needs.",
    icon: Cpu,
  },
  {
    title: "3. Interactive Walkthrough",
    description: "We host a live call or send you a direct link to explore the prototype yourself, completely free of charge and with no obligations.",
    icon: CalendarRange,
  },
];

const demoFaqs = [
  {
    question: "Is the custom demo really free?",
    answer: "Yes, 100%. We believe in showing real value before any contracts are signed. We build a basic proof-of-concept for qualified businesses at no cost.",
  },
  {
    question: "How long does it take to prepare the demo?",
    answer: "Typically, we will review your request and deliver or schedule a walkthrough of the custom demo within 3 to 5 business days.",
  },
  {
    question: "What if I want a live consultation instead of a mock demo?",
    answer: "You can book a live consultation directly on our calendar. Use the booking link on this page or go to our contact page to connect via WhatsApp or Email.",
  },
];

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Demo"
        title="Experience how our software transforms your business."
        description="We build custom proof-of-concepts and interactive previews so you can test features, explore integrations, and see the exact value before committing."
      />
      <section className="section-space">
        <div className="content-shell grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <DemoForm />
          </Reveal>
          <div className="grid gap-6">
            <Reveal delayMs={80} className="surface-card p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground">How the demo process works</h2>
              <div className="mt-6 grid gap-6">
                {demoSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] border border-amber-400/15 bg-amber-400/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">{step.title}</p>
                        <p className="text-sm leading-relaxed text-foreground-body">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-white/8">
                <p className="text-sm text-foreground-body mb-4">
                  Prefer a direct, live discussion? Schedule a meeting with us instantly on our calendar.
                </p>
                <Link
                  href={siteConfig.calendarHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary inline-flex items-center gap-2 text-sm py-2.5 px-4"
                >
                  <CalendarRange className="h-4 w-4 text-accent" />
                  Book Live Meeting
                </Link>
              </div>
            </Reveal>

            <Reveal delayMs={160}>
              <FaqAccordion items={demoFaqs} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
