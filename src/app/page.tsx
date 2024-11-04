"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Home from "@/components/Home";
import MyProjects from "@/components/MyProjects";
import Skills from "@/components/Skills";
import Link from "next/link";

export default function Landing() {
  useEffect(()=>{
    AOS.init({
      duration : 600,once : true,
    })
  } , [])
  return (
    <>
      <main className="flex p-5   items-center justify-center w-screen min-h-screen flex-col bg-bg">
        <main className=" h-[100px] w-screen opacity-0 ">blank space</main>
        <section  className="flex items-center justify-center max-w-[600px]  flex-col gap-5 flex-wrap p-5">
          <section data-aos="fade-up">
            <Home />
          </section>

          <section data-aos="fade-up" className="flex items-center justify-center flex-1 w-full gap-4  ">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black w-full h-[40px] text-center flex items-center justify-center rounded border "
              href="https://www.linkedin.com/in/sreyas-b-anand-8113a8298"
            >
              Contact Me
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white w-full h-[40px] text-center flex items-center justify-center  rounded"
              href="https://github.com/sreyas-b-anand"
            >
              Github
            </Link>
          </section>
          <section data-aos="fade-up">
            <Skills />
          </section>
          <section className='w-full' data-aos="fade-up">
            <Education />
          </section>
        </section>
      </main>
      <main className="flex    items-center w-screen max-h-screen flex-col bg-bg">
        <section className='p-5' data-aos="fade-up">
          <MyProjects />
        </section>
        <section data-aos="fade-up " data-aos-duration="100">
          <Contact />
        </section>
      </main>
    </>
  );
}
