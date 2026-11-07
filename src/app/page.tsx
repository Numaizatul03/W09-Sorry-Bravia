"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  FileText,
  Smartphone,
  Tv,
  Laptop,
  Home,
  CheckCircle2,
  Printer,
  Copy,
  Check,
  ChevronRight,
  ExternalLink,
  AlertCircle,
  HelpCircle,
  Menu,
  X,
  FileCheck,
  Camera,
  Mail,
  Scale,
  RefreshCw,
} from "lucide-react";

interface ChecklistItem {
  id: number;
  stage: string;
  number: number;
  title: string;
  description: string;
}

const CHECKLIST_DATA: {
  before: ChecklistItem[];
  fault: ChecklistItem[];
  technician: ChecklistItem[];
  refused: ChecklistItem[];
} = {
  before: [
    {
      id: 1,
      stage: "BEFORE ANYTHING GOES WRONG",
      number: 1,
      title: "Keep the invoice.",
      description: "Save the original receipt and a digital copy.",
    },
    {
      id: 2,
      stage: "BEFORE ANYTHING GOES WRONG",
      number: 2,
      title: "Register the product.",
      description: "Keep your warranty registration confirmation.",
    },
    {
      id: 3,
      stage: "BEFORE ANYTHING GOES WRONG",
      number: 3,
      title: "Read the warranty terms.",
      description: "Understand the coverage, duration and exclusions.",
    },
    {
      id: 4,
      stage: "BEFORE ANYTHING GOES WRONG",
      number: 4,
      title: "Record the condition.",
      description: "Take dated photos of your product after purchasing it.",
    },
  ],
  fault: [
    {
      id: 5,
      stage: "WHEN THE FAULT APPEARS",
      number: 5,
      title: "Record the fault.",
      description: "Take clear photos or videos showing the problem.",
    },
    {
      id: 6,
      stage: "WHEN THE FAULT APPEARS",
      number: 6,
      title: "Report the problem in writing.",
      description: "Contact the company through email or its official website.",
    },
    {
      id: 7,
      stage: "WHEN THE FAULT APPEARS",
      number: 7,
      title: "Keep every reference number.",
      description: "Record complaint numbers, dates and contact details.",
    },
  ],
  technician: [
    {
      id: 8,
      stage: "WHEN A TECHNICIAN VISITS",
      number: 8,
      title: "Ask for a job sheet.",
      description: "Request a copy of the technician's service report.",
    },
    {
      id: 9,
      stage: "WHEN A TECHNICIAN VISITS",
      number: 9,
      title: "Ask what was tested.",
      description: "Understand the diagnosis and inspection process.",
    },
    {
      id: 10,
      stage: "WHEN A TECHNICIAN VISITS",
      number: 10,
      title: "Take your own photos.",
      description: "Document the product and inspection process.",
    },
  ],
  refused: [
    {
      id: 11,
      stage: "IF THE CLAIM IS REFUSED",
      number: 11,
      title: "Ask for the reason in writing.",
      description: "Request an explanation for the rejection.",
    },
    {
      id: 12,
      stage: "IF THE CLAIM IS REFUSED",
      number: 12,
      title: "Request the technical report.",
      description: "Ask for evidence supporting the decision.",
    },
    {
      id: 13,
      stage: "IF THE CLAIM IS REFUSED",
      number: 13,
      title: "Review the warranty terms.",
      description: "Check whether the reason matches the stated exclusions.",
    },
    {
      id: 14,
      stage: "IF THE CLAIM IS REFUSED",
      number: 14,
      title: "Escalate the complaint.",
      description: "Contact the appropriate consumer protection authority if necessary.",
    },
    {
      id: 15,
      stage: "IF THE CLAIM IS REFUSED",
      number: 15,
      title: "Keep all records.",
      description: "Maintain copies of emails, receipts, reports and responses.",
    },
  ],
};

const ALL_ITEMS: ChecklistItem[] = [
  ...CHECKLIST_DATA.before,
  ...CHECKLIST_DATA.fault,
  ...CHECKLIST_DATA.technician,
  ...CHECKLIST_DATA.refused,
];

