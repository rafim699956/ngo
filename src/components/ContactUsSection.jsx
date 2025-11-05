import React from "react";
import SectionLabel from "../utilis/SectionLabel";
import { Link } from "react-router";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactUsSection = () => {
  return (
    <section className="bg-primary-light pt-9 pb-12 lg:pt-19 lg:pb-24">
      <div
        className="container flex flex-col lg:flex-row gap-12
         lg:gap-24"
      >
        <div className="flex flex-col gap-4 lg:gap-8 lg:max-w-xl">
          <SectionLabel label="Contact us" />
          <div className="flex flex-col gap-4 lg:pl-24">
            <h1>We'd love to hear from you</h1>
            <p className="text-secondary/70">
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <div className="space-y-2.5">
            <h3>Let's talk!</h3>
            <div className="flex flex-wrap items-center gap-6 pb-4 border-b border-[#E5E5E5]">
              <a className="text-secondary text-nowrap" href="tel:+234 09012346514">
                +234 09012346514
              </a>
              <a className="text-secondary text-nowrap" href="mailto:hello@largerthani.com">
                hello@largerthani.com
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h3>Headoffice</h3>
            <div>
              <p className="text-secondary">8 Brewery Drive, Lagos,</p>
              <p className="text-secondary">Nigeria</p>
            </div>
          </div>
          <div className="space-y-2">
            <h3>Branch Office</h3>
            <div>
              <p className="text-secondary">
                Opp Opolo round about, Yenagoa, Bayelsa,
              </p>
              <p className="text-secondary">Nigeria</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href="#">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#">
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
