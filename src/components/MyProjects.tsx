import Link from "next/link";
function MyProjects() {
  const projects = [
    {
      name: "Tasker",
      description:
        "A simple to-do app built using MERN stack",
        gitlink: "https://github.com/sreyas-b-anand/todo-mern",
        weblink:"https://github.com/sreyas-b-anand/todo-mern",
    },
    {
      name: "Grammr",
      description: "A simple grammar checking website using the Gemini API.",
      gitlink: "https://github.com/sreyas-b-anand/grammr",
      weblink:"https://grammr.vercel.app/",
    },
  ];
  return (
    <>
      <main className="w-full flex flex-col gap-6">
        <p className="text-center text-[18px] font-semibold">
            My Projects
        </p>
        <div className="w-full flex flex-col gap-3 items-center">
          {projects.map((pr, index) => {
            return (
              <div key={index} className=" flex flex-col gap-2 items-start justify-center p-3 max-w-[400px] flex-wrap">
                <header className="text-[14px] w-full">{pr.name}</header>
                <section className="text-[11px] w-full">{pr.description}</section>
                <article className="flex gap-3 w-full">
                  <Link
                    href={pr.gitlink}
                    target="_blank"
                    rel="noopener norefferer"
                    className="text-primary px-2 bg-[#f6df49] rounded-[5px] hover:text-[black] hover:bg-cardbg dark:bg-bg_dark dark:text-white"
                  >
                    Git
                  </Link>
                  <Link
                    href={pr.weblink}
                    target="_blank"
                    rel="noopener norefferer"
                    className="text-primary px-2 bg-[#f6df49] rounded-[5px] hover:text-[black] hover:bg-cardbg dark:bg-bg_dark dark:text-white"
                  >
                    Web
                  </Link>
                </article>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default MyProjects;
