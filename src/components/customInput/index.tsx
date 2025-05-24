import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface IProps {
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomInput(props: IProps) {
  const {
    label,
    name,
    type = 'text',
    placeholder,
    value,
    required = false,
    error,
    onChange,
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="mb-4 relative">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={isPassword ? (showPassword ? 'text' : 'password') : type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 ${error ? 'border-red-500' : 'border-gray-300'
          }`}
      />
      {isPassword && (
        <button
          type="button"
          className="absolute right-3 top-[46px] transform -translate-y-1/2 text-[#2d66d4] hover:text-gray-900"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <EyeSlashIcon className="w-6 h-6 cursor-pointer" color='#2d66d4' />
          ) : (
            <EyeIcon className="w-6 h-6 cursor-pointer" color='#2d66d4' />
          )}
        </button>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
