import InternshipCountryCard from "./CountryCard";
import SectionHeading from "./SectionHeading";
 
const internshipCountries = [
  {
    id: "hong-kong",
    country: "হংকং",
    countryEn: "Hong Kong",
    flag: "https://flagcdn.com/w160/hk.png",

    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",

    title: "হোটেল ম্যানেজমেন্ট ইন্টার্নশিপ",

    duration: "৬ - ১২ মাস",

    salary: "৮,৫০০ HKD / মাস",

    requirement: "চলমান (Running) শিক্ষার্থী",

    gap: "সর্বোচ্চ ৩ বছরের স্টাডি গ্যাপ গ্রহণযোগ্য",

    visa: "ইন্টার্নশিপ ভিসা",
  },

  {
    id: "thailand",
    country: "থাইল্যান্ড",
    countryEn: "Thailand",
    flag: "https://flagcdn.com/w160/th.png",

    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",

    title: "টিচিং ইন্টার্নশিপ",

    duration: "৬ - ১২ মাস",

    salary: "২,৫০০ - ৩,৫০০ Thai Baht / মাস",

    requirement: "গ্র্যাজুয়েশন সম্পন্ন",

    gap: "স্টাডি গ্যাপ গ্রহণযোগ্য",

    visa: "ইন্টার্নশিপ ভিসা",
  },

  {
    id: "fiji",
    country: "ফিজি",
    countryEn: "Fiji",
    flag: "https://flagcdn.com/w160/fj.png",

    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=85",

    title: "হোটেল ম্যানেজমেন্ট ইন্টার্নশিপ",

    duration: "৬ - ১২ মাস",

    salary: "৭৫,০০০ - ৯০,০০০ টাকা / মাস",

    requirement: "গ্র্যাজুয়েশন সম্পন্ন",

    gap: "স্টাডি গ্যাপ গ্রহণযোগ্য",

    visa: "ইন্টার্নশিপ ভিসা",
  },
];

const InternshipCountriesSection = () => {
  return (
    <section
      id="countries"
      className="
        bg-slate-50
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <SectionHeading
          eyebrow="Internship Opportunities"
          title={
            <>
              আন্তর্জাতিক
              <span className="block text-indigo-600">
                Internship Program
              </span>
            </>
          }
          description="
            বিভিন্ন আন্তর্জাতিক দেশে শিক্ষার্থী ও গ্র্যাজুয়েটদের জন্য
            Internship Program-এর সুযোগ সম্পর্কে বিস্তারিত জানুন।
          "
        />

        {/* ================= CARDS ================= */}

        <div
          className="
            mt-12
            grid
            gap-6
            sm:mt-14
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {internshipCountries.map((country) => (
            <InternshipCountryCard
              key={country.id}
              country={country}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default InternshipCountriesSection;