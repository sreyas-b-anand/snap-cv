import Image from "next/image";

const Home = () => {
  return (
    <>
      <main className="flex flex-wrap">
        <div className="flex items-start gap-6 flex-col flex-wrap">
          <header>
            <Image className="rounded-full " width={100} height={100} src={'/photo.jpg'} alt="" />
          </header>
          <section className="font-bold text-[22px]">Sreyas B Anand</section>
          <article className="font-medium text-[16px]">Frontend Developer</article>
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
