import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Check, X, Edit3, Trash2 } from 'lucide-react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [filter, setFilter] = useState('all');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('glassmorphism-todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('glassmorphism-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTodos([newTodo, ...todos]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditValue(text);
  };

  const saveEdit = () => {
    if (editValue.trim() !== '') {
      setTodos(todos.map(todo =>
        todo.id === editingId ? { ...todo, text: editValue.trim() } : todo
      ));
    }
    setEditingId(null);
    setEditValue('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.3 }
    }
  };

  const filterButtonVariants = {
    inactive: { scale: 1, opacity: 0.7 },
    active: {
      scale: 1.05,
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      className="max-w-md mx-auto p-6 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        variants={itemVariants}
      >
        <h1 className="text-3xl font-bold text-white mb-2">
          Glass Todo
        </h1>
        <p className="text-white/70 text-sm">
          Organize your tasks beautifully
        </p>
      </motion.div>

      {/* Add Todo Input */}
      <motion.div
        className="glass-card p-4 mb-6"
        variants={itemVariants}
      >
        <div className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new task..."
            className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200"
          />
          <motion.button
            onClick={addTodo}
            className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl text-white shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Plus size={20} />
          </motion.button>
        </div>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="flex gap-2 mb-6 justify-center"
        variants={itemVariants}
      >
        {['all', 'active', 'completed'].map((filterType) => (
          <motion.button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filter === filterType
                ? 'bg-white/20 text-white border border-white/30'
                : 'bg-white/10 text-white/70 border border-white/10'
            }`}
            variants={filterButtonVariants}
            animate={filter === filterType ? 'active' : 'inactive'}
            whileTap={{ scale: 0.95 }}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Todo List */}
      <motion.div
        className="space-y-3"
        variants={itemVariants}
      >
        <AnimatePresence mode="popLayout">
          {filteredTodos.map((todo) => (
            <motion.div
              key={todo.id}
              className="glass-card p-4"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              layoutId={todo.id}
            >
              {editingId === todo.id ? (
                // Edit Mode
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
                    autoFocus
                  />
                  <motion.button
                    onClick={saveEdit}
                    className="p-2 text-green-400 hover:bg-green-400/20 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Check size={16} />
                  </motion.button>
                  <motion.button
                    onClick={cancelEdit}
                    className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={16} />
                  </motion.button>
                </div>
              ) : (
                // View Mode
                <div className="flex items-center gap-3">
                  <motion.button
                    onClick={() => toggleComplete(todo.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      todo.completed
                        ? 'bg-green-500 border-green-500'
                        : 'border-white/30 hover:border-white/50'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {todo.completed && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check size={14} className="text-white" />
                      </motion.div>
                    )}
                  </motion.button>
                  
                  <span
                    className={`flex-1 text-sm transition-all duration-200 ${
                      todo.completed
                        ? 'text-white/50 line-through'
                        : 'text-white'
                    }`}
                  >
                    {todo.text}
                  </span>
                  
                  <div className="flex gap-1">
                    <motion.button
                      onClick={() => startEdit(todo.id, todo.text)}
                      className="p-2 text-blue-400 hover:bg-blue-400/20 rounded-lg transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Edit3 size={14} />
                    </motion.button>
                    <motion.button
                      onClick={() => deleteTodo(todo.id)}
                      className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 size={14} />
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredTodos.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-6xl mb-4">📝</div>
          <p className="text-white/60 text-lg">
            {filter === 'all' && 'No tasks yet'}
            {filter === 'active' && 'No active tasks'}
            {filter === 'completed' && 'No completed tasks'}
          </p>
          <p className="text-white/40 text-sm mt-2">
            {filter === 'all' && 'Add a task to get started'}
            {filter === 'active' && 'All tasks are completed!'}
            {filter === 'completed' && 'Complete some tasks to see them here'}
          </p>
        </motion.div>
      )}

      {/* Stats */}
      {todos.length > 0 && (
        <motion.div
          className="glass-card p-4 mt-8 text-center"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex justify-around text-sm">
            <div>
              <div className="text-white font-semibold">{todos.length}</div>
              <div className="text-white/60">Total</div>
            </div>
            <div>
              <div className="text-green-400 font-semibold">
                {todos.filter(t => t.completed).length}
              </div>
              <div className="text-white/60">Completed</div>
            </div>
            <div>
              <div className="text-orange-400 font-semibold">
                {todos.filter(t => !t.completed).length}
              </div>
              <div className="text-white/60">Remaining</div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TodoApp;