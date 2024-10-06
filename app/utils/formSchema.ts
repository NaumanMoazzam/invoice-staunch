import * as yup from 'yup';

export const invoiceSchema = yup.object().shape({
  billingFrom: yup.object().shape({
    companyName: yup.string().required("Company Name is required"),
    companyAddress: yup.string().required("Company Address is required"),
    companyEmail: yup.string().email("Must be a valid email").required("Email is required"),
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    postalcode: yup.string().required("Postal Code is required"),
    streetAddress: yup.string().required("Street Address is required"),
    companyPhone: yup.number().required("Phone Number is required"),
  }),
  billingTo: yup.object().shape({
    clientName: yup.string().required("Client Name is required"),
    clientEmail: yup.string().email("Must be a valid email").required("Email is required"),
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    postalcode: yup.string().required("Postal Code is required"),
    streetAddress: yup.string().required("Street Address is required"),
    paymentTerms: yup.string().required("Payment Terms is required"),
    projectDescription: yup.string().required("Project Description is required"),
    clientAddress: yup.string().required("Client Address is required"),
    invoiceDate: yup.date().required("Invoice Date is required").typeError("Must be a valid date"),
    clientPhone: yup.number().required("Client Phone is required"),
  }),
  items: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Item name is required"),
      price: yup.number().required("Price is required"),
      quantity: yup.number().required("Quantity is required"),
    })
  ),
});
