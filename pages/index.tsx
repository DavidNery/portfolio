import { motion } from 'framer-motion';
import Link from 'next/link';
import Typed from 'react-typed';
import DefaultVariants from '../utils/default_variants';

export default function Home() {
  return (
    <>
      <main className='min-h-[100vh] flex items-center justify-center flex-col'>
        <motion.div
          className='text-center'
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
          <motion.h2 variants={DefaultVariants} className='text-6xl xl:text-7xl uppercase font-bold text-white mb-6'>
            Dery
            <span className="text-[var(--primary-color)]"> Developer</span>
          </motion.h2>
          <motion.h5 variants={DefaultVariants} className="text-2xl text-white font-medium text-[var(--gray)] mb-8">
            <Typed
              strings={['Web', 'Frontend', 'Backend', 'Flutter', 'Minecraft Plugin']}
              startDelay={200}
              typeSpeed={80}
              backSpeed={50}
              backDelay={2000}
              loop
              showCursor={false}
              className='text-white'
            />
            {" Developer"}
          </motion.h5>
          <motion.div variants={DefaultVariants}>
            <Link href='/about' className='button'>Check my skills!</Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}
