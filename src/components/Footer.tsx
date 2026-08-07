"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer id="contact" className="bg-forest py-16 text-cream md:py-20" data-mood="forest">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E8C97A]">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl text-cream md:text-4xl">
              Let&apos;s work together<span className="text-[#E8C97A]">.</span>
            </h2>
            <p className="mt-3 max-w-md text-[16px] leading-relaxed text-cream/85">
              Have a role, freelance project, or collaboration in mind? Send a message —
              it goes straight to my inbox.
            </p>

            <div className="mt-8 space-y-3 text-[15px]">
              <a
                href={`mailto:${profile.email}`}
                className="icon-thin flex items-center gap-3 hover:text-[#E8C97A]"
              >
                <Mail size={16} className="text-[#E8C97A]" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                className="icon-thin flex items-center gap-3 hover:text-[#E8C97A]"
              >
                <Phone size={16} className="text-[#E8C97A]" />
                {profile.phone}
              </a>
              <p className="icon-thin flex items-center gap-3 text-cream/85">
                <MapPin size={16} className="text-[#E8C97A]" />
                {profile.location}
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8C97A]">
                Social
              </p>
              <SocialLinks className="text-cream" />
            </div>
          </div>

          <div className="border border-cream/15 bg-[#1A2E24]/60 p-5 md:p-7">
            <p className="mb-5 font-display text-2xl text-cream">Send a message</p>
            <ContactForm />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-cream/20 pt-6">
          <p className="text-sm text-cream/75">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-display text-2xl tracking-[0.25em] text-[#E8C97A]">{profile.monogram}</p>
        </div>
      </div>
    </footer>
  );
}
