import useReveal from "./useReveal";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./Sectionheading";

export default function MissionVision() {
  const r = useReveal(0);

  return (
    <section id="vm" className="bg-[#EAEAEA] w-[97%] rounded-3xl mx-auto relative overflow-hidden py-12">
      <div
        ref={r.ref}
        style={r.style}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10"
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <Eyebrow>Purpose & Direction</Eyebrow>
          <h2 className="text-[1.9rem] sm:text-[2.4rem] lg:text-[3rem] font-bold text-black leading-[1.1] tracking-[-0.02em]">
            Vision & <span className="text-[#28E7C5]">Mission</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* MISSION */}
          <div
            className="relative rounded-2xl p-8 sm:p-10 bg-white 
          shadow-[-25px_30px_80px_rgba(0,0,0,0.18),-8px_12px_30px_rgba(0,0,0,0.12)]
          hover:shadow-[0_24px_56px_rgba(0,0,0,0.16),0_8px_20px_rgba(0,0,0,0.1)]
          transition-all duration-300 min-h-75 flex flex-col justify-between"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0d9ba3]" />
              <span className="text-[#28E7C5] text-[0.65rem] tracking-[0.18em] uppercase font-medium">
                Vision
              </span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-[1.3rem] text-[#111] mb-4 leading-[1.3]">
              Democratise AI Across Industries
            </h3>

            {/* Content */}
            <p className="text-[0.9rem] text-[rgba(0,0,0,1)] leading-[1.8]">
              Our mission is to make Artificial Intelligence accessible,
              practical, and impactful for every business, industry, and
              individual—not just large technology corporations. We focus on
              building scalable AI systems, delivering real-world solutions, and
              enabling organizations to move from data to intelligent
              decision-making.
              <br />
              <br />
              Beyond solutions, we aim to educate and empower people by bridging
              the gap between theoretical knowledge and real-world application,
              ensuring AI creates meaningful value at every level of society.
            </p>
          </div>

          {/* VISION */}
          <div
            className="relative rounded-2xl p-8 sm:p-10 bg-white 
          shadow-[-25px_30px_80px_rgba(0,0,0,0.18),-8px_12px_30px_rgba(0,0,0,0.12)]
          hover:shadow-[0_24px_56px_rgba(0,0,0,0.16),0_8px_20px_rgba(0,0,0,0.1)]
          transition-all duration-300 min-h-75 flex flex-col justify-between"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0d9ba3]" />
              <span className="text-[#28E7C5] text-[0.65rem] tracking-[0.18em] uppercase font-medium">
                Mission
              </span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-[1.3rem] text-black mb-4 leading-[1.3]">
              Building an AI-Empowered Nation
            </h3>

            {/* Content */}
            <p className="text-[0.9rem] text-[rgba(0,0,0,1)] leading-[1.8]">
              We envision a future where every business operates with
              intelligence, every professional is equipped with AI capabilities,
              and technology actively contributes to sustainable growth and
              innovation.
              <br />
              <br />
              Our goal is to create an ecosystem where AI is not limited to
              research labs or large enterprises, but becomes a core driver of
              productivity, efficiency, and progress across industries. We
              aspire to position India at the forefront of the next wave of
              AI-driven industrial transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
