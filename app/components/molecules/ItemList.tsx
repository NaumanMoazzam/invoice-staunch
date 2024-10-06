import { Button } from "antd";
import { useFormContext, useFieldArray, useWatch } from "react-hook-form";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import InputField from "../atoms/InputField";

const ItemList: React.FC = () => {
  const { control, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const watchedItems = useWatch({
    control,
    name: "items", 
  });


  watchedItems?.forEach((item: { quantity: any; price: any; total: number; }, index: any) => {
    const quantity = parseFloat(item?.quantity || 0);
    const price = parseFloat(item?.price || 0);
    const total = quantity * price;

    if (item?.total !== total) {
      setValue(`items[${index}].total`, total);
    }
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
              placeholder="Total"
              type="number"
              disabled
              // Show the dynamically calculated total value
              // value={watchedItems[index]?.total?.toFixed(2)}
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
            total: 0,
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
