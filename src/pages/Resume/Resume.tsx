import { certifications } from "./ResumeData";
import { motion } from "framer-motion";
import experience from "./experience.json"
import education from "./education.json"

export default function Resume() {
  const experienceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const educationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div>
      <section className="mt-10 flex justify-center">
        <h2 className="text-darkHeadingColor text-3xl">
          Resume
        </h2>
      </section>
      <section className="flex-row-reverse lg:flex lg:justify-center gap-[8rem]">
      <motion.div
          className="lg:w-[29rem] space-y-7"
          initial="hidden"
          animate="visible"
          variants={experienceVariants}
        >
          <h3 className="text-darkHeadingColor text-center text-2xl font-bold p-5">Experience</h3>
          {experience.map((exp, index) => {
          return (
            <div className="" key={index}>
              <div className="px-5 py-3 text-textColor bg-[#e5e8f3] rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#dee1ec] hover:cursor-pointer hover:shadow-xl
              hover:transform hover:translate-x-2">
                <div className="flex justify-between">
                  <div className="">
                    <p className="text-xl font-semibold">
                      {/* <span>Icon</span> */}
                      {exp.company_name}
                    </p>
                    <p>{exp.job_title}</p>
                  </div>
                  <div className="">
                    <p className="text-sm">{exp.date}</p>
                  </div>
                </div>
                <p><span className="font-semibold" >Tech Stack :-</span> {exp.tech_stack}</p>
              </div>
              {/* <div className="w-10 h-20">
                <img src={exp.logo} alt="" />
              </div> */}
          </div>
            );
          })}
          </motion.div>
          <motion.div
          className="lg:w-[29rem] space-y-7"
          initial="hidden"
          animate="visible"
          variants={educationVariants}
        >
          <div className="">
            <h3 className="text-darkHeadingColor text-center text-2xl font-bold p-5">Education </h3>
            {education.map((edu, index)=>{
              return (
              <div key={index} className="px-5 py-3 mb-5 text-textColor bg-[#e5e8f3] rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#dee1ec] hover:cursor-pointer hover:shadow-xl
              hover:transform hover:translate-x-2">
                <div className="flex justify-evenly">
                  <div className="pr-4">
                    <img src={edu.logo} className="h-16 w-32" alt="" />
                  </div>
                  <div>
                   <p className="text-sm">{edu.date}</p>
                    <p className="text-xl font-semibold">
                      {/* <span>Icon</span> */}
                      {edu.degree}
                    </p>
                    <p>{edu.college}</p>
                    <p>{edu.cgpa}</p>
                  </div>
                </div>
              </div>
              );
            })}
            
          </div>
          </motion.div>
      </section>
      <section>
        <p className="text-darkHeadingColor text-center text-2xl font-bold p-5">
          Certifications
        </p>
        <div className="flex flex-wrap justify-between flex-grow">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="w-[24rem] py-4"
            >
              <motion.div
                className="rounded-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.1)",
                }}
              >
                <a href={certification.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="max-w-full"
                  />
                  <p className="p-2 text-darkHeadingColor font-medium text-center">
                    {certification.title}
                  </p>
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
