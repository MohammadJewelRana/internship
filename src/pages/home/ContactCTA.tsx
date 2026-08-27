import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaGlobeEurope,
} from "react-icons/fa";

const FACEBOOK_URL =
  "https://www.facebook.com/people/Avelon-Consultancy/61580335493258/";

const contacts = [
  {
    number: "01977005583",
    whatsapp: "8801977005583",
  },
  {
    number: "01977005582",
    whatsapp: "8801977005582",
  },
  {
    number: "01977005581",
    whatsapp: "8801977005581",
  },
];

const BusinessContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-slate-950
        px-5
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-96
          w-96
          rounded-full
          bg-yellow-400/[0.06]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-emerald-400/[0.05]
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* =====================================================
            MAIN MESSAGE
        ====================================================== */}

        <div className="mx-auto max-w-4xl text-center">

          {/* Icon */}

          <div
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-yellow-400/20
              bg-yellow-400/[0.08]
              text-yellow-400
              shadow-lg
              shadow-yellow-400/5
            "
          >
            <FaGlobeEurope size={27} />
          </div>

          {/* Eyebrow */}

          <p
            className="
              mt-6
              text-[10px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-yellow-400
              sm:text-xs
            "
          >
            More Business Visa Destinations
          </p>

          {/* Heading */}

          <h2
            className="
              mt-4
              text-3xl
              font-black
              leading-[1.12]
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            আমরা আরও অনেক
            <span
              className="
                block
                bg-gradient-to-r
                from-yellow-300
                via-yellow-400
                to-amber-500
                bg-clip-text
                text-transparent
              "
            >
              দেশের জন্য কাজ করি
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
              sm:leading-8
            "
          >
            উপরে উল্লেখিত দেশগুলোর পাশাপাশি আমরা আরও বিভিন্ন
            দেশের Business Visa Programme নিয়ে কাজ করি।
            আপনার পছন্দের দেশ সম্পর্কে বিস্তারিত জানতে
            আমাদের সাথে যোগাযোগ করুন।
          </p>

        </div>

        {/* =====================================================
            CONTACT OPTIONS
        ====================================================== */}

        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-5xl
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {/* WhatsApp */}

          <a
            href={`https://wa.me/8801977005583?text=${encodeURIComponent(
              "আসসালামু আলাইকুম, আমি Business Visa Programme সম্পর্কে বিস্তারিত জানতে চাই।"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-emerald-400/30
              hover:bg-emerald-400/[0.06]
            "
          >

            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-emerald-500/10
                text-emerald-400
                transition
                group-hover:bg-emerald-500
                group-hover:text-white
              "
            >
              <FaWhatsapp size={20} />
            </div>

            <div className="min-w-0 text-left">

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-slate-600
                "
              >
                WhatsApp
              </p>

              <p className="mt-1 text-sm font-black text-white">
                01977005583
              </p>

            </div>

            <FaArrowRight
              size={11}
              className="
                ml-auto
                text-slate-600
                transition
                group-hover:translate-x-1
                group-hover:text-emerald-400
              "
            />

          </a>

          {/* Facebook */}

          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-400/30
              hover:bg-blue-400/[0.06]
            "
          >

            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-blue-500/10
                text-blue-400
                transition
                group-hover:bg-blue-500
                group-hover:text-white
              "
            >
              <FaFacebookF size={18} />
            </div>

            <div className="min-w-0 text-left">

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-slate-600
                "
              >
                Follow Us
              </p>

              <p className="mt-1 text-sm font-black text-white">
                Facebook Page
              </p>

            </div>

            <FaArrowRight
              size={11}
              className="
                ml-auto
                text-slate-600
                transition
                group-hover:translate-x-1
                group-hover:text-blue-400
              "
            />

          </a>

          {/* Email */}

          <a
            href="mailto:info@avelonbd.com"
            className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-yellow-400/30
              hover:bg-yellow-400/[0.05]
            "
          >

            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-yellow-400/10
                text-yellow-400
                transition
                group-hover:bg-yellow-400
                group-hover:text-slate-950
              "
            >
              <FaEnvelope size={18} />
            </div>

            <div className="min-w-0 text-left">

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-slate-600
                "
              >
                Email Us
              </p>

              <p
                className="
                  mt-1
                  break-all
                  text-sm
                  font-black
                  text-white
                "
              >
                info@avelonbd.com
              </p>

            </div>

            <FaArrowRight
              size={11}
              className="
                ml-auto
                shrink-0
                text-slate-600
                transition
                group-hover:translate-x-1
                group-hover:text-yellow-400
              "
            />

          </a>

        </div>

        {/* =====================================================
            PHONE NUMBERS
        ====================================================== */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
          "
        >

          {contacts.map((contact) => (
            <a
              key={contact.number}
              href={`tel:+${contact.whatsapp}`}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2.5
                text-xs
                font-semibold
                text-slate-400
                transition
                hover:border-yellow-400/20
                hover:bg-yellow-400/[0.05]
                hover:text-white
              "
            >
              <FaPhoneAlt
                size={10}
                className="text-yellow-400"
              />

              {contact.number}
            </a>
          ))}

        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        <div
          className="
            mt-12
            border-t
            border-white/10
            pt-8
            text-center
          "
        >

          <p className="text-sm font-semibold text-slate-400">
            আপনার পছন্দের দেশ সম্পর্কে জানতে চান?
          </p>

          <p
            className="
              mt-2
              text-xs
              leading-6
              text-slate-600
              sm:text-sm
            "
          >
            আমাদের সাথে যোগাযোগ করুন এবং আপনার জন্য
            available Business Visa Programme সম্পর্কে
            বিস্তারিত তথ্য জেনে নিন।
          </p>

        </div>

      </div>
    </section>
  );
};

export default BusinessContactSection;