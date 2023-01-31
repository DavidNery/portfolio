import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Project as ProjectType } from "../src/projects";
import DefaultVariants from "../utils/default_variants";

interface Props { project: ProjectType };

const Project = ({ project }: Props) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen(current => !current);
  }, []);

  return (
    <motion.section variants={DefaultVariants} className='mt-12 first-of-type:mt-0'>
      <div className="flex justify-between items-center gap-3 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm mb-2 py-4 sticky top-0 cursor-pointer" onClick={toggleOpen}>
        <div>
          <h5 className="text-[var(--primary-color)] text-[0.95rem] font-bold leading-tight">
            {project.title}
          </h5>
          <p className="text-[var(--gray)] text-[0.8rem]">{project.description}</p>
        </div>
        <div className="flex gap-2 items-center">
          {
            project.links?.github && (
              <a href={project.links.github} target='_blank' rel="noreferrer" className="text-[var(--primary-color)] hover:text-white transition-colors">
                <svg width="28" height="28" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.10121 19.4043C8.10121 19.502 7.98891 19.5801 7.8473 19.5801C7.68617 19.5947 7.57387 19.5166 7.57387 19.4043C7.57387 19.3066 7.68617 19.2285 7.82777 19.2285C7.97426 19.2139 8.10121 19.292 8.10121 19.4043ZM6.58266 19.1846C6.54848 19.2822 6.64613 19.3945 6.79262 19.4238C6.91957 19.4727 7.06605 19.4238 7.09535 19.3262C7.12465 19.2285 7.03187 19.1162 6.88539 19.0723C6.75844 19.0381 6.61684 19.0869 6.58266 19.1846ZM8.74086 19.1016C8.59926 19.1357 8.5016 19.2285 8.51625 19.3408C8.5309 19.4385 8.65785 19.502 8.80434 19.4678C8.94594 19.4336 9.04359 19.3408 9.02894 19.2432C9.0143 19.1504 8.88246 19.0869 8.74086 19.1016ZM11.9537 0.390625C5.18129 0.390625 0.000624657 5.53223 0.000624657 12.3047C0.000624657 17.7197 3.40883 22.3535 8.27699 23.9844C8.90199 24.0967 9.12172 23.7109 9.12172 23.3936C9.12172 23.0908 9.10707 21.4209 9.10707 20.3955C9.10707 20.3955 5.6891 21.1279 4.97133 18.9404C4.97133 18.9404 4.41469 17.5195 3.61391 17.1533C3.61391 17.1533 2.49574 16.3867 3.69203 16.4014C3.69203 16.4014 4.90785 16.499 5.5768 17.6611C6.64613 19.5459 8.43812 19.0039 9.13637 18.6816C9.24867 17.9004 9.56605 17.3584 9.91762 17.0361C7.18812 16.7334 4.43422 16.3379 4.43422 11.6406C4.43422 10.2979 4.80531 9.62402 5.58656 8.76465C5.45961 8.44727 5.04457 7.13867 5.71352 5.44922C6.73402 5.13184 9.08266 6.76758 9.08266 6.76758C10.0592 6.49414 11.109 6.35254 12.1491 6.35254C13.1891 6.35254 14.2389 6.49414 15.2155 6.76758C15.2155 6.76758 17.5641 5.12695 18.5846 5.44922C19.2536 7.14355 18.8385 8.44727 18.7116 8.76465C19.4928 9.62891 19.9713 10.3027 19.9713 11.6406C19.9713 16.3525 17.0954 16.7285 14.3659 17.0361C14.8151 17.4219 15.1959 18.1543 15.1959 19.3018C15.1959 20.9473 15.1813 22.9834 15.1813 23.3838C15.1813 23.7012 15.4059 24.0869 16.026 23.9746C20.9088 22.3535 24.2194 17.7197 24.2194 12.3047C24.2194 5.53223 18.7262 0.390625 11.9537 0.390625ZM4.74672 17.2314C4.68324 17.2803 4.69789 17.3926 4.7809 17.4854C4.85902 17.5635 4.97133 17.5977 5.0348 17.5342C5.09828 17.4854 5.08363 17.373 5.00062 17.2803C4.9225 17.2021 4.81019 17.168 4.74672 17.2314ZM4.21937 16.8359C4.1852 16.8994 4.23402 16.9775 4.33168 17.0264C4.4098 17.0752 4.50746 17.0605 4.54164 16.9922C4.57582 16.9287 4.52699 16.8506 4.42934 16.8018C4.33168 16.7725 4.25355 16.7871 4.21937 16.8359ZM5.80141 18.5742C5.72328 18.6377 5.75258 18.7842 5.86488 18.877C5.97719 18.9893 6.11879 19.0039 6.18227 18.9258C6.24574 18.8623 6.21645 18.7158 6.11879 18.623C6.01137 18.5107 5.86488 18.4961 5.80141 18.5742ZM5.24477 17.8564C5.16664 17.9053 5.16664 18.0322 5.24477 18.1445C5.32289 18.2568 5.45473 18.3057 5.5182 18.2568C5.59633 18.1934 5.59633 18.0664 5.5182 17.9541C5.44984 17.8418 5.32289 17.793 5.24477 17.8564Z" />
                </svg>
              </a>
            )
          }
          {
            project.links?.site && (
              <a href={project.links.site} target='_blank' rel="noreferrer" className="text-[var(--primary-color)] hover:text-white transition-colors">
                <svg width="28" height="28" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.1875 12.5C17.1875 13.584 17.1289 14.6289 17.0264 15.625H7.97363C7.86621 14.6289 7.8125 13.584 7.8125 12.5C7.8125 11.416 7.87109 10.3711 7.97363 9.375H17.0264C17.1338 10.3711 17.1875 11.416 17.1875 12.5V12.5ZM18.5937 9.375H24.6045C24.8633 10.376 25 11.4209 25 12.5C25 13.5791 24.8633 14.624 24.6045 15.625H18.5937C18.6963 14.6191 18.75 13.5742 18.75 12.5C18.75 11.4258 18.6963 10.3809 18.5937 9.375ZM24.0918 7.8125H18.3936C17.9053 4.69238 16.9385 2.08008 15.6934 0.410156C19.5166 1.4209 22.627 4.19434 24.0869 7.8125H24.0918ZM16.8115 7.8125H8.18848C8.48633 6.03516 8.94531 4.46289 9.50684 3.18848C10.0195 2.03613 10.5908 1.20117 11.1426 0.673828C11.6895 0.15625 12.1436 0 12.5 0C12.8564 0 13.3105 0.15625 13.8574 0.673828C14.4092 1.20117 14.9805 2.03613 15.4932 3.18848C16.0596 4.45801 16.5186 6.03027 16.8115 7.8125V7.8125ZM6.60645 7.8125H0.908203C2.37305 4.19434 5.47852 1.4209 9.30664 0.410156C8.06152 2.08008 7.09473 4.69238 6.60645 7.8125V7.8125ZM0.395508 9.375H6.40625C6.30371 10.3809 6.25 11.4258 6.25 12.5C6.25 13.5742 6.30371 14.6191 6.40625 15.625H0.395508C0.136719 14.624 0 13.5791 0 12.5C0 11.4209 0.136719 10.376 0.395508 9.375ZM9.50684 21.8066C8.94043 20.5371 8.48633 18.9648 8.18848 17.1875H16.8115C16.5137 18.9648 16.0547 20.5371 15.4932 21.8066C14.9805 22.959 14.4092 23.7939 13.8574 24.3213C13.3105 24.8438 12.8564 25 12.5 25C12.1436 25 11.6895 24.8438 11.1426 24.3262C10.5908 23.7988 10.0195 22.9639 9.50684 21.8115V21.8066ZM6.60645 17.1875C7.09473 20.3076 8.06152 22.9199 9.30664 24.5898C5.47852 23.5791 2.37305 20.8057 0.908203 17.1875H6.60645ZM24.0918 17.1875C22.627 20.8057 19.5215 23.5791 15.6982 24.5898C16.9434 22.9199 17.9053 20.3076 18.3984 17.1875H24.0918V17.1875Z" />
                </svg>
              </a>
            )
          }
          {
            isOpen ? (
              <svg className="text-white transition-transform rotate-180" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            ) : (
              <svg className="text-white transition-transform" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            )
          }
        </div>
      </div>
      <AnimatePresence>
        {
          isOpen && <div className="xl:columns-2 gap-8">
            {
              project.images.map((image, i2) => {
                return <div key={i2} className="w-full text-center xl:text-left rounded-2xl overflow-hidden mb-8">
                  {
                    image.endsWith('.mp4') ? (
                      <video className="inline-block" src={image} autoPlay={false} controls={true}></video>
                    ) : (
                      <img className="inline-block" src={image} alt={image} loading='lazy' />
                    )
                  }
                </div>
              })
            }
          </div>
        }
      </AnimatePresence>
    </motion.section>
  );
};

export default Project;