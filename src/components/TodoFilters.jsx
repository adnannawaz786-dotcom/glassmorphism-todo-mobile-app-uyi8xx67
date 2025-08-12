import React from 'react';
import { motion } from 'framer-motion';

const TodoFilters = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All', icon: '📋' },
    { id: 'active', label: 'Active', icon: '⏳' },
    { id: 'completed', label: 'Done', icon: '✅' }
  ];

  return (
    <motion.div 
      className="flex justify-center gap-2 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`
            relative px-6 py-3 rounded-2xl backdrop-blur-md border transition-all duration-300
            ${currentFilter === filter.id 
              ? 'bg-white/30 border-white/40 shadow-lg' 
              : 'bg-white/10 border-white/20 hover:bg-white/20'
            }
          `}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: 'rgba(255, 255, 255, 0.25)'
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.2,
            delay: filters.indexOf(filter) * 0.1
          }}
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">{filter.icon}</span>
            <span className={`
              text-sm font-medium transition-colors duration-200
              ${currentFilter === filter.id 
                ? 'text-white' 
                : 'text-white/80'
              }
            `}>
              {filter.label}
            </span>
          </div>
          
          {currentFilter === filter.id && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 -z-10"
              layoutId="activeFilter"
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default TodoFilters;