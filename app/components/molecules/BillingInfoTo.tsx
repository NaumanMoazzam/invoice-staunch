"use client";
import InputField from "../atoms/InputField";
import { useFormContext } from "react-hook-form";

const BillingInfoTo: React.FC<{ type: "from" | "to" }> = ({ type }) => {
  const { control } = useFormContext();

  return (
    <div>
      <div className="font-bold text-[24px] text-[#101828] pb-4">Billing To</div>
      <div className="grid grid-cols-2 gap-4">
        <InputField
          name={`${type}.clientName`}
          label="Client’s Name"
          control={control}
          placeholder="Client’s Name"
        />
        <InputField
          name={`${type}.clientEmail`}
          label="Client’s Email"
          control={control}
          placeholder="Client’s Email"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* TODO: SELECT BOX FOR COUNTRIES */}
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
      <div className="grid grid-cols-2 gap-4">
        {/* TODO: Add DATE (Calendar) */}
        <InputField
          name={`${type}.streetAddress`}
          label="Street Address"
          control={control}
          placeholder="Street Address"
        />
        {/* TODO: SELECT BOX FOR PAYMENT TERMS */}
        <InputField
          name={`${type}.paymentTerms`}
          label="Payment Terms"
          control={control}
          placeholder="Payment Terms"
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <InputField
          name={`${type}.projectDescription`}
          label="Project Description"
          control={control}
          placeholder="Project Description"
        />
      </div>
    </div>
  );
};

export default BillingInfoTo;
