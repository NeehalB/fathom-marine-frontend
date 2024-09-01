import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Inputs } from "../../screens/login/LoginDto";

interface InputFieldProps {
  label: string;
  type: string;
  name: keyof Inputs;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  register,
  errors,
}) => {
  return (
    <div className="mb-4 w-full">
      <div className="mb-2">
        <label>{label}</label>
      </div>
      <input
        type={type}
        className="block w-full px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
        {...register(name, { required: true })}
      />
      {errors[name] && <span>This is a required field.</span>}
    </div>
  );
};

export default InputField;
