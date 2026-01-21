"use client";
import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="relative text-xs tracking-widest font-primary uppercase hover:text-black font-semi-bold"
    >
      {label}
    </Link>
  );
}
