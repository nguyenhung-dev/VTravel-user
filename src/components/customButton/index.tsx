'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

interface ICustomButtonProps {
  text: string;
  asLink?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  padding?: string;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  text,
  asLink = false,
  href = "#",
  onClick,
  className,
  bgColor = "bg-blue-500",
  textColor = "text-white",
  borderColor = "border-transparent",
  padding = "px-4 py-2",
}) => {
  const baseClass = cn(
    "rounded-lg border font-medium transition-colors duration-200 hover:opacity-90",
    bgColor,
    textColor,
    borderColor,
    padding,
    className
  );

  if (asLink) {
    return (
      <Link href={href}>
        <span className={baseClass}>{text}</span>
      </Link>
    );
  }

  return (
    <Button onClick={onClick} className={baseClass}>
      {text}
    </Button>
  );
};

export default CustomButton;
