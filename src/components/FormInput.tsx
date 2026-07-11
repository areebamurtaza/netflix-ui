interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({ label, type, value, onChange }: FormInputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer w-full rounded-md border border-zinc-300 bg-white px-4 pb-3 pt-5 text-sm text-zinc-900 outline-none transition focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
      />
      <label className="pointer-events-none absolute left-4 top-4 bg-white px-1 text-sm text-zinc-500 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#E50914] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-zinc-700">
        {label}
      </label>
    </div>
  );
}