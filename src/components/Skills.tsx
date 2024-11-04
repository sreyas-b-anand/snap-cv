const Skills = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Material-UI",
    "Chakra UI",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "Python",
    "C++",
    "Java",
  ];

  return (
    <div className="py-5 flex items-center justify-center gap-9 flex-col flex-wrap text-text">
      <header className="flex flex-col gap-4">
        <div className="text-center text-[18px] font-semibold w-full text-accent flex items-center justify-center py-5">
          <p className="px-3 py-1 border max-w-[140px] text-center rounded-lg">
            Skills
          </p>
        </div>
        <main className="flex items-start justify-start gap-3 flex-wrap w-full">
          {skills.map((sk, index) => {
            return (
              <div
                className=" rounded-xl p-2 text-[10px] bg-gray-300 text-text hover:text-white hover:cursor-pointer hover:bg-gray-500"
                key={index}
              >
                {sk}
              </div>
            );
          })}
        </main>
      </header>
    </div>
  );
};

export default Skills;
