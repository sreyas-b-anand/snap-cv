
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
    <div className="flex items-center justify-center gap-9 flex-col flex-wrap">
      <header className="flex flex-col gap-4">
        <p className="text-[18px] font-semibold text-center p-4">Skills</p>
      <main className="flex items-start justify-start gap-3 flex-wrap w-full">
        {skills.map((sk, index) => {
          return <div className=" rounded-xl p-2 text-[10px] bg-gray-500 text-white " key={index}>{sk}</div>;
        })}
      </main>
      </header>
      
    </div>
  );
};

export default Skills;
