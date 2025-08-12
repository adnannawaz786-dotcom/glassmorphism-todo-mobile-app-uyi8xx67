import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const GlassCard = forwardRef(({ 
  children, 
  className = '', 
  blur = 'backdrop-blur-md',
  opacity = 'bg-white/10',
  border = 'border border-white/20',
  shadow = 'shadow-xl',
  rounded = 'rounded-2xl',
  ...props 
}, ref) => {
  return (
    <motion.div
      ref={ref}
      className={`
        ${blur}
        ${opacity}
        ${border}
        ${shadow}
        ${rounded}
        relative
        overflow-hidden
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
});

GlassCard.displayName = 'GlassCard';

export default GlassCard;