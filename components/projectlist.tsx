import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { ProjectListType } from "../src/projects";
import DefaultVariants from "../utils/default_variants";
import Project from "./project";

interface Props { project: ProjectListType };

const ProjectList = ({ project }: Props) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen(current => !current);
  }, []);

  return (
    <motion.div
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
      <div className="cursor-pointer flex items-center justify-between text-white" onClick={toggleOpen}>
        <div>
          <h3 className="text-2xl font-medium">{project.title}</h3>
          <h4 className="text-[var(--gray)] text-base leading-relaxed">{project.description}</h4>
        </div>
        {
          isOpen ? (
            <svg className="transition-transform rotate-180" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          ) : (
            <svg className="transition-transform" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          )
        }
      </div>
      <AnimatePresence>
        {
          isOpen && project.projects.map((project, i) => <Project project={project} key={i}/>)
        }
      </AnimatePresence>
      <div className="divider"></div>
    </motion.div>
  );
};

export default ProjectList;