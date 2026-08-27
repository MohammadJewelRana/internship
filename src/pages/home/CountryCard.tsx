 /* eslint-disable @typescript-eslint/no-explicit-any */

import {
  FaBriefcase,
  FaClock,
  FaDollarSign,
  FaUserGraduate,
  FaGlobe,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "8801977550083";

const InternshipCountryCard = ({ country }: any) => {
  const whatsappText = encodeURIComponent(
    `আসসালামু আলাইকুম, আমি ${country.countryEn}-এর ${country.title} সম্পর্কে বিস্তারিত জানতে চাই।`
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[2rem]
        border
        border-slate-200
        bg-white
        shadow-[0_10px_40px_rgba(15,23,42,0.06)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-indigo-200
        hover:shadow-[0_25px_70px_rgba(79,70,229,0.14)]
      "
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative h-[270px] overflow-hidden sm:h-[290px]">

        <img
          src={country.image}
          alt={country.countryEn}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        {/* Dark Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-slate-950/30
            to-transparent
          "
        />

        {/* Subtle Color Glow */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-indigo-600/10
            via-transparent
            to-violet-600/10
          "
        />

        {/* =================================================
            COUNTRY PILL
        ================================================== */}

        <div
          className="
            absolute
            left-5
            top-5
            flex
            items-center
            gap-2.5
            rounded-full
            border
            border-white/20
            bg-slate-950/65
            px-3
            py-2
            shadow-xl
            backdrop-blur-xl
            sm:left-6
            sm:top-6
          "
        >
          <img
            src={country.flag}
            alt={`${country.countryEn} flag`}
            className="
              h-7
              w-10
              rounded
              object-cover
              shadow-sm
              sm:h-8
              sm:w-12
            "
          />

          <span
            className="
              text-xs
              font-bold
              text-white
              sm:text-sm
            "
          >
            {country.country}
          </span>
        </div>

        {/* =================================================
            INTERNSHIP BADGE
        ================================================== */}

        <div
          className="
            absolute
            right-5
            top-5
            flex
            items-center
            gap-1.5
            rounded-full
            border
            border-indigo-300/30
            bg-indigo-600/95
            px-3
            py-2
            shadow-xl
            backdrop-blur-md
            sm:right-6
            sm:top-6
          "
        >
          <FaBriefcase
            size={10}
            className="text-white"
          />

          <span
            className="
              text-[9px]
              font-black
              uppercase
              tracking-[0.12em]
              text-white
              sm:text-[10px]
            "
          >
            Paid Internship
          </span>
        </div>

        {/* =================================================
            COUNTRY TITLE
        ================================================== */}

        <div
          className="
            absolute
            bottom-6
            left-5
            right-5
            sm:left-6
            sm:right-6
          "
        >
          <p
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-indigo-300
              sm:text-[10px]
            "
          >
            Internship Opportunity
          </p>

          <h3
            className="
              mt-1
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-white
              sm:text-4xl
            "
          >
            {country.countryEn}
          </h3>
        </div>
      </div>

      {/* =====================================================
          BODY
      ====================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-5
          sm:p-7
        "
      >
        {/* =================================================
            PROGRAM TITLE
        ================================================== */}

        <div>

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-indigo-500
            "
          >
            Program
          </p>

          <h4
            className="
              mt-2
              text-xl
              font-black
              leading-snug
              text-slate-900
              sm:text-2xl
            "
          >
            {country.title}
          </h4>

        </div>

        {/* =================================================
            SALARY HIGHLIGHT
        ================================================== */}

        <div
          className="
            mt-6
            overflow-hidden
            rounded-2xl
            border
            border-emerald-100
            bg-gradient-to-r
            from-emerald-50
            via-white
            to-teal-50
            p-4
            sm:p-5
          "
        >
          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-emerald-500
                text-white
                shadow-md
                shadow-emerald-500/20
              "
            >
              <FaDollarSign size={17} />
            </div>

            <div className="min-w-0">

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-emerald-600
                "
              >
                Monthly Income
              </p>

              <p
                className="
                  mt-1
                  text-base
                  font-black
                  leading-6
                  text-slate-900
                  sm:text-lg
                "
              >
                {country.salary}
              </p>

            </div>

          </div>
        </div>

        {/* =================================================
            INFORMATION GRID
        ================================================== */}

        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
          "
        >

          {/* Duration */}

          <div
            className="
              rounded-2xl
              border
              border-slate-100
              bg-slate-50/70
              p-4
              transition
              group-hover:border-indigo-100
            "
          >
            <div className="flex items-center gap-2.5">

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-indigo-100
                  text-indigo-600
                "
              >
                <FaClock size={13} />
              </div>

              <div className="min-w-0">

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-slate-400
                  "
                >
                  Duration
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    font-bold
                    text-slate-800
                    sm:text-sm
                  "
                >
                  {country.duration}
                </p>

              </div>

            </div>
          </div>

          {/* Visa */}

          <div
            className="
              rounded-2xl
              border
              border-slate-100
              bg-slate-50/70
              p-4
              transition
              group-hover:border-indigo-100
            "
          >
            <div className="flex items-center gap-2.5">

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-rose-100
                  text-rose-600
                "
              >
                <FaGlobe size={13} />
              </div>

              <div className="min-w-0">

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-slate-400
                  "
                >
                  Visa
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    font-bold
                    text-slate-800
                    sm:text-sm
                  "
                >
                  {country.visa}
                </p>

              </div>

            </div>
          </div>

        </div>

        {/* =================================================
            ELIGIBILITY
        ================================================== */}

        <div className="mt-4 space-y-3">

          {/* Requirement */}

          <div
            className="
              flex
              items-start
              gap-3
              rounded-2xl
              border
              border-slate-100
              bg-white
              p-4
            "
          >

            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-blue-50
                text-blue-600
              "
            >
              <FaUserGraduate size={13} />
            </div>

            <div className="min-w-0">

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-slate-400
                "
              >
                যোগ্যতা
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-slate-600
                  sm:text-sm
                "
              >
                {country.requirement}
              </p>

            </div>

          </div>

          {/* Study Gap */}

          <div
            className="
              flex
              items-start
              gap-3
              rounded-2xl
              border
              border-slate-100
              bg-white
              p-4
            "
          >

            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-amber-50
                text-amber-600
              "
            >
              <FaBriefcase size={13} />
            </div>

            <div className="min-w-0">

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-slate-400
                "
              >
                Study Gap
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-slate-600
                  sm:text-sm
                "
              >
                {country.gap}
              </p>

            </div>

          </div>

        </div>

        {/* =================================================
            WHATSAPP CTA
        ================================================== */}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group/btn
            mt-6
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-emerald-500
            to-teal-500
            px-5
            py-4
            text-sm
            font-black
            text-white
            shadow-lg
            shadow-emerald-500/10
            transition-all
            duration-300
            hover:-translate-y-1
            hover:from-emerald-600
            hover:to-teal-600
            hover:shadow-xl
            hover:shadow-emerald-500/20
          "
        >

          <FaWhatsapp size={20} />

          <span>
            যোগাযোগ করুন
          </span>

          <FaArrowRight
            size={12}
            className="
              transition-transform
              duration-300
              group-hover/btn:translate-x-1
            "
          />

        </a>

      </div>
    </article>
  );
};

export default InternshipCountryCard;