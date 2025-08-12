import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, X, Edit3, Trash2 } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      layout
      className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 mb-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/15"
    >
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onToggle(todo.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            todo.completed
              ? 'bg-gradient-to-r from-green-400 to-emerald-500 border-green-400 shadow-lg shadow-green-400/30'
              : 'border-white/40 hover:border-white/60 hover:bg-white/10'
          }`}
        >
          {todo.completed && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Check size={14} className="text-white" />
            </motion.div>
          )}
        </motion.button>

        {/* Todo Text */}
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyPress}
              onBlur={handleEdit}
              autoFocus
              className="w-full bg-transparent text-white placeholder-white/50 border-none outline-none text-base font-medium"
              placeholder="Enter todo text..."
            />
          ) : (
            <motion.p
              layout
              className={`text-white text-base font-medium transition-all duration-300 ${
                todo.completed 
                  ? 'line-through opacity-60' 
                  : 'opacity-90'
              }`}
            >
              {todo.text}
            </motion.p>
          )}
          
          {todo.createdAt && (
            <p className="text-white/40 text-xs mt-1">
              {new Date(todo.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {isEditing ? (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleEdit}
                className="p-2 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 transition-colors duration-200"
              >
                <Check size={14} className="text-green-300" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCancel}
                className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 transition-colors duration-200"
              >
                <X size={14} className="text-red-300" />
              </motion.button>
            </>
          ) : (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsEditing(true)}
                className="p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 transition-colors duration-200"
              >
                <Edit3 size={14} className="text-blue-300" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onDelete(todo.id)}
                className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 transition-colors duration-200"
              >
                <Trash2 size={14} className="text-red-300" />
              </motion.button>
            </>
          )}
        </div>
      </div>

      {/* Priority Indicator */}
      {todo.priority && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
            todo.priority === 'high' 
              ? 'bg-red-400 shadow-lg shadow-red-400/50' 
              : todo.priority === 'medium'
              ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50'
              : 'bg-green-400 shadow-lg shadow-green-400/50'
          }`}
        />
      )}

      {/* Completion Animation Overlay */}
      {todo.completed && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-500/10 rounded-2xl pointer-events-none"
          style={{ originX: 0 }}
        />
      )}
    </motion.div>
  );
};

export default TodoItem;