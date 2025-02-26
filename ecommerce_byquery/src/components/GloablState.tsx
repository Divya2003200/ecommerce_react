import React, { createContext, useReducer, ReactNode } from 'react';

import { productReducer } from '../reducers/productReducer'

 
 export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string; 
    quantity:number
    category:string
}


export interface State {
    products: Product[];
    cart: Product[];
<<<<<<< HEAD
    user: { role: string; username: string } | null; 
=======
    user: { role: string; username: string } | null;//
>>>>>>> 026a955910774cf75c5a4b23f68dd0842a17f1d4
}

export interface Action {
    type: string;
    payload?: any;
}

interface GlobalContextProps {
    state: State;
    dispatch: React.Dispatch<Action>;
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);


interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const initialState: State = {
        products: [],
        cart: [],
        user:null
    };

    const [state, dispatch] = useReducer(productReducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

 