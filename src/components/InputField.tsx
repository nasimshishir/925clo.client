import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  label?: string;
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  width?: string;
  textColor?: string;
  bg?: string;
  fontWeight?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, id, name, value, placeholder, onChange, width, textColor, bg, fontWeight }) => {
  return (
    <div className={`grid gap-2 mt-3 ${width}`}>
      <label htmlFor={id} className="uppercase text-xs font-thin tracking-wide ms-5">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${bg} border rounded-xl border-white text-sm ${fontWeight} focus:bg-transparent focus:outline-none p-3 focus:border-gray-300 placeholder:text-gray-300 ${textColor}`}
      />
    </div>
  );
};

export default InputField;
