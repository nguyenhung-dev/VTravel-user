'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

interface IProps {
  children?: React.ReactNode;
  asLink?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const CustomButton: React.FC<IProps> = ({
  children,
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
        <span className={baseClass}>{children}</span>
      </Link>
    );
  }

  return (
    <Button onClick={onClick} className={baseClass}>
      {children}
    </Button>
  );
};

export default CustomButton;
