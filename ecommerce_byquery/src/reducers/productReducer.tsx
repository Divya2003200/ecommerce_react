
import { State, Action } from '../components/GloablState'

export const productReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.payload };
        case 'ADD_TO_CART':
<<<<<<< HEAD
            return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] }; 
=======
            return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] }; // Initialize quantity to 1
>>>>>>> 026a955910774cf75c5a4b23f68dd0842a17f1d4
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
                ),
            };
        case 'CLEAR_CART':
<<<<<<< HEAD
            return { ...state, cart: [] }; 
            case 'LOGIN':
                return { ...state, user: action.payload }; 
=======
            return { ...state, cart: [] }; // Clear the cart
            case 'LOGIN':
                return { ...state, user: action.payload }; // Set user on login
>>>>>>> 026a955910774cf75c5a4b23f68dd0842a17f1d4
            case 'LOGOUT':
                return { ...state, user: null }   

            case 'ADD_PRODUCT':
                    return { ...state, products: [...state.products, action.payload] };
            case 'DELETE_PRODUCT': 
                    return { 
                      ...state, 
                      products: state.products.filter(product => product.id !== action.payload) 
                    }; 

            case 'UPDATE_PRODUCT':
                        return {
                          ...state,
                          products: state.products.map(p =>
                            p.id === action.payload.id ? { ...p, ...action.payload } : p
                          )
                        };
                      
        default:
            return state;
    }
};

