import { translations } from "../translations";

type TranslationType = (typeof translations)[keyof typeof translations];

interface AboutProps {
  t: TranslationType;
  theme: string | undefined; // theme can be undefined initially
}

export default function About({ t}: AboutProps) {
  return (
    <section className="flex flex-col mb-32">
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-bold text-2xl md:text-4xl  xl:text-6xl text-center md:text-left">
          {t.about}
        </h3>
        <hr
          className={`xl:w-[120px] w-20 border-t-4 xl:border-t-8 mt-2 xl:mt-3 text-center border-foreground`}
        />
      </div>
      <p className="mt-4 xl:mt-6 font-medium text-center text-lg md:text-xl xl:text-2xl">
        {t.who}
      </p>
    </section>
  );
}
