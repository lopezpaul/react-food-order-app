import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    addOneItem: (item) => { },
    removeItem: (id) => { },
});

export default CartContext;