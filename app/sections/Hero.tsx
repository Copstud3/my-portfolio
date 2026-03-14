import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="dark pt-4 md:pt-0">
      <h1 className="text-[30px] sm:text-[36px] md:text-[40px] font-medium text-white tracking-tight md:tracking-tighter pt-4 md:pt-30 leading-tight">
        Christopher Chukwuebuka
      </h1>
      <p className="mt-5 text-[clamp(30px,10vw,82px)] font-semibold text-white/40 tracking-tight lg:w-[800px] lg:mt-10 leading-none">
        Need a developer who can turn product ideas into
        <span className="text-white"> clean, shipped experiences?</span>
      </p>

      <p className="mt-5 md:mt-10 text-[22px] sm:text-[26px] md:text-[35px] tracking-tight font-semibold text-white/40 leading-tight">
        I&apos;m a software developer building{" "}
        <span className="text-white"> web and mobile applications.</span>
      </p>

      <div className="mt-6 lg:mt-15 flex gap-5">
        <Link href={"https://github.com/copstud3"} target="_blank">
          <FaGithub
            className="text-white/60 hover:text-white transition duration-300"
            size={26}
          />
        </Link>
        <Link href={"https://twitter.com/copstud3"} target="_blank">
          <BsTwitterX
            className="text-white/60 hover:text-white transition duration-300"
            size={26}
          />
        </Link>
      </div>
    </section>
  );
}
