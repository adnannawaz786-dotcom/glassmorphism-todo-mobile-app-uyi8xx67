import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Search, Bell } from 'lucide-react';

const MobileHeader = ({ onMenuToggle, onSearchToggle }) => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 safe-area-top"
    >
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left Section - Menu */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={onMenuToggle}
            className="p-2 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg active:bg-white/20 transition-all duration-200"
          >
            <Menu size={20} className="text-white" />
          </motion.button>

          {/* Center Section - Title */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-1 text-center"
          >
            <h1 className="text-lg font-bold text-white drop-shadow-lg">
              My Tasks
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-1"
            />
          </motion.div>

          {/* Right Section - Actions */}
          <div className="flex items-center space-x-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={onSearchToggle}
              className="p-2 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg active:bg-white/20 transition-all duration-200"
            >
              <Search size={18} className="text-white" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg active:bg-white/20 transition-all duration-200 relative"
            >
              <Bell size={18} className="text-white" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full border border-white/30"
              />
            </motion.button>
          </div>
        </div>

        {/* Subtle bottom glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </div>
    </motion.header>
  );
};

export default MobileHeader;