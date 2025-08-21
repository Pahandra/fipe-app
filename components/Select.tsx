interface SelectProps {
  label: string;
  options: { code: string; name: string }[];
  value: string;
  onChange: (value: string) => void;
}

export default function Select({ label, options, value, onChange }: SelectProps) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <select
        className="w-full border p-2 rounded"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Selecione</option>
        {options.map((opt) => (
          <option key={opt.code} value={opt.code}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
}
