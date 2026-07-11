interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

export default function FormInput({ label, type, value, onChange, readOnly }: FormInputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder=" "
        className="peer w-full rounded-md border border-zinc-300 bg-white px-4 pb-3 pt-5 text-sm text-zinc-900 outline-none transition focus:border-[#DB202C] focus:ring-1 focus:ring-[#DB202C]"
      />
      <label className="pointer-events-none absolute left-4 top-4 bg-white px-1 text-sm text-zinc-500 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#DB202C] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-zinc-700">
        {label}
      </label>
    </div>
  );
}