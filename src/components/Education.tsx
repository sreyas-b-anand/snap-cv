function Education() {
  return (
    <>
      <main className="flex flex-col items-start gap-8 w-full  flex-wrap  text-text py-5">
        <div className="text-center font-semibold text-[18px] w-full text-accent flex items-center justify-center py-5">
          <p className="px-3 py-1 border max-w-[120px] text-center rounded-lg">
            Education
          </p>
        </div>
        <div className="flex justify-start   gap-6 items-start p-5  py-8 border w-full rounded-lg">
          {/*card*/}
          <div className="bg-black text-white   h-full flex items-center justify-center ">
            <p className="w-[60px] h-[60px] rounded-[50%] flex items-center justify-center">
              MEC
            </p>
          </div>
          <main className="flex flex-col text-[15px] gap-1">
            <header>Govt. Model Engineering College</header>
            <section className="text-[11px]">
              B. Tech in Computer Science and Business systems
            </section>
            <footer className="text-[13px]">2023-2027</footer>
          </main>
        </div>
      </main>
    </>
  );
}

export default Education;
