import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "light" | "ghost" | "ghostLight" | "gold";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  download?: string | boolean;
  target?: string;
  rel?: string;
};

const styles = {
  primary: "bg-forest text-cream hover:bg-charcoal",
  light: "bg-cream text-charcoal hover:bg-ivory",
  ghost: "border border-ivory text-charcoal hover:border-gold",
  ghostLight: "border border-cream/40 text-cream hover:border-gold hover:text-gold",
  gold: "bg-gold text-charcoal hover:brightness-110",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
  download,
  target,
  rel,
}: Props) {
  const cn = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition",
    styles[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={cn} download={download} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cn} onClick={onClick}>
      {children}
    </button>
  );
}
