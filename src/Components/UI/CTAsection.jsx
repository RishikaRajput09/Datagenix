"use client";

const CTASection = () => {
    return (
        <section
            id="cta"
            className="bg-[#050505] relative overflow-hidden py-4"
        >
            {/* Grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(33,198,207,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(33,198,207,0.04) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(33,198,207,0.07)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-[2] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 text-center">

                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[#21C6CF] mb-4">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] shadow-[0_0_8px_#21C6CF] inline-block shrink-0" />
                    Let's Work Together
                </div>

                {/* Headline */}
                <h2 className="font-['Syne',sans-serif] font-bold text-white leading-[1.15] tracking-[-0.02em] text-[1.7rem] sm:text-[2.2rem] lg:text-[2.8rem] max-w-[760px] mx-auto mb-4">
                    The Future Will Belong to{" "}
                    <span className="text-[#21C6CF]">AI-Driven</span>{" "}
                    Organizations &{" "}
                    <span className="text-[#21C6CF]">AI-Skilled</span>{" "}
                    Professionals
                </h2>

                {/* Short info */}
                <p className="font-['DM_Sans',sans-serif] text-[0.82rem] sm:text-[0.9rem] leading-[1.75] text-[rgba(255,255,255,0.45)] max-w-[520px] mx-auto mb-7" style={{ fontWeight: 300 }}>
                    Whether you are a business leader looking to innovate or a professional
                    aiming to future-proof your career, DatagenixAi helps you unlock the
                    power of Artificial Intelligence.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

                    {/* Primary — For Biz */}
                    <a
                        href="#contact"
                        className="group relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#21C6CF] text-[#050505] font-['DM_Sans',sans-serif] text-[0.82rem] font-semibold tracking-[0.06em] uppercase transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(33,198,207,0.35)]"
                    >
                        <span className="absolute inset-0 bg-[#0a2f33] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-[380ms] ease-[cubic-bezier(0.76,0,0.24,1)]" />
                        <span className="relative z-[1]">For Business</span>
                        <svg className="relative z-[1] transition-transform duration-300 group-hover:translate-x-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>

                    {/* Secondary — For Learners */}
                    <a
                        href="#courses"
                        className="group relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent border border-[rgba(33,198,207,0.3)] text-[#21C6CF] font-['DM_Sans',sans-serif] text-[0.82rem] font-semibold tracking-[0.06em] uppercase transition-all duration-300 hover:border-[#21C6CF] hover:shadow-[0_0_20px_rgba(33,198,207,0.12)]"
                    >
                        <span className="absolute inset-0 bg-[rgba(33,198,207,0.08)] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-[380ms] ease-[cubic-bezier(0.76,0,0.24,1)]" />
                        <span className="relative z-[1] group-hover:text-[#21C6CF]">For Learners</span>
                        <svg className="relative z-[1] transition-transform duration-300 group-hover:translate-x-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default CTASection;