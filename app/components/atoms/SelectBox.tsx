import { Select } from 'antd';
import { Controller } from 'react-hook-form';

interface SelectBoxProps {
  name: string;
  label: string;
  control: never;
  options: { label: string; value: string }[];
}

const SelectBox: React.FC<SelectBoxProps> = ({ name, label, control, options }) => (
  <div>
    <label>{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select {...field} className='border-1 border-[#D0D5DD] h-[44px]'>
          {options.map(option => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      )}
    />
  </div>
);

export default SelectBox;
