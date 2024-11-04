import Image from "next/image";
import Link from "next/link";
function MyProjects() {
  const projects = [
    {
      name: "Tasker",
      img: "/logoTasker.jpg",
      description: "A simple to-do app built using MERN stack",
      gitlink: "https://github.com/sreyas-b-anand/todo-mern",
      weblink: "https://github.com/sreyas-b-anand/todo-mern",
    },
    {
      name: "Grammr",
      img: "/logoGemini.jpg",
      description: "A simple grammar checking website using the Gemini API.",
      gitlink: "https://github.com/sreyas-b-anand/grammr",
      weblink: "https://grammr.vercel.app/",
    },
  ];
  return (
    <>
      <main className="w-full max-w-[600px] flex flex-wrap flex-col gap-6  text-text pt-5 px-5">
        <div className="text-center text-[18px] font-semibold w-full text-accent flex items-center justify-center py-5">
          <p className="px-3 py-1 border max-w-[140px] text-center rounded-lg">
            My Projects
          </p>
        </div>
        <div className=" flex flex-col gap-3 flex-wrap items-start justify-start ">
          {projects.map((pr, index) => {
            return (
              <div
                key={index}
                className="flex gap-4 border-[1px] border-gray-300 w-full   rounded-lg max-w-full px-5 "
              >
                <div className="flex items-center">
                  <Image
                    width={80}
                    height={80}
                    className="rounded-[50%]"
                    src={pr.img}
                    alt="logo"
                  />
                </div>
                <div className=" flex flex-col gap-2 items-start justify-center py-3  max-w-[400px] flex-wrap">
                  <header className="text-[16px] w-full font-medium">
                    {pr.name}
                  </header>
                  <article className="text-[12px] w-full">
                    {pr.description}
                  </article>
                  <section className="flex gap-3 w-full py-2">
                    <Link
                      href={pr.gitlink}
                      target="_blank"
                      rel="noopener norefferer"
                      className="text-primary border border-gray-300 px-2 text-[14px]  rounded-[5px] hover:text-white hover:bg-gray-800 "
                    >
                      Git
                    </Link>
                    <Link
                      href={pr.weblink}
                      target="_blank"
                      rel="noopener norefferer"
                      className="text-primary border border-gray-300  px-2 text-[14px]  rounded-[5px] hover:text-white hover:bg-gray-800"
                    >
                      Web
                    </Link>
                  </section>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default MyProjects;
