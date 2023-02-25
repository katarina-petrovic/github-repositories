import { useReducer } from "react";
import { createContext } from "react";
import { actionTypes, initialState, tabsNavigationReducer } from "./reducer";

export const TabsNavigationContext = createContext({
    activeTab: "",
    setActiveTab: () => { }
});

export const TabsNavigationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tabsNavigationReducer, initialState);
    
    const value = {
        ...state,
        setActiveTab: (activeTab) => dispatch({ type: actionTypes.SET_ACTIVE_TAB, payload: activeTab })
    }

    return <TabsNavigationContext.Provider value={value}>{children}</TabsNavigationContext.Provider>
}