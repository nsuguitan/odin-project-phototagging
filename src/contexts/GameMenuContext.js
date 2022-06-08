import React, { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuContextProvider = ( {children} ) => {
    const [menuOpen,setMenuOpen] = useState(false);

    return(
        <MenuContext.Provider value={[menuOpen, setMenuOpen]}>
            {children}
        </MenuContext.Provider>
    );
};

export default MenuContextProvider;