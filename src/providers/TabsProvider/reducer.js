export const initialState = {
    activeTab: "react"
}

export const actionTypes = {
    SET_ACTIVE_TAB: 'SET_ACTIVE_TAB'
}

export const tabsNavigationReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_ACTIVE_TAB:
            return {
                ...state,
                activeTab: action.payload
            }

        default:
            break;
    }
}