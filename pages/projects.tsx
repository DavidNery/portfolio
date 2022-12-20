import { motion } from "framer-motion";
import ProjectList from "../src/projects";
import DefaultVariants from "../utils/default_variants";

export default function Projects() {
  return (
    <motion.main
      className='p-[8rem_20%]'
      initial="initial"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          }
        }
      }}
    >
      <motion.div className="text-center mb-10" variants={DefaultVariants}>
        <h1 className="inline-block text-white text-4xl font-bold text-center border-b-[var(--primary-color)] border-b-8 border-">Here you can find my projects</h1>
      </motion.div>
      <motion.div variants={DefaultVariants}>
        {
          ProjectList.map((project, index) => {
            return <motion.div
              key={index}
              initial="initial"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  }
                }
              }}
            >
              <h3 className="text-white text-2xl font-medium">{project.title}</h3>
              <h4 className="text-[var(--gray)] text-base leading-relaxed">{project.description}</h4>
              {
                project.projects.map((project, i) => {
                  return <motion.section variants={DefaultVariants} key={i} className='mt-12 first-of-type:mt-0'>
                    <div className="bg-[rgba(0,0,0,0.5)] backdrop-blur-sm mb-2 py-4 sticky top-0">
                      <h5 className="text-[var(--primary-color)] text-[0.95rem] text-center font-bold leading-tightng-">
                        {project.title}
                      </h5>
                      <p className="text-[var(--gray)] text-center text-[0.8rem]">{project.description}</p>
                    </div>
                    <div className="columns-2 gap-8">
                      {
                        project.images.map((image, i2) => {
                          return <div key={i2} className="w-full rounded-2xl overflow-hidden mb-8">
                            <img src={image} alt={image} />
                          </div>
                        })
                      }
                    </div>
                  </motion.section>
                })
              }
              <div className="divider"></div>
            </motion.div>
          })
        }
      </motion.div>
    </motion.main>
  );
};