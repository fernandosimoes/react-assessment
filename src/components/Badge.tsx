interface IBadgeProps {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "default" | "bordered" | "rounded";
  children: React.ReactNode;
}

const Badge = ({ size = "xs", variant = "default", children }: IBadgeProps) => {
  const baseClasses = `text-${size} font-medium me-2 px-2.5 py-0.5`;
  const bgClasses = `bg-blue-100 text-blue-800`;
  const borderClasses =
    variant === "bordered"
      ? `border border-blue-400 dark:bg-gray-700 dark:text-blue-400`
      : "";
  const roundedClasses = variant === "rounded" ? "rounded-full" : "rounded-sm";

  return (
    <span
      role="status"
      className={`${baseClasses} ${bgClasses} ${borderClasses} ${roundedClasses}`}
    >
      {children}
    </span>
  );
};

export default Badge;
