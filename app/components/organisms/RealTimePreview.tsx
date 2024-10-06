import React from "react";
import { useForm, useFormContext, useWatch } from "react-hook-form";
import { Divider, Table } from "antd";

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

const RealTimeInvoice: React.FC = ({formData}: any) => {
  const methods = useForm();

  //   if (!control) {
  //     console.error("Form context is not available");
  //     return null;
  //   }

  // Watch for real-time updates in form values
  //   const items: Item[] = useWatch({ control, name: "items", defaultValue: [] });
  //   const billingFrom = useWatch({
  //     control,
  //     name: "billingFrom",
  //     defaultValue: {
  //       companyName: '',
  //       companyEmail: '',
  //       streetAddress: '',
  //       city: '',
  //       postalcode: '',
  //       country: ''
  //     },
  //   });
  //   const billingTo = useWatch({
  //     control,
  //     name: "billingTo",
  //     defaultValue: {
  //       clientName: '',
  //       clientEmail: '',
  //       streetAddress: '',
  //       city: '',
  //       postalcode: '',
  //       country: '',
  //       projectDescription: '',
  //       paymentTerms: '',
  //       invoiceDate: '',
  //     },
  //   });
//   const items:  Item[] = useWatch({ control: methods.control, name: "items", defaultValue: [] });
//   const billingTo = useWatch({ control: methods.control, name: "billingTo" });
//   const billingFrom = useWatch({ control: methods.control, name: "billingFrom" });
console.log('formData', formData)

const items = formData.items ? formData.items : []
const billingTo = formData.billingTo
const billingFrom = formData.billingFrom

  

  const columns = [
    {
      title: "Item",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Qty.",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price}`,
    },
    {
      title: "Total Amount",
      dataIndex: "total",
      key: "total",
      render: (_: any, record: Item) => `$${record.quantity * record.price}`,
    },
  ];

  const subtotal = items?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const tax = subtotal * 0.1;

  const totalPrice = subtotal + tax;

  return (
    <div className="bg-white flex flex-col gap-2 p-4 rounded-[16px]">
      <div className="font-semibold text-[18px] text-[#101828]">
        New Invoice
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-2 w-full justify-between">
          <div className="grid grid-rows-2">
            <div className="font-normal text-[16px] text-[#76787D]">
              Invoice Date
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {billingTo.invoiceDate || "N/A"}
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="font-normal text-[16px] text-[#76787D]">
              Payment Terms
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {billingTo.paymentTerms || "N/A"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 w-full justify-between">
          <div className="grid grid-rows-2">
            <div className="font-normal text-[16px] text-[#76787D]">
              Billed From
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {billingFrom.companyName || "N/A"}
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {billingFrom.companyEmail || "N/A"}
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {billingFrom.streetAddress || "N/A"}
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {`${billingFrom.city}, ${billingFrom.postalcode}` || "N/A"}
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {billingFrom.country || "N/A"}
            </div>
          </div>

          <div className="grid grid-rows-2">
            <div className="font-normal text-[16px] text-[#76787D]">
              Billed To
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {billingTo.clientName || "N/A"}
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {billingTo.clientEmail || "N/A"}
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {billingTo.streetAddress || "N/A"}
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {`${billingTo.city}, ${billingTo.postalcode}` || "N/A"}
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {billingTo.country || "N/A"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 w-full justify-between">
          <div className="grid grid-rows-2">
            <div className="font-normal text-[16px] text-[#76787D]">
              Project Description
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {billingTo.projectDescription || "N/A"}
            </div>
          </div>
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={items}
        rowKey={(record) => record.name || `${Math.random()}`}
        pagination={false}
      />

      {/* Display Subtotal, Tax, and Total Amount */}
      <div className="mt-[20px] text-right">
        <div className="flex flex-row justify-end gap-24">
          <div className="font-semibold text-[16px] text-[#101828]">
            Subtotal
          </div>
          <div className="font-semibold text-[16px] text-[#101828]">
            {`$${subtotal.toFixed(2)}`}
          </div>
        </div>
        <div className="flex flex-row justify-end gap-24">
          <div className="font-semibold text-[16px] text-[#101828]">Tax</div>
          <div className="font-semibold text-[16px] text-[#101828]">
            {`10%`}
          </div>
        </div>
        <div className="flex flex-row justify-end gap-24">
          <div className="font-semibold text-[16px] text-[#101828]">Total</div>
          <div className="font-semibold text-[16px] text-[#101828]">{`$${totalPrice.toFixed(
            2
          )}`}</div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeInvoice;
