import React, { createContext, useContext, useState } from 'react'



export const myContext = createContext<contextType | undefined>(undefined)


export const useMyContext = () => {
  const context = useContext(myContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

const Context = ({children}:{children:React.ReactNode}) => {

    const [num,setNum] = useState<number>(0);

  return (
    <myContext.Provider value={{num,setNum}}>
        {children}
    </myContext.Provider>
  )
}

export default Context