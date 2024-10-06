import * as yup from 'yup';

export const invoiceSchema = yup.object().shape({
  billingFromAttributes: yup.object({
    companyName: yup.string().required('Company Name is required'),
    companyEmail: yup.string().email('Invalid email').required('Email is required'),
    billingFromAddressAttributes: yup.object({
      city: yup.string().required('City is required'),
      country: yup.string().required('Country is required'),
      postalCode: yup.string().required('Postal Code is required'),
      streetAddress: yup.string().required('Street Address is required'),
    }),
  }),
  billingToAttributes: yup.object({
    clientName: yup.string().required('Client Name is required'),
    clientEmail: yup.string().email('Invalid email').required('Email is required'),
    billingToAddressAttributes: yup.object({
      city: yup.string().required('City is required'),
      country: yup.string().required('Country is required'),
      postalCode: yup.string().required('Postal Code is required'),
      streetAddress: yup.string().required('Street Address is required'),
    }),
  }),
  invoiceDate: yup.date(),
  paymentTerms: yup.string().required('Payment Terms are required'),
  projectDescription: yup.string().required('Project Description is required'),
  itemAttributes: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Item name is required'),
      price: yup.number().positive('Price must be positive').required('Price is required'),
      quantity: yup.number().positive('Quantity must be positive').required('Quantity is required'),
    })
  ),
  subTotal: yup.number(),
  tax: yup.number(),
  totalAmount: yup.number(),
});
