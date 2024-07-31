import React, { createContext, useContext, useReducer } from 'react'

const CardStateContex = createContext();
const CartDispatchContext = createContext();


 export const CartProvider = ({children}) =>{

   const [state,dispatch]=useReducer(reducer,[])  

    return(
<CartDispatchContext.Provider value={dispatch}>
   <CardStateContex value={state}>
      {children}
   </CardStateContex>

</CartDispatchContext.Provider>
    )

 }
 export const usecart =()=>useContext(CardStateContex);
 export const useDispatchCart=()=>useContext(CartDispatchContext)