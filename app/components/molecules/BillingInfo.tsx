"use client";
import InputField from "../atoms/InputField";
import { useFormContext } from "react-hook-form";

const BillingInfo: React.FC<{ type: "from" | "to" }> = ({ type }) => {
  const { control } = useFormContext();

  return (
    <div>
      <div className="font-bold text-[24px] text-[#101828] pb-4">Billing From</div>
      <div className="grid grid-cols-2 gap-4">
        <InputField
          name={`${type}.companyName`}
          label="Company Name"
          control={control}
          placeholder="Enter company name"
        />
        <InputField
          name={`${type}.companyEmail`}
          label="Email"
          control={control}
          placeholder="Enter email"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* TODO: SELECT BOX */}
        <InputField
          name={`${type}.country`}
          label="Email"
          control={control}
          placeholder="Enter email"
        />
        <InputField
          name={`${type}.city`}
          label="City"
          control={control}
          placeholder="City"
        />
        <InputField
          name={`${type}.postalcode`}
          label="Postal Code"
          control={control}
          placeholder="Postal Code"
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <InputField
          name={`${type}.country`}
          label="Street Address"
          control={control}
          placeholder="Street Address"
        />
      </div>
    </div>
  );
};

export default BillingInfo;
