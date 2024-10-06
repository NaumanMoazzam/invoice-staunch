import { useFormContext, useWatch } from 'react-hook-form';
import { calculateTotal } from '../../utils/helpers';

const RealTimePreview: React.FC = () => {
  const { control } = useFormContext() ?? {}; // Control comes from context

  if (!control) {
    console.error('Form context is not available');
    return null; // Avoid crashing if no context is provided
  }

  const items = useWatch({ control, name: 'items', defaultValue: [] });
  const { subTotal, tax, totalAmount } = calculateTotal(items);

  return (
    <div>
      <h3>Invoice Preview</h3>
      <p>Sub Total: {subTotal}</p>
      <p>Tax: {tax}</p>
      <p>Total Amount: {totalAmount}</p>
    </div>
  );
};

export default RealTimePreview;
