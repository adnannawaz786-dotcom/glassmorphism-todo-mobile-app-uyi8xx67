import { useState, useRef, useEffect } from 'react';

export const useSwipeGestures = ({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
  preventDefaultTouchmoveEvent = false,
  delta = 10
}) => {
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  const handlers = {
    onTouchStart: (e) => {
      touchStartX.current = e.targetTouches[0].clientX;
      touchStartY.current = e.targetTouches[0].clientY;
      setIsSwiping(true);
      setSwipeDirection(null);
    },

    onTouchMove: (e) => {
      if (preventDefaultTouchmoveEvent) {
        e.preventDefault();
      }
      
      touchEndX.current = e.targetTouches[0].clientX;
      touchEndY.current = e.targetTouches[0].clientY;

      const deltaX = touchEndX.current - touchStartX.current;
      const deltaY = touchEndY.current - touchStartY.current;

      // Determine swipe direction during movement
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > delta) {
          setSwipeDirection('right');
        } else if (deltaX < -delta) {
          setSwipeDirection('left');
        }
      } else {
        if (deltaY > delta) {
          setSwipeDirection('down');
        } else if (deltaY < -delta) {
          setSwipeDirection('up');
        }
      }
    },

    onTouchEnd: () => {
      if (!isSwiping) return;

      const deltaX = touchEndX.current - touchStartX.current;
      const deltaY = touchEndY.current - touchStartY.current;

      // Check if swipe distance meets threshold
      if (Math.abs(deltaX) < threshold && Math.abs(deltaY) < threshold) {
        setIsSwiping(false);
        setSwipeDirection(null);
        return;
      }

      // Determine primary swipe direction
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > threshold && onSwipeRight) {
          onSwipeRight({ deltaX, deltaY, direction: 'right' });
        } else if (deltaX < -threshold && onSwipeLeft) {
          onSwipeLeft({ deltaX, deltaY, direction: 'left' });
        }
      } else {
        // Vertical swipe
        if (deltaY > threshold && onSwipeDown) {
          onSwipeDown({ deltaX, deltaY, direction: 'down' });
        } else if (deltaY < -threshold && onSwipeUp) {
          onSwipeUp({ deltaX, deltaY, direction: 'up' });
        }
      }

      setIsSwiping(false);
      setSwipeDirection(null);
    },

    onTouchCancel: () => {
      setIsSwiping(false);
      setSwipeDirection(null);
    }
  };

  return {
    handlers,
    isSwiping,
    swipeDirection
  };
};

export const useSwipeToDelete = (onDelete, threshold = 100) => {
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const swipeGestures = useSwipeGestures({
    onSwipeLeft: ({ deltaX }) => {
      const offset = Math.min(Math.abs(deltaX), threshold);
      setSwipeOffset(offset);
      
      if (offset >= threshold) {
        setIsDeleting(true);
        setTimeout(() => {
          onDelete();
          setSwipeOffset(0);
          setIsDeleting(false);
        }, 200);
      } else {
        // Reset if threshold not met
        setTimeout(() => setSwipeOffset(0), 200);
      }
    },
    threshold: 20 // Lower threshold for more responsive feedback
  });

  return {
    ...swipeGestures,
    swipeOffset,
    isDeleting,
    resetSwipe: () => {
      setSwipeOffset(0);
      setIsDeleting(false);
    }
  };
};

export const useSwipeToComplete = (onComplete, threshold = 80) => {
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);

  const swipeGestures = useSwipeGestures({
    onSwipeRight: ({ deltaX }) => {
      const offset = Math.min(deltaX, threshold);
      setSwipeOffset(offset);
      
      if (offset >= threshold) {
        setIsCompleting(true);
        setTimeout(() => {
          onComplete();
          setSwipeOffset(0);
          setIsCompleting(false);
        }, 200);
      } else {
        // Reset if threshold not met
        setTimeout(() => setSwipeOffset(0), 200);
      }
    },
    threshold: 20 // Lower threshold for more responsive feedback
  });

  return {
    ...swipeGestures,
    swipeOffset,
    isCompleting,
    resetSwipe: () => {
      setSwipeOffset(0);
      setIsCompleting(false);
    }
  };
};