import React from "react";
import {
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
  FaGlobeAsia,
  FaPlaneDeparture,
  FaWhatsapp,
} from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/8801977550083?text=আসসালামু%20আলাইকুম,%20আমি%20Internship%20Programme%20সম্পর্কে%20বিস্তারিত%20জানতে%20চাই।";

const InternshipHero: React.FC = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-950
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <img
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90"
        alt="International internship"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Left Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-slate-950
          via-slate-950/90
          to-slate-950/30
        "
      />

      {/* Bottom Gradient */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-48
          bg-gradient-to-t
          from-slate-950
          to-transparent
        "
      />

      {/* Decorative Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/4
          h-96
          w-96
          rounded-full
          bg-yellow-400/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-10
          h-80
          w-80
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-5
          pb-20
          pt-28
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-14
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="max-w-3xl">

            {/* Badge */}

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-yellow-400/25
                bg-yellow-400/10
                px-3.5
                py-2
                text-xs
                font-semibold
                text-yellow-300
                backdrop-blur-md
                sm:text-sm
              "
            >
              <FaBriefcase className="text-yellow-400" />

              International Internship Programme
            </div>

            {/* Heading */}
 
<h1
  className="
    text-[2.6rem]
    font-black
    leading-[1.08]
    tracking-tight
    text-white
    sm:text-5xl
    md:text-6xl
    lg:text-[4.5rem]
  "
>
  বিদেশে ইন্টার্নশিপ

  <span
    className="
      mt-1
      block
      bg-gradient-to-r
      from-yellow-300
      via-yellow-400
      to-orange-400
      bg-clip-text
      pb-3
      text-transparent
    "
  >
    নতুন সম্ভাবনা
  </span>
</h1>
            {/* Description */}

            <p
              className="
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-slate-300
                sm:text-base
                sm:leading-8
                lg:text-lg
              "
            >
              আন্তর্জাতিক প্রতিষ্ঠানে Internship Programme-এর মাধ্যমে
              বাস্তব কর্ম-অভিজ্ঞতা অর্জনের সুযোগ। আপনার academic
              profile অনুযায়ী উপযুক্ত country ও programme নির্বাচন থেকে
              শুরু করে application process পর্যন্ত professional support
              ও guidance পান।
            </p>

            {/* =================================================
                PROGRAM HIGHLIGHTS
            ================================================== */}

            <div
              className="
                mt-7
                grid
                max-w-2xl
                grid-cols-2
                gap-3
                sm:grid-cols-4
              "
            >
              {/* Paid Internship */}

              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-3
                  backdrop-blur-md
                  sm:p-4
                "
              >
                <FaBriefcase className="text-yellow-400" />

                <p
                  className="
                    mt-2
                    text-xs
                    font-bold
                    text-white
                  "
                >
                  Paid Internship
                </p>
              </div>

              {/* Accommodation */}

              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-3
                  backdrop-blur-md
                  sm:p-4
                "
              >
                <FaGlobeAsia className="text-yellow-400" />

                <p
                  className="
                    mt-2
                    text-xs
                    font-bold
                    text-white
                  "
                >
                  International
                </p>
              </div>

              {/* Experience */}

              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-3
                  backdrop-blur-md
                  sm:p-4
                "
              >
                <FaCheckCircle className="text-yellow-400" />

                <p
                  className="
                    mt-2
                    text-xs
                    font-bold
                    text-white
                  "
                >
                  Work Experience
                </p>
              </div>

              {/* Visa */}

              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-3
                  backdrop-blur-md
                  sm:p-4
                "
              >
                <FaPlaneDeparture className="text-yellow-400" />

                <p
                  className="
                    mt-2
                    text-xs
                    font-bold
                    text-white
                  "
                >
                  Visa Support
                </p>
              </div>
            </div>

            {/* =================================================
                INTERNSHIP PROGRAMME
            ================================================== */}

            <div
              className="
                mt-7
                max-w-2xl
                rounded-2xl
                border
                border-white/10
                bg-white/[0.06]
                px-4
                py-4
                backdrop-blur-md
                sm:px-5
              "
            >
              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-yellow-400
                    text-slate-950
                  "
                >
                  <FaBriefcase size={16} />
                </div>

                <div>

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-slate-400
                    "
                  >
                    Internship Opportunities
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-bold
                      text-white
                      sm:text-base
                    "
                  >
                    Hong Kong • Thailand • Fiji
                  </p>

                </div>

              </div>
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              {/* Country Button */}

              <a
                href="#internship"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-yellow-400
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-slate-950
                  shadow-lg
                  shadow-yellow-500/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-yellow-300
                  sm:text-base
                "
              >
                ইন্টার্নশিপ দেখুন

                <FaArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* WhatsApp */}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-white/20
                  bg-white/10
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/15
                  sm:text-base
                "
              >
                <FaWhatsapp
                  className="text-green-400"
                  size={19}
                />

                বিস্তারিত জানুন
              </a>
            </div>

            {/* Trust Points */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                gap-x-6
                gap-y-3
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-300
                  sm:text-sm
                "
              >
                <FaCheckCircle className="text-green-400" />

                Internship Guidance
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-300
                  sm:text-sm
                "
              >
                <FaCheckCircle className="text-green-400" />

                Visa Guidance
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-300
                  sm:text-sm
                "
              >
                <FaCheckCircle className="text-green-400" />

                Application Support
              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT PREMIUM CARD
          ================================================== */}

          <div className="relative hidden lg:block">

            {/* Glow */}

            <div
              className="
                absolute
                -inset-6
                rounded-[2.5rem]
                bg-yellow-400/10
                blur-3xl
              "
            />

            <div className="relative mx-auto max-w-md">

              {/* Main Image */}

              <div
                className="
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/15
                  bg-white/10
                  p-3
                  shadow-2xl
                  backdrop-blur-md
                "
              >

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[1.5rem]
                  "
                >

                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90"
                    alt="International internship"
                    className="
                      h-[480px]
                      w-full
                      object-cover
                    "
                  />

                  {/* Image Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-slate-950/95
                      via-slate-950/20
                      to-transparent
                    "
                  />

                  {/* Image Content */}

                  <div
                    className="
                      absolute
                      bottom-6
                      left-6
                      right-6
                    "
                  >

                    <p
                      className="
                        text-xs
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-yellow-400
                      "
                    >
                      International Internship
                    </p>

                    <h3
                      className="
                        mt-2
                        text-2xl
                        font-black
                        text-white
                      "
                    >
                      Build Your Global Career
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-slate-300
                      "
                    >
                      Internship opportunity থেকে application
                      ও visa process পর্যন্ত complete support।
                    </p>

                  </div>

                </div>

              </div>

              {/* =================================================
                  FLOATING PACKAGE CARD
              ================================================== */}

              <div
                className="
                  absolute
                  -bottom-7
                  -left-8
                  rounded-2xl
                  border
                  border-white/15
                  bg-slate-950/90
                  p-4
                  shadow-2xl
                  backdrop-blur-xl
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-yellow-400
                      text-slate-950
                    "
                  >
                    <FaBriefcase />
                  </div>

                  <div>

                    <p className="text-xs text-slate-400">
                      Internship
                    </p>

                    <p className="mt-0.5 font-bold text-white">
                      Paid • International • Experience
                    </p>

                  </div>

                </div>

              </div>

              {/* =================================================
                  FLOATING DURATION CARD
              ================================================== */}

              <div
                className="
                  absolute
                  -right-7
                  top-12
                  rounded-2xl
                  border
                  border-white/15
                  bg-slate-950/90
                  px-4
                  py-3
                  shadow-2xl
                  backdrop-blur-xl
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-red-600
                      text-white
                    "
                  >
                    <FaGlobeAsia />
                  </div>

                  <div>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-slate-400
                      "
                    >
                      Destinations
                    </p>

                    <p
                      className="
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      Hong Kong • Thailand • Fiji
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          MOBILE BOTTOM INFO
      ====================================================== */}

      <div
        className="
          absolute
          bottom-5
          left-0
          right-0
          px-5
          lg:hidden
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-md
            items-center
            justify-between
            rounded-2xl
            border
            border-white/10
            bg-slate-950/75
            px-4
            py-3
            shadow-xl
            backdrop-blur-md
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-yellow-400
                text-slate-950
              "
            >
              <FaBriefcase size={15} />
            </div>

            <div>

              <p className="text-[10px] text-slate-400">
                Internship Programme
              </p>

              <p className="text-xs font-bold text-white">
                Paid • International Opportunities
              </p>

            </div>

          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              bg-green-500
              text-white
              transition
              hover:bg-green-600
            "
          >
            <FaWhatsapp size={16} />
          </a>

        </div>

      </div>

    </section>
  );
};

export default InternshipHero;