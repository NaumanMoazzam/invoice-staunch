import { gql } from '@apollo/client';

export const CREATE_INVOICE_MUTATION = gql`
  mutation CreateInvoice($input: InvoiceInput!) {
    createInvoice(input: $input) {
      id
      invoiceDate
      paymentTerms
      projectDescription
      subTotal
      tax
      totalAmount
      billingFrom {
        id
        companyName
        companyEmail
        billingFromAddress {
          city
          country
          postalCode
          streetAddress
        }
      }
      billingTo {
        id
        clientName
        clientEmail
        billingToAddress {
          city
          country
          postalCode
          streetAddress
        }
      }
      items {
        id
        name
        price
        quantity
        totalPrice
      }
    }
  }
`;
