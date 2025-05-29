export function reducer(state, { type, payload }) {
    switch (type) {

        case 'SET_ITEMS':
            return {
                ...state,
                items: payload || [],
                loading: false,
            }

        case 'ADD_TO_BASKET': {
            //            const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
            const itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload.id);

            let newOrder = null;
            if (itemIndex === -1) {
                const newItem = {
                    //                    ...item,
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem]
                //              setOrder([...order, newItem]);
            } else {
                //              const newOrder = order.map((orderItem, index) => {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
                //              setOrder(newOrder);
            }
            //            setAlertName(item.name);
            return {
                ...state,
                order: newOrder,
                alertName: payload.name,
            };
        }
        case 'INC_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                }),
            }

        case 'DEC_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity < 0 ? 0 : newQuantity,
                        };
                    } else {
                        return el;
                    }
                }),
            }

        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((e) => e.id !== payload.id)
            }

        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            }

        case 'BASKETSHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            }

        default:
            return state;
    }
}