import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}

const SkeletonLoader = React.memo<SkeletonLoaderProps>(function SkeletonLoader({ 
  className = '', 
  width = 'w-full', 
  height = 'h-4',
  rounded = false 
}) {
  const baseClasses = `bg-gray-200 animate-pulse ${width} ${height} ${rounded ? 'rounded-full' : 'rounded'}`;
  const finalClassName = `${baseClasses} ${className}`.trim();

  return <div className={finalClassName} />;
});

export default SkeletonLoader;