import { Button } from "antd";
import { useFormContext, useFieldArray } from "react-hook-form";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import InputField from "../atoms/InputField";

const ItemList: React.FC = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items", // key in the form's data structure
  });

  return (
    <div>
      <div className="font-bold text-[24px] text-[#101828] pb-4">
        Items List
      </div>

      {fields.map((item, index) => (
        <div key={item.id} className="flex flex-row gap-4">
          <div className="w-full">
            <InputField
              name={`items[${index}].name`}
              label="Item Name"
              control={control}
              placeholder="Item Name"
              type="number"
            />
          </div>
          <div>
            <InputField
              name={`items[${index}].quantity`}
              label="Quantity"
              control={control}
              placeholder="Quantity"
              type="number"
            />
          </div>

          <div>
            <InputField
              name={`items[${index}].price`}
              label="Price"
              control={control}
              placeholder="Price"
              type="number"
            />
          </div>
          <div>
            <InputField
              name={`items[${index}].total`}
              label="Total"
              control={control}
              placeholder="total"
              type="number"
              disabled
            />
          </div>
          <div className="pt-8">
            <Button onClick={() => remove(index)} icon={<DeleteOutlined />} />
          </div>
        </div>
      ))}

      <Button
        onClick={() =>
          append({
            name: "",
            price: 0,
            quantity: 1,
          })
        }
        type="primary"
        className="w-full h-[44px] font-medium text-[16px]"
        icon={<PlusOutlined />}
      >
        Add Item
      </Button>
    </div>
  );
};

export default ItemList;
