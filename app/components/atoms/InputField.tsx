import { Input } from 'antd';
import { Controller } from 'react-hook-form';

interface InputFieldProps {
  name: string;
  label: string;
  control: any;
  placeholder: string;
  type?: string;
  disabled?: boolean
}

const InputField: React.FC<InputFieldProps> = ({ name, label, control, placeholder, type, disabled }) => (
  <div className='flex flex-col gap-1 pb-2'>
    <label className='text-[#344054] text-[14px] font-medium'>{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input {...field} disabled={disabled} placeholder={placeholder} className='border-1 border-[#D0D5DD] h-[44px]' type={type} />
      )}
    />
  </div>
);

export default InputField;
