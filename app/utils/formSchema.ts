import * as yup from 'yup';

export const invoiceSchema = yup.object().shape({
  billingFrom: yup.object().shape({
    companyName: yup.string().required("Company Name is required"),
    companyEmail: yup.string().email().required("Email is required"),
  }),
  billingTo: yup.object().shape({
    clientName: yup.string().required("Client Name is required"),
    clientEmail: yup.string().email().required("Email is required"),
  }),
  items: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Item name is required"),
      price: yup.number().required("Price is required"),
      quantity: yup.number().required("Quantity is required"),
    })
  ),
});
