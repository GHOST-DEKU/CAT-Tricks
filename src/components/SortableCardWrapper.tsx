
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';

interface Props {
  id: string;
  disabled: boolean;
  children: React.ReactNode;
}

const SortableCardWrapper: React.FC<Props> = ({ id, disabled, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id, disabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 0 : 'auto',
    opacity: isDragging ? 0 : 1,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      {...attributes} 
      {...listeners}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isDragging ? 0 : 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: isDragging ? 0 : 0.2 }}
        style={{ height: '100%' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SortableCardWrapper;
