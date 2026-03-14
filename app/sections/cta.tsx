import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function CTA() {
  return (
    <section className="mt-14 md:mt-30 pb-10 md:pb-20" id="contact">
      <h2 className="text-[30px] md:text-[40px] font-semibold flex items-center tracking-tight">
        Contact <BiChevronRight />
      </h2>

      <div className="mt-8 md:mt-10">
        {/* Availability badge */}
        <div className="flex items-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0f8ad8] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0f8ad8]" />
          </span>
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase">
            Available for new projects
          </span>
        </div>

        {/* Big headline */}
        <p className="text-[clamp(30px,11vw,80px)] font-semibold tracking-tighter leading-[1.05] text-white/40 selection:text-white/80">
          Have an idea?
          <br />
          <span className="text-white">Let&apos;s build it.</span>
        </p>

        <p className="mt-5 md:mt-6 text-[16px] md:text-[18px] text-white/50 max-w-md leading-relaxed max-[500px]:leading-snug font-semibold max-[500px]:tracking-tight">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of something great.
        </p>

        {/* Email CTA */}
        <Link
          href="mailto:victorchris73@gmail.com"
          className="group mt-8 md:mt-10 inline-flex items-center gap-3 border border-white/20 hover:border-white/40 rounded-full px-5 md:px-6 py-3 transition-all duration-300 hover:bg-white/5"
        >
          <span className="text-white/70 group-hover:text-white transition-colors duration-300 text-sm tracking-wide">
            Send me a message
          </span>
          <HiOutlineArrowRight
            className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
            size={16}
          />
        </Link>

        {/* Divider */}
        <div className="mt-10 md:mt-14 mb-8 h-px bg-white/10" />

        {/* Footer row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-white/40 text-sm tracking-tight font-medium">
            © {new Date().getFullYear()} Christopher Chukwuebuka
          </p>
          <div className="flex gap-5">
            <Link href="https://github.com/copstud3" target="_blank">
              <FaGithub
                className="text-white/40 hover:text-white transition duration-300"
                size={22}
              />
            </Link>
            <Link href="https://twitter.com/copstud3" target="_blank">
              <BsTwitterX
                className="text-white/40 hover:text-white transition duration-300"
                size={22}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