export default function LandingPage() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleItem = (id: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = ALL_ITEMS.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleCopy = () => {
    const textToCopy = `CLAIM READY
A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM.

WHO THIS IS FOR
Anyone whose phone, TV, laptop or household appliance has stopped working while it is still under warranty, and who wants their claim to be decided based on facts and written evidence.

THE IDEA IN ONE LINE
A warranty claim is decided on records. Keep your documents, collect evidence, and ask for everything in writing.

BEFORE ANYTHING GOES WRONG
1. Keep the invoice. Save the original receipt and a digital copy.
2. Register the product. Keep your warranty registration confirmation.
3. Read the warranty terms. Understand the coverage, duration and exclusions.
4. Record the condition. Take dated photos of your product after purchasing it.

WHEN THE FAULT APPEARS
5. Record the fault. Take clear photos or videos showing the problem.
6. Report the problem in writing. Contact the company through email or its official website.
7. Keep every reference number. Record complaint numbers, dates and contact details.

WHEN A TECHNICIAN VISITS
8. Ask for a job sheet. Request a copy of the technician's service report.
9. Ask what was tested. Understand the diagnosis and inspection process.
10. Take your own photos. Document the product and inspection process.

IF THE CLAIM IS REFUSED
11. Ask for the reason in writing. Request an explanation for the rejection.
12. Request the technical report. Ask for evidence supporting the decision.
13. Review the warranty terms. Check whether the reason matches the stated exclusions.
14. Escalate the complaint. Contact the appropriate consumer protection authority if necessary.
15. Keep all records. Maintain copies of emails, receipts, reports and responses.

KEY MESSAGE
Always keep evidence. Communicate in writing. Understand your warranty rights.

CALL TO ACTION
Be prepared before making a warranty claim. Download this checklist and keep it for future reference.

CLAIM READY | CONSUMER WARRANTY GUIDE`;

    if (navigator?.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const resetChecklist = () => {
    setCheckedItems({});
  };

  return (
    <div className="min-h-screen bg-white text-on-surface flex flex-col font-sans">
      {/* 1. TICKER STRIP */}
      <div className="bg-primary-soft border-b border-primary-border py-3 overflow-hidden select-none no-print">
        <div className="flex whitespace-nowrap animate-ticker">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex items-center space-x-10 text-primary-ink text-[10px] font-mono font-medium tracking-[0.16em] uppercase px-5"
            >
              <span>CLAIM READY</span>
              <span>•</span>
              <span>CONSUMER WARRANTY GUIDE</span>
              <span>•</span>
              <span>A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM</span>
              <span>•</span>
              <span>DECIDED ON RECORDS</span>
              <span>•</span>
              <span>KEEP DOCUMENTS</span>
              <span>•</span>
              <span>COLLECT EVIDENCE</span>
              <span>•</span>
              <span>ASK FOR EVERYTHING IN WRITING</span>
              <span>•</span>
              <span>15 ACTIONABLE STEPS</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-white/92 backdrop-blur-md border-b border-outline h-[72px] flex items-center transition-all no-print">
        <div className="max-w-shell w-full mx-auto px-5 sm:px-8 md:px-10 flex items-center justify-between">
          {/* Logo Mark + Ink Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-1"
          >
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-mono text-xs font-bold transition-transform group-hover:scale-105">
              CR
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[18px] tracking-[-0.035em] text-secondary leading-tight">
                CLAIM READY
              </span>
              <span className="text-[10px] font-mono text-on-surface-muted tracking-[0.16em] uppercase">
                Warranty Guide
              </span>
            </div>
          </a>

          {/* Desktop Nav Links in body grey */}
          <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-semibold text-on-surface-variant">
            <a
              href="#who-this-is-for"
              className="hover:text-secondary transition-colors"
            >
              Who This Is For
            </a>
            <a
              href="#the-idea"
              className="hover:text-secondary transition-colors"
            >
              The Core Idea
            </a>
            <a
              href="#before-trouble"
              className="hover:text-secondary transition-colors"
            >
              Before Trouble
            </a>
            <a
              href="#when-fault-appears"
              className="hover:text-secondary transition-colors"
            >
              Fault & Inspection
            </a>
            <a
              href="#if-refused"
              className="hover:text-secondary transition-colors"
            >
              If Refused
            </a>
            <a
              href="#key-message"
              className="hover:text-secondary transition-colors"
            >
              Key Message
            </a>
          </nav>

          {/* Right Header Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={handlePrint}
              className="bg-secondary text-on-secondary hover:bg-primary font-sans text-[13.5px] font-medium py-[10px] px-[20px] rounded-full transition-all duration-200 shadow-sm flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>Download / Print</span>
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-secondary hover:bg-surface-sunken rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile dropdown navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-[72px] left-0 w-full bg-white border-b border-outline px-6 py-6 shadow-float flex flex-col space-y-4">
            <a
              href="#who-this-is-for"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-on-surface hover:text-primary py-2 border-b border-outline"
            >
              Who This Is For
            </a>
            <a
              href="#the-idea"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-on-surface hover:text-primary py-2 border-b border-outline"
            >
              The Core Idea
            </a>
            <a
              href="#before-trouble"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-on-surface hover:text-primary py-2 border-b border-outline"
            >
              Before Anything Goes Wrong
            </a>
            <a
              href="#when-fault-appears"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-on-surface hover:text-primary py-2 border-b border-outline"
            >
              When The Fault Appears
            </a>
            <a
              href="#technician-visits"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-on-surface hover:text-primary py-2 border-b border-outline"
            >
              When A Technician Visits
            </a>
            <a
              href="#if-refused"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-on-surface hover:text-primary py-2 border-b border-outline"
            >
              If The Claim Is Refused
            </a>
            <a
              href="#key-message"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-on-surface hover:text-primary py-2 border-b border-outline"
            >
              Key Message
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handlePrint();
                }}
                className="w-full bg-secondary text-white py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                Download / Print Checklist
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative py-20 md:py-28 bg-white border-b border-outline">
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: 55% (~7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Mono Eyebrow Pill Label */}
              <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink px-3.5 py-1.5 rounded-full text-[10px] font-mono font-medium tracking-[0.16em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>CONSUMER WARRANTY GUIDE</span>
              </div>

              {/* Title from content.txt: CLAIM READY */}
              <h1 className="headline-display text-secondary mb-5">
                CLAIM READY
              </h1>

              {/* Subtitle from content.txt */}
              <p className="lead-paragraph mb-8 text-[18px] md:text-[20px] font-normal text-on-surface-variant">
                A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM.
              </p>

              {/* Call to action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href="#before-trouble"
                  className="w-full sm:w-auto bg-primary text-on-primary hover:bg-primary-strong text-[15px] font-semibold py-3.5 px-7 rounded-full shadow-raised transition-all duration-200 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
                >
                  <span>Start 15-Point Checklist</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handlePrint}
                  className="w-full sm:w-auto bg-white text-secondary hover:bg-surface-muted border border-outline text-[15px] font-semibold py-3.5 px-7 rounded-full transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4 text-on-surface-variant" />
                  <span>Download Checklist</span>
                </button>
              </div>

              {/* Live readiness stats ribbon */}
              <div className="mt-10 pt-6 border-t border-outline w-full flex flex-wrap items-center gap-6 text-[13.5px] font-medium text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>100% Free Public Guide</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Decided on Evidence</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <span>15 Actionable Steps</span>
                </div>
              </div>
            </div>

            {/* Right Column: 45% (~5 cols) - Visual Document / Claim Readiness Card */}
            <div className="lg:col-span-5">
              <div className="bg-surface rounded-lg border border-outline p-6 sm:p-8 shadow-card relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-outline mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    <span className="label-mono-sm text-primary-ink font-semibold">
                      INTERACTIVE CHECKLIST
                    </span>
                  </div>
                  <span className="label-mono-sm text-on-surface-muted">
                    {completedCount} / {totalCount} DONE
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs font-semibold text-secondary mb-2">
                    <span>Preparation Readiness</span>
                    <span className="font-mono text-primary font-bold">
                      {progressPercentage}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-surface-sunken rounded-full overflow-hidden border border-outline">
                    <div
                      className="h-full bg-primary transition-all duration-300 rounded-full"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Micro preview checklist box */}
                <div className="space-y-2.5 bg-surface-2 p-4 rounded-sm border border-outline mb-6">
                  <div className="text-[12px] font-mono uppercase tracking-[0.12em] text-on-surface-muted mb-1">
                    Quick Stage Navigation
                  </div>
                  <a
                    href="#before-trouble"
                    className="flex items-center justify-between text-sm py-1.5 px-2 rounded hover:bg-white transition-colors text-on-surface"
                  >
                    <span>1. Before Anything Goes Wrong</span>
                    <span className="label-mono-sm text-primary">4 Steps</span>
                  </a>
                  <a
                    href="#when-fault-appears"
                    className="flex items-center justify-between text-sm py-1.5 px-2 rounded hover:bg-white transition-colors text-on-surface"
                  >
                    <span>2. When The Fault Appears</span>
                    <span className="label-mono-sm text-primary">3 Steps</span>
                  </a>
                  <a
                    href="#technician-visits"
                    className="flex items-center justify-between text-sm py-1.5 px-2 rounded hover:bg-white transition-colors text-on-surface"
                  >
                    <span>3. When A Technician Visits</span>
                    <span className="label-mono-sm text-primary">3 Steps</span>
                  </a>
                  <a
                    href="#if-refused"
                    className="flex items-center justify-between text-sm py-1.5 px-2 rounded hover:bg-white transition-colors text-on-surface"
                  >
                    <span>4. If The Claim Is Refused</span>
                    <span className="label-mono-sm text-primary">5 Steps</span>
                  </a>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={handleCopy}
                    className="flex-1 bg-surface-sunken hover:bg-outline text-secondary text-xs font-semibold py-2.5 px-3 rounded-full transition-colors flex items-center justify-center gap-1.5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-primary" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Checklist</span>
                      </>
                    )}
                  </button>
                  {completedCount > 0 && (
                    <button
                      onClick={resetChecklist}
                      className="text-xs text-on-surface-variant hover:text-error py-2 px-3 rounded-full transition-colors flex items-center gap-1"
                      title="Reset checked items"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE IDEA IN ONE LINE — HEADLINE CARD (Exact DESIGN.md spec: Used once at top of page) */}
      <section id="the-idea" className="py-20 md:py-28 bg-white">
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          <div className="bg-secondary text-primary-bright rounded-lg p-8 sm:p-12 md:p-14 scanline-pattern shadow-raised relative overflow-hidden">
            {/* Pill label */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-primary-bright px-3.5 py-1.5 rounded-full text-[10px] font-mono font-medium tracking-[0.16em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-bright" />
              <span>THE IDEA IN ONE LINE</span>
            </div>

            {/* Wording from content.txt */}
            <blockquote className="font-mono text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-normal leading-[1.35] tracking-tight max-w-4xl text-white">
              “A warranty claim is decided on records. Keep your documents,
              collect evidence, and ask for everything in writing.”
            </blockquote>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/70">
              <span className="uppercase tracking-[0.14em]">
                RULE #1 OF WARRANTY DEFENCE
              </span>
              <span className="text-primary-bright">
                WRITTEN EVIDENCE OVER VERBAL PROMISES
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHO THIS IS FOR */}
      <section
        id="who-this-is-for"
        className="py-20 md:py-28 bg-surface-muted border-y border-outline"
      >
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          {/* Section Header Stack */}
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink px-3.5 py-1.5 rounded-full label-mono-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>ELIGIBILITY & COVERAGE</span>
            </div>
            <h2 className="headline-lg text-secondary mb-5">
              WHO THIS IS FOR
            </h2>
            <p className="lead-paragraph text-on-surface-variant">
              Anyone whose phone, TV, laptop or household appliance has stopped
              working while it is still under warranty, and who wants their claim
              to be decided based on facts and written evidence.
            </p>
          </div>

          {/* Device Category Grid (Phone, TV, Laptop, Household Appliance) on hairline divider grid */}
          <div className="bg-outline rounded-md p-[1px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] overflow-hidden mb-12 shadow-card">
            {/* Phone Card */}
            <div className="bg-surface p-7 sm:p-8 flex flex-col justify-between hover:bg-surface-2 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary-soft border border-primary-border flex items-center justify-center text-primary-ink mb-5">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="headline-md text-[20px] text-secondary mb-2">
                  Smartphone
                </h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Screen failure, green line issues, battery swelling, charging
                  port defects, or sudden motherboard shutdowns under warranty.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline text-[11px] font-mono text-primary font-medium uppercase tracking-[0.1em]">
                Hardware Defect
              </div>
            </div>

            {/* TV Card */}
            <div className="bg-surface p-7 sm:p-8 flex flex-col justify-between hover:bg-surface-2 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary-soft border border-primary-border flex items-center justify-center text-primary-ink mb-5">
                  <Tv className="w-6 h-6" />
                </div>
                <h3 className="headline-md text-[20px] text-secondary mb-2">
                  Television
                </h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Panel horizontal/vertical lines, backlight degradation,
                  motherboard boot loops, or audio output failures.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline text-[11px] font-mono text-primary font-medium uppercase tracking-[0.1em]">
                Panel & Audio
              </div>
            </div>

            {/* Laptop Card */}
            <div className="bg-surface p-7 sm:p-8 flex flex-col justify-between hover:bg-surface-2 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary-soft border border-primary-border flex items-center justify-center text-primary-ink mb-5">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="headline-md text-[20px] text-secondary mb-2">
                  Laptop
                </h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Hinge fractures, thermal throttling, keyboard malfunction,
                  battery health collapse, or logic board failures.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline text-[11px] font-mono text-primary font-medium uppercase tracking-[0.1em]">
                Compute & Display
              </div>
            </div>

            {/* Household Appliance Card */}
            <div className="bg-surface p-7 sm:p-8 flex flex-col justify-between hover:bg-surface-2 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary-soft border border-primary-border flex items-center justify-center text-primary-ink mb-5">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="headline-md text-[20px] text-secondary mb-2">
                  Appliance
                </h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Washing machine motor errors, refrigerator compressor stops,
                  air conditioner cooling failure, or microwave inverter breaks.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline text-[11px] font-mono text-primary font-medium uppercase tracking-[0.1em]">
                Major Appliances
              </div>
            </div>
          </div>

          {/* STAT GRID (Exact DESIGN.md spec: 2 or 4 cells joined by 1px hairline gaps inside one rounded card, one hot cell in emerald) */}
          <div className="bg-outline rounded-md p-[1px] grid grid-cols-2 lg:grid-cols-4 gap-[1px] overflow-hidden shadow-card">
            <div className="bg-surface p-7 sm:p-8 flex flex-col">
              <span className="stat-number text-secondary mb-2">15</span>
              <span className="text-[13.5px] font-medium text-on-surface-variant">
                Actionable Checklist Steps
              </span>
            </div>

            <div className="bg-surface p-7 sm:p-8 flex flex-col">
              {/* Hot cell in emerald #087A58 */}
              <span className="stat-number text-primary mb-2">100%</span>
              <span className="text-[13.5px] font-medium text-on-surface-variant">
                Free Consumer Checklist
              </span>
            </div>

            <div className="bg-surface p-7 sm:p-8 flex flex-col">
              <span className="stat-number text-secondary mb-2">4</span>
              <span className="text-[13.5px] font-medium text-on-surface-variant">
                Critical Claim Stages
              </span>
            </div>

            <div className="bg-surface p-7 sm:p-8 flex flex-col">
              <span className="stat-number text-secondary mb-2">0</span>
              <span className="text-[13.5px] font-medium text-on-surface-variant">
                Sign-up or Data Stored
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CHECKLIST SECTION 1: BEFORE ANYTHING GOES WRONG */}
      <section id="before-trouble" className="py-20 md:py-28 bg-white">
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          {/* Section Header Stack */}
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink px-3.5 py-1.5 rounded-full label-mono-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>STAGE 01 — PREVENTATIVE DOCUMENTATION</span>
            </div>
            <h2 className="headline-lg text-secondary mb-5">
              BEFORE ANYTHING GOES WRONG
            </h2>
            <p className="lead-paragraph text-on-surface-variant">
              The foundation of every approved claim starts long before any
              malfunction occurs. Prepare these 4 records from day one.
            </p>
          </div>

          {/* Cards for items 1-4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CHECKLIST_DATA.before.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`cursor-pointer rounded-md border p-7 sm:p-8 transition-all duration-200 relative select-none ${
                    isChecked
                      ? "bg-primary-soft/50 border-primary-border shadow-raised"
                      : "bg-surface border-outline hover:border-outline-strong shadow-card hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      type="button"
                      aria-label={`Toggle item ${item.number}`}
                      className={`w-7 h-7 rounded-full flex items-center justify-center mt-1 flex-shrink-0 transition-colors ${
                        isChecked
                          ? "bg-primary text-white"
                          : "border-2 border-outline-strong bg-white hover:border-primary text-transparent"
                      }`}
                    >
                      <Check className="w-4 h-4" />
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="label-mono-sm text-primary-ink font-semibold">
                          STEP 0{item.number}
                        </span>
                        {isChecked && (
                          <span className="label-mono-sm text-primary font-bold">
                            RECORDED
                          </span>
                        )}
                      </div>
                      <h3
                        className={`text-[19px] font-bold tracking-tight mb-2 ${
                          isChecked ? "text-primary-ink" : "text-secondary"
                        }`}
                      >
                        {item.number}. {item.title}
                      </h3>
                      <p className="body-paragraph text-[15px] sm:text-[16px] text-on-surface-variant">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CHECKLIST SECTION 2: WHEN THE FAULT APPEARS */}
      <section
        id="when-fault-appears"
        className="py-20 md:py-28 bg-surface-muted border-t border-outline"
      >
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          {/* Section Header Stack */}
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink px-3.5 py-1.5 rounded-full label-mono-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>STAGE 02 — INCIDENT ONSET</span>
            </div>
            <h2 className="headline-lg text-secondary mb-5">
              WHEN THE FAULT APPEARS
            </h2>
            <p className="lead-paragraph text-on-surface-variant">
              Immediate written logs and visual evidence establish when the issue
              began and eliminate claims of customer mishandling.
            </p>
          </div>

          {/* Cards for items 5-7 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHECKLIST_DATA.fault.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`cursor-pointer rounded-md border p-7 sm:p-8 transition-all duration-200 relative select-none flex flex-col justify-between ${
                    isChecked
                      ? "bg-primary-soft/50 border-primary-border shadow-raised"
                      : "bg-surface border-outline hover:border-outline-strong shadow-card hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <button
                      type="button"
                      aria-label={`Toggle item ${item.number}`}
                      className={`w-7 h-7 rounded-full flex items-center justify-center mt-1 flex-shrink-0 transition-colors ${
                        isChecked
                          ? "bg-primary text-white"
                          : "border-2 border-outline-strong bg-white hover:border-primary text-transparent"
                      }`}
                    >
                      <Check className="w-4 h-4" />
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="label-mono-sm text-primary-ink font-semibold">
                          STEP 0{item.number}
                        </span>
                        {isChecked && (
                          <span className="label-mono-sm text-primary font-bold">
                            LOGGED
                          </span>
                        )}
                      </div>
                      <h3
                        className={`text-[19px] font-bold tracking-tight mb-2 ${
                          isChecked ? "text-primary-ink" : "text-secondary"
                        }`}
                      >
                        {item.number}. {item.title}
                      </h3>
                      <p className="body-paragraph text-[15px] sm:text-[16px] text-on-surface-variant">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CHECKLIST SECTION 3: WHEN A TECHNICIAN VISITS */}
      <section
        id="technician-visits"
        className="py-20 md:py-28 bg-white border-t border-outline"
      >
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          {/* Section Header Stack */}
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink px-3.5 py-1.5 rounded-full label-mono-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>STAGE 03 — SERVICE VISIT</span>
            </div>
            <h2 className="headline-lg text-secondary mb-5">
              WHEN A TECHNICIAN VISITS
            </h2>
            <p className="lead-paragraph text-on-surface-variant">
              The on-site inspection often determines whether the repair is free
              or billed to you. Never leave the outcome to verbal explanations.
            </p>
          </div>

          {/* Cards for items 8-10 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHECKLIST_DATA.technician.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`cursor-pointer rounded-md border p-7 sm:p-8 transition-all duration-200 relative select-none flex flex-col justify-between ${
                    isChecked
                      ? "bg-primary-soft/50 border-primary-border shadow-raised"
                      : "bg-surface border-outline hover:border-outline-strong shadow-card hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <button
                      type="button"
                      aria-label={`Toggle item ${item.number}`}
                      className={`w-7 h-7 rounded-full flex items-center justify-center mt-1 flex-shrink-0 transition-colors ${
                        isChecked
                          ? "bg-primary text-white"
                          : "border-2 border-outline-strong bg-white hover:border-primary text-transparent"
                      }`}
                    >
                      <Check className="w-4 h-4" />
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="label-mono-sm text-primary-ink font-semibold">
                          STEP {item.number < 10 ? `0${item.number}` : item.number}
                        </span>
                        {isChecked && (
                          <span className="label-mono-sm text-primary font-bold">
                            COLLECTED
                          </span>
                        )}
                      </div>
                      <h3
                        className={`text-[19px] font-bold tracking-tight mb-2 ${
                          isChecked ? "text-primary-ink" : "text-secondary"
                        }`}
                      >
                        {item.number}. {item.title}
                      </h3>
                      <p className="body-paragraph text-[15px] sm:text-[16px] text-on-surface-variant">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. CHECKLIST SECTION 4: IF THE CLAIM IS REFUSED (Exact DESIGN.md Dark Section spec!) */}
      <section
        id="if-refused"
        className="py-20 md:py-32 bg-secondary text-white relative overflow-hidden"
      >
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          {/* Section Header Stack in Dark Section */}
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-primary-bright px-3.5 py-1.5 rounded-full label-mono-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-bright" />
              <span>STAGE 04 — DISPUTE & ESCALATION</span>
            </div>
            <h2 className="headline-lg text-white mb-5">
              IF THE CLAIM IS REFUSED
            </h2>
            <p className="lead-paragraph text-white/75">
              An informal refusal is not the final verdict. Companies often rely
              on consumers giving up. Systematic written evidence turns refusals
              into approvals.
            </p>
          </div>

          {/* Cards for items 11-15 inside dark section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHECKLIST_DATA.refused.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`cursor-pointer rounded-md border p-7 sm:p-8 transition-all duration-200 relative select-none flex flex-col justify-between ${
                    isChecked
                      ? "bg-white/[0.18] border-primary-bright text-white shadow-raised"
                      : "bg-white/[0.08] border-white/10 hover:border-white/25 hover:bg-white/[0.12]"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <button
                      type="button"
                      aria-label={`Toggle item ${item.number}`}
                      className={`w-7 h-7 rounded-full flex items-center justify-center mt-1 flex-shrink-0 transition-colors ${
                        isChecked
                          ? "bg-primary-bright text-secondary font-bold"
                          : "border-2 border-white/40 bg-transparent hover:border-primary-bright text-transparent"
                      }`}
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="label-mono-sm text-primary-bright font-semibold">
                          STEP {item.number}
                        </span>
                        {isChecked && (
                          <span className="label-mono-sm text-primary-bright font-bold">
                            ENFORCED
                          </span>
                        )}
                      </div>
                      <h3 className="text-[19px] font-bold tracking-tight mb-2 text-white">
                        {item.number}. {item.title}
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. CALLOUT CARD: KEY MESSAGE (Exact DESIGN.md spec: Mint fill with emerald border) */}
      <section id="key-message" className="py-20 md:py-28 bg-white">
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          <div className="bg-primary-soft border border-primary-border rounded-md p-8 sm:p-12 md:p-14 shadow-card">
            <div className="inline-flex items-center gap-2 bg-white border border-primary-border text-primary-ink px-3.5 py-1.5 rounded-full label-mono-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>THE THREE PILLARS</span>
            </div>

            <h2 className="headline-lg text-primary-ink mb-6">
              KEY MESSAGE
            </h2>

            {/* Wording from content.txt */}
            <p className="text-[22px] sm:text-[26px] md:text-[30px] font-extrabold text-primary-ink tracking-tight leading-snug mb-10">
              Always keep evidence. Communicate in writing. Understand your
              warranty rights.
            </p>

            {/* 3 Callout Pillars Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-primary-border/60">
              <div className="bg-white/80 rounded-sm p-6 border border-primary-border">
                <div className="text-[11px] font-mono font-bold text-primary mb-2 uppercase tracking-[0.14em]">
                  Pillar 01
                </div>
                <h3 className="text-[18px] font-bold text-secondary mb-2">
                  Always keep evidence.
                </h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Receipts, date-stamped photos, serial numbers, and fault
                  videos prove what occurred without relying on recall.
                </p>
              </div>

              <div className="bg-white/80 rounded-sm p-6 border border-primary-border">
                <div className="text-[11px] font-mono font-bold text-primary mb-2 uppercase tracking-[0.14em]">
                  Pillar 02
                </div>
                <h3 className="text-[18px] font-bold text-secondary mb-2">
                  Communicate in writing.
                </h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Support phone calls leave no record. Send emails or support
                  tickets, and request formal written explanations.
                </p>
              </div>

              <div className="bg-white/80 rounded-sm p-6 border border-primary-border">
                <div className="text-[11px] font-mono font-bold text-primary mb-2 uppercase tracking-[0.14em]">
                  Pillar 03
                </div>
                <h3 className="text-[18px] font-bold text-secondary mb-2">
                  Understand your warranty rights.
                </h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">
                  Do not accept informal rejections. Compare the technician's
                  reason with the written policy and statutory protections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CALL TO ACTION SECTION */}
      <section
        id="call-to-action"
        className="py-20 md:py-28 bg-surface-muted border-t border-outline"
      >
        <div className="max-w-shell-narrow mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink px-3.5 py-1.5 rounded-full label-mono-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>CLAIM READINESS</span>
          </div>

          <h2 className="headline-lg text-secondary mb-5">
            CALL TO ACTION
          </h2>

          {/* Wording from content.txt */}
          <p className="lead-paragraph text-center text-on-surface-variant mb-10 max-w-xl mx-auto">
            Be prepared before making a warranty claim. Download this checklist
            and keep it for future reference.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="w-full sm:w-auto bg-primary text-white hover:bg-primary-strong text-[15px] font-semibold py-4 px-8 rounded-full shadow-raised transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
            >
              <Printer className="w-5 h-5" />
              <span>Download Printable Checklist</span>
            </button>

            <button
              onClick={handleCopy}
              className="w-full sm:w-auto bg-white text-secondary hover:bg-surface-sunken border border-outline text-[15px] font-semibold py-4 px-8 rounded-full transition-all duration-200 flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-primary" />
                  <span>Checklist Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 text-on-surface-variant" />
                  <span>Copy Plain Text</span>
                </>
              )}
            </button>
          </div>

          <p className="mt-6 text-xs text-on-surface-muted font-mono uppercase tracking-[0.12em]">
            Zero trackers • Works offline • No email required
          </p>
        </div>
      </section>

      {/* 12. FOOTER (Exact DESIGN.md spec: surface-muted background, 1px top hairline, 3 columns, 13px legal line) */}
      <footer className="bg-surface-muted border-t border-outline py-16 text-on-surface-variant text-[13.5px] no-print">
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Column 1: About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-mono text-[11px] font-bold">
                  CR
                </div>
                <span className="font-extrabold text-[16px] text-secondary tracking-tight">
                  CLAIM READY
                </span>
              </div>
              <p className="text-[13.5px] leading-relaxed text-on-surface-variant mb-4">
                A public consumer advocacy checklist helping individuals secure
                fair warranty outcomes through documented evidence and written
                records.
              </p>
              <div className="text-[11px] font-mono text-primary font-medium uppercase tracking-[0.1em]">
                Evidence-First Consumer Protocol
              </div>
            </div>

            {/* Column 2: The Checklist Stages */}
            <div>
              <h4 className="font-mono text-[11px] font-semibold text-secondary uppercase tracking-[0.16em] mb-4">
                Checklist Stages
              </h4>
              <ul className="space-y-2.5 text-[13.5px]">
                <li>
                  <a
                    href="#before-trouble"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-strong" />
                    <span>Stage 1: Before Anything Goes Wrong (1-4)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#when-fault-appears"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-strong" />
                    <span>Stage 2: When The Fault Appears (5-7)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#technician-visits"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-strong" />
                    <span>Stage 3: When A Technician Visits (8-10)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#if-refused"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-strong" />
                    <span>Stage 4: If The Claim Is Refused (11-15)</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Golden Rules */}
            <div>
              <h4 className="font-mono text-[11px] font-semibold text-secondary uppercase tracking-[0.16em] mb-4">
                Standard Protocols
              </h4>
              <ul className="space-y-2.5 text-[13.5px]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Demand service reports in writing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Maintain contemporaneous photo logs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Reference consumer protection statutory rights</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Never rely solely on verbal customer service</span>
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM LEGAL LINE & FOOTER NOTE (From content.txt: FOOTER NOTE: CLAIM READY | CONSUMER WARRANTY GUIDE) */}
          <div className="pt-8 border-t border-outline flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-on-surface-muted">
            <div className="flex items-center gap-3">
              <span className="font-bold text-secondary">FOOTER NOTE:</span>
              <span className="text-primary-ink font-semibold">
                CLAIM READY | CONSUMER WARRANTY GUIDE
              </span>
            </div>
            <div>
              <span>Designed per Emerald Editorial System. Factual & Calm.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
