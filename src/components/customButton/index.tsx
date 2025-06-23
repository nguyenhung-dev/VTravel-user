'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  asLink?: boolean;
  href?: string;
  className?: string;
}

const CustomButton: React.FC<IProps> = ({
  children,
  asLink = false,
  href = "#",
  className,
  ...rest
}) => {
  const baseClass = cn(className);

  if (asLink) {
    return (
      <Link href={href}>
        <span className={baseClass}>{children}</span>
      </Link>
    );
  }

  return (
    <Button className={baseClass} {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;
