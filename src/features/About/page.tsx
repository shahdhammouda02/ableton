import React from "react";
import Image from "next/image";
import {
  header,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  poster,
  photo6,
  photo7,
  photo8,
} from "../../../public/images/page";
import { Paragraph } from "@/components/page";

export const About = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-6">
      <div className="hidden md:flex gap-6 mb-6 sm:mb-8 md:mb-10 justify-start">
        <a href="/about" className="text-orange-500 text-lg sm:text-xl">
          About
        </a>
        <a href="/jobs" className="text-black text-lg sm:text-xl">
          Jobs
        </a>
        <a href="/apprenticeships" className="text-black text-lg sm:text-xl">
          Apprenticeships
        </a>
      </div>

      <div className="relative w-full flex justify-center items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <Image
          src={header}
          alt="Ableton header"
          width={1600}
          height={1000}
          className="w-full max-w-screen-xl object-cover h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] xl:h-[750px] transition-all duration-300"
        />
        <h1 className="absolute text-red-400 text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-6 drop-shadow-lg text-center">
          Ableton
        </h1>
      </div>
      <div className="max-w-3xl mx-auto text-left text-black mb-30 md:mb-30 sm:mb-25">
        <p className="text-xl sm:text-xl md:text-5xl lg:text-4xl mb-4 sm:mb-5 md:mb-6">
          We make{" "}
          <a href="/live" className="text-blue-700">
            Live
          </a>
          ,{" "}
          <a href="/push" className="text-blue-700">
            Push
          </a>
          ,{" "}
          <a href="/note" className="text-blue-700">
            Note
          </a>
          ,{" "}
          <a href="/move" className="text-blue-700">
            Move
          </a>{" "}
          and{" "}
          <a href="/link" className="text-blue-700">
            Link
          </a>{" "}
          — unique software and hardware for music creation and performance.
          With these products, our community of users creates amazing things.
        </p>

        <Paragraph
          description="Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world."
          descriptionSize="text-xl sm:text-xl md:text-2xl text-gray-800"
        />
      </div>

      <div className="relative w-full max-w-screen-5xl mx-auto mb-20 sm:mb-24 md:mb-30">
        <div className="flex flex-col md:flex-row gap-0 h-[400px] sm:h-[500px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
          <div className="flex-1 relative">
            <div className="absolute right-0 translate-x-1/7 top-1/2 -translate-y-1/2 w-[200px] h-[150px] sm:w-[250px] sm:h-[200px] md:w-[400px] md:h-[350px] lg:w-[500px] lg:h-[450px] xl:w-[600px] xl:h-[600px] z-10">
              <Image
                src={photo1}
                alt="Ableton product"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-[1.3] bg-yellow-200 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-25 -mr-4 sm:-mr-6 md:-mr-8 lg:-mr-10">
            <div className="relative w-[200px] h-[150px] sm:w-[250px] sm:h-[180px] md:w-[350px] md:h-[280px] lg:w-[450px] lg:h-[350px] xl:w-[500px] xl:h-[400px]">
              <Image
                src={photo2}
                alt="Ableton workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Paragraph
        title="Making music isn't easy. It takes time, effort, and learning. But when
          you're in the flow, it's incredibly rewarding."
        description="We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for."
      />

      <div className="max-w-3xl mx-auto mb-20 sm:mb-24 md:mb-30 text-left">
        <div className="relative pb-[56.25%] h-0 overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/9SbnhgjeyXA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-2 text-xs sm:text-sm">Why Ableton - Juanpe Bolivar</p>
      </div>

      <Paragraph
        title="We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo."
        description="Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture."
      />

      <div className="relative w-full max-w-screen-5xl mx-auto mb-20 sm:mb-24 md:mb-30">
        <div className="flex flex-col md:flex-row gap-0 h-[400px] sm:h-[500px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
          <div className="flex-[1.3] bg-green-300 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-25 -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10">
            <div className="relative w-[200px] h-[150px] sm:w-[250px] sm:h-[180px] md:w-[350px] md:h-[280px] lg:w-[450px] lg:h-[350px] xl:w-[500px] xl:h-[400px]">
              <Image
                src={photo3}
                alt="Ableton workspace"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-[200px] h-[150px] sm:w-[250px] sm:h-[180px] md:w-[350px] md:h-[280px] lg:w-[450px] lg:h-[350px] xl:w-[500px] xl:h-[400px]">
              <Image
                src={photo4}
                alt="Ableton team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute left-0 -translate-x-1/7 top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[350px] lg:w-[500px] lg:h-[400px] xl:w-[600px] xl:h-[500px] z-10">
              <Image
                src={photo5}
                alt="Ableton product"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Paragraph
        title="We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great."
        description="Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We’ve learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don’t always agree with each other, but opinion and
          debate are valued and openly encouraged."
      />

      <div className="relative w-full flex justify-center items-center mb-20 sm:mb-24 md:mb-30">
        <Image
          src={poster}
          alt="Ableton header"
          width={1600}
          height={1000}
          className="w-full max-w-screen-xl object-cover h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] xl:h-[750px] transition-all duration-300"
        />
      </div>

      <Paragraph
        title="We’re passionate about what we do, but we’re equally passionate about
          improving who we are."
        description="We work hard to foster an environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other."
        description2="  Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and coached on
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices."
      />

      <div className="relative w-full max-w-screen-5xl mx-auto mb-12 sm:mb-14 md:mb-15">
        <div className="flex justify-center items-center h-[500px] sm:h-[650px] md:h-[800px] lg:h-[900px] xl:h-[1000px]">
          <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[500px] lg:w-[700px] lg:h-[600px] xl:w-[900px] xl:h-[800px] bg-purple-300 z-0"></div>
          <div className="absolute left-0 translate-x-[15%] top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[300px] lg:w-[400px] lg:h-[350px] xl:w-[500px] xl:h-[400px] z-10">
            <Image src={photo6} alt="Photo 6" fill className="object-cover" />
          </div>

          <div className="absolute right-0 top-1/2 translate-x-[6%] -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] z-10">
            <Image src={photo7} alt="Photo 7" fill className="object-cover" />
          </div>
        </div>
      </div>

      <Paragraph
        title="We want our employees to love it here. Since we’re looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible."
        description="If you're joining us in Berlin, we'll help with relocation and
          paperwork. We’ll even provide you with free German or English lessons.
          Plus, working in Germany means you can expect comprehensive health
          insurance for you and your family, as well as generous maternity and
          paternity leave. Office hours are flexible, but it’s not all work; we
          have several company and team outings throughout the year as well as a
          variety of fun, informal small-group activities."
      />

      <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto mb-20 sm:mb-24 md:mb-30">
        <div className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px]">
          <Image
            src={photo8}
            alt="Ableton work"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 bg-blue-300 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 text-left">
          <div className="max-w-md">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-5 md:mb-6 text-black">
              We're really proud of the work we've done so far. But there's so
              much more to come. If you'd like to be a part of it, please join
              us.
            </p>
            <a
              href="/jobs"
              className="inline-block mb-3 cursor-pointer text-lg sm:text-xl md:text-2xl text-blue-700 hover:underline"
            >
              See latest jobs &gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
