export const ADDITEM = "ADDITEM";
export const DELITEM = "DELITEM";
export const INCQUANTITY = "INCQUANTITY";
export const DECQUANTITY = "DECQUANTITY";

// Add product to Cart

export const addCart = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

// Delete product from Cart

export const delCart = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}

// Increase Quantity

export const incQuantity = (product) => {
    return {
        type : "INCQUANTITY",
        payload : product
    }
}

// Decrease Quantity

export const decQuantity = (product) => {
    return {
        type : "DECQUANTITY",
        payload : product
    }
}


