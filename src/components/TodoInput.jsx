import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const TodoInput = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue('');
      setIsExpanded(false);
    }
  };

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    if (!inputValue.trim()) {
      setIsExpanded(false);
    }
  };

  return (
    <motion.div
      className="sticky top-0 z-20 p-4 mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="relative"
        layout
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 shadow-xl overflow-hidden"
          animate={{
            scale: isExpanded ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center p-3">
            <motion.div
              className="flex-1 relative"
              layout
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Add a new todo..."
                className="w-full bg-transparent text-white placeholder-white/60 text-lg font-medium outline-none py-2 px-3 rounded-xl transition-all duration-200"
                style={{
                  fontSize: '16px', // Prevents zoom on iOS
                }}
              />
              
              {/* Animated underline */}
              <motion.div
                className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={!inputValue.trim()}
              className="ml-3 p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                opacity: inputValue.trim() ? 1 : 0.6,
                scale: inputValue.trim() ? 1 : 0.9,
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Plus size={20} />
              </motion.div>
            </motion.button>
          </div>

          {/* Expanded area for additional options */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">
              <div className="flex gap-2 text-sm text-white/70">
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/20"
                >
                  Press Enter to add
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating particles effect */}
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full opacity-60"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-40"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.form>
    </motion.div>
  );
};

export default TodoInput;