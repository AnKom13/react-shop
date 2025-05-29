import { createContext, useReducer } from "react";
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
    items: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
}


export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    // const value = {
    //     example: 'Работаю через context'
    // }
    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' })
    }

    value.addToBasket = (item) => {
        dispatch({ type: 'ADD_TO_BASKET', payload: item })
    }

    value.incQuantity = (itemId) => {
        dispatch({ type: 'INC_QUANTITY', payload: { id: itemId } })

    }

    value.decQuantity = (itemId) => {
        dispatch({ type: 'DEC_QUANTITY', payload: { id: itemId } })

    }


    value.removeFromBasket = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } })
    }

    value.handleBasketShow = () => {
        dispatch({ type: 'BASKETSHOW' })
    }

    value.setItems = (data) => {
        dispatch({ type: 'SET_ITEMS', payload: data })
    }

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    )
}