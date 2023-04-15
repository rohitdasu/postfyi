import React from 'react';
import { PostInterface } from './Posts.interface';
import { IdenticonImg } from '../MinidentIcon';
import { motion } from 'framer-motion';

export const Post: React.FC<PostInterface> = ({ title, id }) => {
  return (
    <motion.div layout className="flex flex-col gap-2 border p-5 bg-gray-100">
      <div className="flex flex-row items-center gap-2">
        <IdenticonImg username={id} saturation={70} lightness={60} />
        <p className="truncate text-gray-500">message#{id}</p>
      </div>
      <p className="text-base font-medium text-gray-900 line-clamp-4">
        {title}
      </p>
    </motion.div>
  );
};
