import { BiChevronRight } from "react-icons/bi";

export default function About() {
  return (
    <section className="mt-14 md:mt-30">
      <h2 className="text-[30px] md:text-[40px] font-semibold flex items-center tracking-tight">
        About <BiChevronRight />
      </h2>

      <article className="mt-6 md:mt-8 text-[20px] max-[500px]:tracking-tighter max-[500px]:leading-snug  md:text-[25px] font-semibold lg:font-medium text-white/70 leading-relaxed md:leading-normal">
        Hi there 👋🏾, I&apos;m Christopher Chukwuebuka, a frontend & mobile
        engineer with 4+ years of experience crafting pixel-perfect,
        user-centric interfaces. I specialize in React, React Native, Next.js,
        TanStack, and TypeScript, building web and mobile experiences that
        prioritize both aesthetics and functionality. I bring interfaces to life
        with smooth, engaging animations using GSAP.
        <br />
        <br />
        Beyond my core stack, I&apos;m passionate about exploring new
        technologies and challenging myself with languages like Rust, Python,
        and Java. I&apos;m also an active contributor to open source projects,
        particularly in the web3 ecosystem.
      </article>
    </section>
  );
}
