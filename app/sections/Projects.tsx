import { BiChevronRight } from "react-icons/bi";
import { projects } from "../constants/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="mt-14 md:mt-20 font-poppins">
      <p className="text-[30px] md:text-[40px] font-semibold text-white flex items-center tracking-tight">
        Projects <BiChevronRight />
      </p>

      <div className="mt-6 md:mt-8 space-y-6 md:space-y-7">
        {projects.map((project, index) => (
          <article key={index}>
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-3">
              <Link
                href={project.url}
                target="_blank"
                className="text-[22px] md:text-[25px] font-semibold hover:underline underline-offset-2 decoration-3 leading-tight max-[500px]:tracking-tighter tracking-tight wrap-break-word"
              >
                {project.title}
              </Link>

              <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed max-w-2xl font-semibold ">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <Link href={"https://github.com/copstud3"} target="_blank">
        <p className="text-center pt-5 lg:pt-10 max-[500px]:tracking-tighter tracking-tight text-white font-semibold lg:text-[20px] hover:underline underline-offset-2 decoration-3">
          See more projects on my github
        </p>
      </Link>
    </section>
  );
}
