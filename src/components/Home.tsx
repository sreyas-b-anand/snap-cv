"use client"
import Image from "next/image";
import AOS from 'aos'
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Duration of the animation
      once: true,    // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <main data-aos="fade-up"  className=" cflex flex-wrap text-text py-5">
        <div className="flex items-start gap-6 flex-col flex-wrap">
          <header>
            <Image className="rounded-full " width={100} height={100} src={'/photo.jpg'} alt="" />
          </header>
          <section className="font-bold text-[22px] text-accent">Sreyas B Anand</section>
          <article className="font-medium text-[16px] text-secaccent">Frontend Developer</article>
          <section className=" text-[12px]">
            I am a B.Tech CSE undergraduate and an aspiring engineer with a deep
            passion for technology and web development. I look forward to making meaningful
            contributions in these fields.
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
