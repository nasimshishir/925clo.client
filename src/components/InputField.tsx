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
      <label htmlFor={id} className="uppercase text-sm font-normal tracking-wide ms-6 text-black">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${bg} rounded-2xl text-sm ${fontWeight} p-6 placeholder:text-gray-300 ${textColor} border-gray-300 uppercase border focus:outline-none `}
      />
    </div>
  );
};

export default InputField;
