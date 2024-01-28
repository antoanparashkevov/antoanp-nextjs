import React from "react";

const Circle: React.FC<{ className?: string }> = ({ className }) => {

  return (
    <span className={`inline-block w-[10px] h-[10px] bg-main rounded-full ${className || ''}`}/>
  );
};

export default Circle;