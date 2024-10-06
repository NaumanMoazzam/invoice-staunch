import { gql } from '@apollo/client';

export const CREATE_INVOICE_MUTATION = gql`
  mutation CreateInvoice($input: InvoiceInput!) {
    createInvoice(input: $input) {
      id
      totalAmount
      billingFrom {
        companyName
      }
      billingTo {
        clientName
      }
    }
  }
`;
