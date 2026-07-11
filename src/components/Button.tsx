interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
}

export default function Button({ children, onClick, variant = "primary", type = "button" }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:ring-offset-2 focus:ring-offset-transparent";
  const variantClasses = variant === "primary"
    ? "bg-[#E50914] text-white hover:bg-[#f6121d]"
    : "bg-zinc-200 text-zinc-900 hover:bg-zinc-300";
  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
}