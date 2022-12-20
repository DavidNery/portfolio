import { Variants } from "framer-motion";

const DefaultVariants = {
  initial: {
    transform: 'translateY(50px)',
    opacity: 0
  },
  visible: {
    transform: 'translateY(0px)',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    }
  }
} as Variants;

export default DefaultVariants