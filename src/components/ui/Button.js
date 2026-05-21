import Link from "next/link";
import "./Button.css";

export default function Button({
  children,
  href,
  variant = "primary", // primary, secondary, ghost
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const baseClassName = `btn btn--${variant} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
