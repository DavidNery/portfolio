import { motion } from "framer-motion";
import ProjectList from "../components/projectlist";
import { default as Categories } from "../src/projects";
import DefaultVariants from "../utils/default_variants";

export default function Projects() {
  return (
    <motion.main
      className='p-[8rem_8%] xl:p-[8rem_20%]'
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
          Categories.map((project, index) => <ProjectList project={project} key={index}/>)
        }
      </motion.div>
    </motion.main>
  );
};