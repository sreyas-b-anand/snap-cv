import Education from "@/components/Education";
import Home from "@/components/Home";
import MyProjects from "@/components/MyProjects";
import Skills from "@/components/Skills";
import Link from "next/link";
export default function Landing() {
  return (
    <>
      <main className="flex p-5   items-center justify-center w-screen h-screen flex-col ">
        <div className="h-[300px] w-screen fixed"></div>
        <section className="flex items-center justify-center max-w-[600px]  flex-col gap-5 flex-wrap p-5">
          <Home />
          <section className="flex items-center justify-center flex-1 w-full gap-4  ">
            <Link
              className="bg-white text-black w-full h-[40px] text-center flex items-center justify-center rounded border "
              href="https://www.linkedin.com/in/sreyas-b-anand-8113a8298"
            >
              Contact Me
            </Link>
            <Link
              className="bg-black text-white w-full h-[40px] text-center flex items-center justify-center  rounded"
              href="https://github.com/sreyas-b-anand"
            >
              Github
            </Link>
          </section>
          <Skills />
          <Education />
          
        </section>
       
          
      </main>
      <main className="w-screen h-screen flex items-center flex-wrap ">
        <section className="flex items-center justfiy-center  max-w-[600px]  flex-col gap-5">
          <MyProjects/>
        </section>
      </main>
    </>
  );
}
