import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({children, className = ""}) => (
  <div
    className={`container  mx-auto max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-7xl ${className}`}
  >
    {children}
  </div>
);
