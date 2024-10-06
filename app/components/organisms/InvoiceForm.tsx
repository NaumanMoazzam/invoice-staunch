import { useForm, FormProvider } from "react-hook-form";
import { Button, notification } from "antd";
import BillingInfo from "../molecules/BillingInfo";
import ItemList from "../molecules/ItemList";
import { yupResolver } from "@hookform/resolvers/yup";
import { invoiceSchema } from "../../utils/formSchema";
import { calculateTotal } from "../../utils/helpers";
import { useMutation } from "@apollo/client";
import { CREATE_INVOICE_MUTATION } from "../../graphql/mutations";
import RealTimePreview from "./RealTimePreview";
import BillingInfoTo from "../molecules/BillingInfoTo";

const InvoiceForm: React.FC = () => {
  const methods = useForm({
    resolver: yupResolver(invoiceSchema),
    defaultValues: {
      billingFrom: { companyName: "", companyEmail: "" },
      billingTo: { clientName: "", clientEmail: "" },
      items: [{ name: "", price: 0, quantity: 0 }],
    },
  });

  const [createInvoice] = useMutation(CREATE_INVOICE_MUTATION);
  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: any) => {
    const { items } = data;
    const { subTotal, tax, totalAmount } = calculateTotal(items);

    try {
      await createInvoice({
        variables: {
          input: { ...data, subTotal, tax, totalAmount },
        },
      });
      notification.success({ message: "Invoice created successfully!" });
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row">
          <div className="p-6 flex flex-col gap-8 w-[676px] border-2 rounded-[24px] border-[#D0D5DD]">
            <BillingInfo type="from" />
            <BillingInfoTo type="to" />
            <ItemList />
          </div>
          <RealTimePreview />
          <Button type="primary" htmlType="submit">
            Submit Invoice
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default InvoiceForm;
