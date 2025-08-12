// Animation variants and configurations for Framer Motion

export const containerVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

export const itemVariants = {
  hidden: { 
    opacity: 0,
    x: -20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    x: 20,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

export const todoItemVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  },
  exit: {
    opacity: 0,
    x: -100,
    scale: 0.8,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  },
  completed: {
    scale: 0.98,
    opacity: 0.7,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export const buttonVariants = {
  initial: { scale: 1 },
  tap: { 
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeInOut"
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

export const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0
  })
};

export const fabVariants = {
  initial: { 
    scale: 1,
    rotate: 0
  },
  tap: { 
    scale: 0.9,
    transition: {
      duration: 0.1
    }
  },
  hover: {
    scale: 1.1,
    rotate: 90,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export const checkboxVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

export const swipeVariants = {
  initial: { x: 0 },
  swipeLeft: {
    x: -100,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  swipeRight: {
    x: 100,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  snapBack: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30
    }
  }
};

export const progressVariants = {
  initial: { width: "0%" },
  animate: (progress) => ({
    width: `${progress}%`,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export const pulseVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

// Transition configurations
export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

export const smoothTransition = {
  duration: 0.3,
  ease: "easeInOut"
};

export const quickTransition = {
  duration: 0.15,
  ease: "easeOut"
};

export const slowTransition = {
  duration: 0.6,
  ease: "easeInOut"
};

// Gesture configurations
export const swipeGesture = {
  drag: "x",
  dragConstraints: { left: -200, right: 200 },
  dragElastic: 0.2
};

export const verticalSwipeGesture = {
  drag: "y",
  dragConstraints: { top: -100, bottom: 100 },
  dragElastic: 0.1
};