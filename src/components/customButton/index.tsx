'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

interface IProps {
  text: string;
  asLink?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const CustomButton: React.FC<IProps> = ({
  text,
  asLink = false,
  href = "#",
  onClick,
  className,
}) => {
  const baseClass = cn(
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
