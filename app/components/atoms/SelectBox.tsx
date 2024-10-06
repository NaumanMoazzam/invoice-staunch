// SelectField.tsx
import { Select } from 'antd';
import { Controller } from 'react-hook-form';

interface SelectFieldProps {
  name: string;
  label: string;
  control: any;
  options: { value: string; label: string }[];
  placeholder?: string;
  disabled?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({ name, label, control, options, placeholder, disabled }) => (
  <div className='flex flex-col gap-1 pb-2'>
    <label className='text-[#344054] text-[14px] font-medium'>{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          disabled={disabled}
          placeholder={placeholder}
          options={options}
          className='border-1 border-[#D0D5DD] h-[44px]'
          onChange={(value) => field.onChange(value)} // Ensures change handling
        />
      )}
    />
  </div>
);

export default SelectField;
