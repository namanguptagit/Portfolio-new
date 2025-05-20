const journey = [
  {
    years: "March,2023 - March,2025",
    role: "Software Engineer",
    institution: "Unirac Solar India LLP",
  },
  {
    years: "Aug,2022 - March,2023",
    role: "Web Developer & Designer",
    institution: "XYZ Technologies",
  },
  {
    years: "2018 - 2020",
    role: "Web Developer & Designer",
    institution: "E-cell, Kiet Group of Institutions",
  },
  {
    years: "2018 - 2020",
    role: "B.tech in CSE - Student",
    institution: "Kiet Group of Institutions",
  },
]
const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {
        journey.map((item, index) => {
          const { institution, role, years } = item;
          return (
            <div key={index} className="flex items-center gap-12 w-full">
              <div className="flex flex-col items-center justify-center w-max">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <div className="w-[1px] h-[180px] bg-white/10">
                </div>
             </div>
              <div className="max-w-[500px]">
                <p className="mb-6 text-lg text-white/50">{years}</p>
                <h4 className="h4 mb-2">{role}</h4>
                <p className="text-lg text/white/50">{institution}</p>
             </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default Journey