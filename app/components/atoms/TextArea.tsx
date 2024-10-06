import { Input } from 'antd';
import { Controller } from 'react-hook-form';

interface TextAreaProps {
  name: string;
  label: string;
  control: never;
  placeholder: string;
}

const { TextArea } = Input;

const CustomTextArea: React.FC<TextAreaProps> = ({ name, label, control, placeholder }) => (
  <div>
    <label>{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextArea {...field} placeholder={placeholder} />
      )}
    />
  </div>
);

export default CustomTextArea;
