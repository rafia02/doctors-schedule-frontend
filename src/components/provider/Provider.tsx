'use client'

import { store } from "@/redux/store"
import { Provider } from "react-redux";



const Providerr = ({children}: {children: React.ReactNode}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Providerr