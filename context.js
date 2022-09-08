import React from "react";

const AppContext = React.createContext();

to create a [provider function 
const AppProvider = ({children}) => {
    return (
        <AppContext.Provider>value={"Shubham"}>
        {children}
        </AppContext.Provider>;
    );

};

export {AppContext, AppProvider};
