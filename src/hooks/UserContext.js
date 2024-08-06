import { createContext, useContext } from "react";
import { initialPersistState, usePersistReducer, userReducer } from "./usePersistReducer";

const UserContext = createContext(null);
const UserDispatchContext = createContext(null);

export function UserProvider({ children }) {
    const [user, dispatch] = usePersistReducer(
        userReducer,
        initialPersistState
    )

    return (
        <UserContext.Provider value={user}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}

export function useUserDispatch() {
    return useContext(UserDispatchContext);
}