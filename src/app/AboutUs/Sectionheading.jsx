export default function SectionHeading({ children }) {
  return (
    <h2
      className="text-[1.9rem] sm:text-[2.4rem] lg:text-[3rem] font-bold text-white leading-[1.1] tracking-[-0.02em]"
    >
      {children}
    </h2>
  );
}