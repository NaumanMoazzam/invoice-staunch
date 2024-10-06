import React from "react";
import { Divider, Table } from "antd";
import dayjs from "dayjs";

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

const RealTimeInvoice: React.FC = ({ formData }: any) => {
  console.log("formData", formData);

  const items = formData.items ? formData.items : [];
  const billingTo = formData.billingTo;
  const billingFrom = formData.billingFrom;

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

  const formattedDate = formData.billingTo?.invoiceDate
    ? dayjs(formData.billingTo.invoiceDate).format("DD/MM/YYYY")
    : "";

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
              {formattedDate}
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="font-normal text-[16px] text-[#76787D]">
              Payment Terms
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {formData.paymentTerms || "N/A"}
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
              {billingFrom.billingFromAddress.streetAddress || "N/A"}
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {`${billingFrom.billingFromAddress.city}, ${billingFrom.billingFromAddress.postalCode}` || "N/A"}
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {billingFrom.billingFromAddress.country || "N/A"}
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
              {billingTo.billingToAddress.streetAddress || "N/A"}
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {`${billingTo.billingToAddress.city}, ${billingTo.billingToAddress.postalCode}` || "N/A"}
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {billingTo.billingToAddress.country || "N/A"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 w-full justify-between">
          <div className="grid grid-rows-2">
            <div className="font-normal text-[16px] text-[#76787D]">
              Project Description
            </div>
            <div className="font-medium text-[16px] text-[#101828]">
              {formData.projectDescription || "N/A"}
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
