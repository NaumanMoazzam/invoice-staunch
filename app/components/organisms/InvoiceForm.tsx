import { useForm, FormProvider, useWatch } from "react-hook-form";
import { Button, notification } from "antd";
import ItemList from "../molecules/ItemList";
import { yupResolver } from "@hookform/resolvers/yup";
import { invoiceSchema } from "../../utils/formSchema";
import { calculateTotal } from "../../utils/helpers";
import { useMutation } from "@apollo/client";
import { CREATE_INVOICE_MUTATION } from "../../graphql/mutations";
import BillingInfoTo from "../molecules/BillingInfoTo";
import BillingInfoFrom from "../molecules/BillingInfoFrom";
import RealTimeInvoice from "./RealTimePreview";

const InvoiceForm: React.FC = () => {
  const methods = useForm({
    resolver: yupResolver(invoiceSchema),
    defaultValues: {
      billingFromAttributes: {
        companyName: "",
        companyEmail: "",
        billingFromAddressAttributes: {
          streetAddress: "",
          city: "",
          country: "",
          postalCode: "",
        },
      },
      billingToAttributes: {
        clientName: "",
        clientEmail: "",
        billingToAddressAttributes: {
          streetAddress: "",
          city: "",
          country: "",
          postalCode: "",
        },
      },
      itemAttributes: [{ name: "", price: 0, quantity: 1 }],
      invoiceDate: new Date().toISOString().split("T")[0],
      paymentTerms: "Net_30_Days",
      projectDescription: "",
    },
  });

  const formData = useWatch({ control: methods.control });

  const [createInvoice] = useMutation(CREATE_INVOICE_MUTATION);
  const { handleSubmit, reset } = methods;

  const {
    formState: { errors },
  } = methods;
  console.log("Form errors:", errors);

  const onSubmit = async (data: any) => {
    console.log("in submit->", data);
    const { itemAttributes, invoiceDate, paymentTerms, projectDescription } =
      data;
    const { subTotal, tax, totalAmount } = calculateTotal(itemAttributes);

    console.log("data.billingFrom.companyName", data);

    try {
      await createInvoice({
        variables: {
          input: {
            createInvoiceAttributes: {
              billingFromAttributes: {
                companyName: data.billingFromAttributes.companyName,
                companyEmail: data.billingFromAttributes.companyEmail,
                billingFromAddressAttributes: {
                  streetAddress:
                    data.billingFromAttributes.billingFromAddressAttributes
                      .streetAddress,
                  city: data.billingFromAttributes.billingFromAddressAttributes
                    .city,
                  country:
                    data.billingFromAttributes.billingFromAddressAttributes
                      .country,
                  postalCode:
                    data.billingFromAttributes.billingFromAddressAttributes
                      .postalCode,
                },
              },
              billingToAttributes: {
                clientName: data.billingToAttributes.clientName,
                clientEmail: data.billingToAttributes.clientEmail,
                billingToAddressAttributes: {
                  streetAddress:
                    data.billingToAttributes.billingToAddressAttributes
                      .streetAddress,
                  city: data.billingToAttributes.billingToAddressAttributes
                    .city,
                  country:
                    data.billingToAttributes.billingToAddressAttributes.country,
                  postalCode:
                    data.billingToAttributes.billingToAddressAttributes
                      .postalCode,
                },
              },
              itemAttributes: (data.items || []).map(
                (item: { name: any; price: any; quantity: any }) => ({
                  name: item.name,
                  price: parseFloat(item.price),
                  quantity: parseInt(item.quantity),
                })
              ),
              invoiceDate: invoiceDate,
              paymentTerms: paymentTerms,
              projectDescription: projectDescription,
            },
          },
        },
      });

      notification.success({ message: "Invoice created successfully!" });
      reset();
    } catch (error) {
      console.error("Error creating invoice:", error);
      notification.error({ message: "Failed to create invoice." });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="bg-secondary-100 p-10 container w-full">
          <div className=" flex flex-row lg:justify-between items-start">
            <div className="flex flex-col">
              <div className="font-bold text-[20px] lg:text-[30px]">New Invoice</div>
              <div className="text-[#667085] text-[12px] lg:text-[16px] font-normal">
                Create new invoice for your customers
              </div>
            </div>
            <div className="flex flex-row gap-1 lg:gap-4">
              <Button
                type="primary"
                htmlType="button"
                className="text-[#344054] bg-white border-1 border-[#D0D5DD]"
                onClick={() => reset()}
              >
                Reset
              </Button>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </div>
          </div>
        </section>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="p-6 flex flex-col gap-8 w-full lg:w-[676px] border-2 rounded-[24px] border-[#D0D5DD]">
            <BillingInfoFrom type="billingFromAttributes" />
            <BillingInfoTo type="billingToAttributes" />
            <ItemList />
          </div>
          <div className="flex flex-col p-8 gap-6 bg-[#F5F5F5] w-full lg:w-[676px] rounded-[24px]">
            <div className="font-semibold text-[24px] text-[#101828] ">
              Preview
            </div>
            <RealTimeInvoice formData={formData} />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default InvoiceForm;
