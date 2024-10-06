"use client";
import InvoiceForm from "../organisms/InvoiceForm";
import RealTimePreview from "../organisms/RealTimePreview";

const InvoicePage: React.FC = () => {
  return (
    <div>
      <InvoiceForm />
      <RealTimePreview />
    </div>
  );
};

export default InvoicePage;
