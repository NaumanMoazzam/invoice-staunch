"use client";
import InputField from "../atoms/InputField";
import { useFormContext } from "react-hook-form";
import SelectField from "../atoms/SelectBox";
import DatePickerField from "../atoms/DatePickerField";

const BillingInfoTo: React.FC<{ type: "billingFrom" | "billingTo" }> = ({ type }) => {
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
        <SelectField
          name={`${type}.country`}
          label="Country"
          control={control}
          options={[
            { value: "USA", label: "United States" },
            { value: "CAN", label: "Canada" },
            { value: "UK", label: "United Kingdom" },
          ]}
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
      <div className="grid grid-cols-2 gap-4">
        {/* Add date picker for invoice date */}
        <DatePickerField
          name={`${type}.invoiceDate`}
          label="Invoice Date"
          control={control}
        />
        {/* TODO: SELECT BOX FOR PAYMENT TERMS */}
        <SelectField
          name={`${type}.paymentTerms`}
          label="Payment Terms"
          control={control}
          options={[
            { value: "Net 30 Days", label: "Net 30 Days" },
            { value: "Net 60 Days", label: "Net 60 Days" },
            { value: "Net 90 Days", label: "Net 90 Days" },
          ]}
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