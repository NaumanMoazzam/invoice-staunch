// DatePickerField.tsx
import { DatePicker } from 'antd';
import { Controller } from 'react-hook-form';

interface DatePickerFieldProps {
  name: string;
  label: string;
  control: any;
  placeholder?: string;
  disabled?: boolean;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({ name, label, control, placeholder, disabled }) => (
  <div className='flex flex-col gap-1 pb-2'>
    <label className='text-[#344054] text-[14px] font-medium'>{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          disabled={disabled}
          placeholder={placeholder || "Select a date"}
          format="DD/MM/YYYY"
          className='border-1 border-[#D0D5DD] h-[44px] w-full'
          onChange={(date) => field.onChange(date)} // Ensures date change is handled properly
        />
      )}
    />
  </div>
);

export default DatePickerField;
