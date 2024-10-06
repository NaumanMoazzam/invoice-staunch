"use client";
import InputField from "../atoms/InputField";
import { useFormContext } from "react-hook-form";
import SelectField from "../atoms/SelectBox";

const BillingInfoFrom: React.FC<{ type: "billingFromAttributes" | "billingToAttributes" }> = ({ type }) => {
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
        <SelectField
          name={`${type}.billingFromAddressAttributes.country`}
          label="Country"
          control={control}
          options={[
            { value: "USA", label: "United States" },
            { value: "CAN", label: "Canada" },
            { value: "UK", label: "United Kingdom" },
          ]}
        />
        <InputField
          name={`${type}.billingFromAddressAttributes.city`}
          label="City"
          control={control}
          placeholder="City"
        />
        <InputField
          name={`${type}.billingFromAddressAttributes.postalCode`}
          label="Postal Code"
          control={control}
          placeholder="Postal Code"
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <InputField
          name={`${type}.billingFromAddressAttributes.streetAddress`}
          label="Street Address"
          control={control}
          placeholder="Street Address"
        />
      </div>
    </div>
  );
};

export default BillingInfoFrom;