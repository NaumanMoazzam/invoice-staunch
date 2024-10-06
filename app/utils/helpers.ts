export const calculateTotal = (items: { price: number, quantity: number }[]) => {
    const subTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subTotal * 0.1;
    const totalAmount = subTotal + tax;
    return { subTotal, tax, totalAmount };
  };
  