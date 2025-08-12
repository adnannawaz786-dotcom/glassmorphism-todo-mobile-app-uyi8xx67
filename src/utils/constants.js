// Animation configurations
export const ANIMATIONS = {
  // Page transitions
  pageTransition: {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  },
  
  // Item animations
  listItem: {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
    transition: { duration: 0.3, ease: "easeOut" }
  },
  
  // Modal animations
  modal: {
    initial: { opacity: 0, scale: 0.9, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: 50 },
    transition: { duration: 0.3, ease: "easeOut" }
  },
  
  // Button press animation
  buttonTap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  },
  
  // Stagger children animation
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  // Floating animation
  floating: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Glassmorphism styles
export const GLASS_STYLES = {
  primary: "bg-white/10 backdrop-blur-md border border-white/20",
  secondary: "bg-white/5 backdrop-blur-sm border border-white/10",
  accent: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20",
  dark: "bg-black/10 backdrop-blur-md border border-white/10",
  input: "bg-white/5 backdrop-blur-sm border border-white/20 focus:border-white/40"
};

// Color themes
export const THEMES = {
  gradient: {
    primary: "bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600",
    secondary: "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600",
    accent: "bg-gradient-to-r from-cyan-500 to-purple-500"
  },
  colors: {
    primary: "#8B5CF6",
    secondary: "#EC4899",
    accent: "#06B6D4",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444"
  }
};

// Todo priorities
export const PRIORITIES = {
  LOW: {
    value: 'low',
    label: 'Low',
    color: 'text-green-400',
    bg: 'bg-green-500/20',
    border: 'border-green-500/30'
  },
  MEDIUM: {
    value: 'medium',
    label: 'Medium',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/20',
    border: 'border-yellow-500/30'
  },
  HIGH: {
    value: 'high',
    label: 'High',
    color: 'text-red-400',
    bg: 'bg-red-500/20',
    border: 'border-red-500/30'
  }
};

// Todo categories
export const CATEGORIES = {
  PERSONAL: {
    value: 'personal',
    label: 'Personal',
    icon: '👤',
    color: 'text-blue-400'
  },
  WORK: {
    value: 'work',
    label: 'Work',
    icon: '💼',
    color: 'text-purple-400'
  },
  SHOPPING: {
    value: 'shopping',
    label: 'Shopping',
    icon: '🛒',
    color: 'text-green-400'
  },
  HEALTH: {
    value: 'health',
    label: 'Health',
    icon: '🏥',
    color: 'text-red-400'
  },
  LEARNING: {
    value: 'learning',
    label: 'Learning',
    icon: '📚',
    color: 'text-yellow-400'
  },
  OTHER: {
    value: 'other',
    label: 'Other',
    icon: '📝',
    color: 'text-gray-400'
  }
};

// App configuration
export const APP_CONFIG = {
  name: 'GlassTodo',
  version: '1.0.0',
  maxTodos: 100,
  autoSave: true,
  autoSaveInterval: 5000, // 5 seconds
  defaultCategory: CATEGORIES.PERSONAL.value,
  defaultPriority: PRIORITIES.MEDIUM.value
};

// Local storage keys
export const STORAGE_KEYS = {
  todos: 'glasstodo_todos',
  settings: 'glasstodo_settings',
  theme: 'glasstodo_theme',
  lastBackup: 'glasstodo_last_backup'
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Touch gestures
export const GESTURES = {
  swipeThreshold: 50,
  tapThreshold: 10,
  longPressDelay: 500
};

// Notification messages
export const MESSAGES = {
  todoAdded: 'Todo added successfully! ✨',
  todoCompleted: 'Great job! Todo completed! 🎉',
  todoDeleted: 'Todo deleted successfully',
  todoUpdated: 'Todo updated successfully',
  allTodosCompleted: 'Congratulations! All todos completed! 🏆',
  noTodos: 'No todos yet. Add your first todo! 📝',
  error: 'Something went wrong. Please try again.',
  offline: 'You are currently offline',
  dataRestored: 'Data restored from backup'
};

// Default settings
export const DEFAULT_SETTINGS = {
  theme: 'gradient',
  animations: true,
  notifications: true,
  autoComplete: false,
  sortBy: 'created',
  sortOrder: 'desc',
  showCompleted: true,
  compactMode: false
};

// Sort options
export const SORT_OPTIONS = {
  CREATED: { value: 'created', label: 'Date Created' },
  UPDATED: { value: 'updated', label: 'Last Updated' },
  PRIORITY: { value: 'priority', label: 'Priority' },
  ALPHABETICAL: { value: 'title', label: 'Alphabetical' },
  CATEGORY: { value: 'category', label: 'Category' }
};

// Filter options
export const FILTER_OPTIONS = {
  ALL: { value: 'all', label: 'All Todos' },
  ACTIVE: { value: 'active', label: 'Active' },
  COMPLETED: { value: 'completed', label: 'Completed' },
  TODAY: { value: 'today', label: 'Due Today' },
  OVERDUE: { value: 'overdue', label: 'Overdue' }
};