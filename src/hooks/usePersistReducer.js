import { usePersistStringState } from "./usePersistState";

export function usePersistReducer(reducer, initialState) {
    const [state, setState] = usePersistStringState(initialState, "username");

    const dispatch = (action) => {
        setState(() => reducer(state, action));
    }

    return [state, dispatch];
}

export function userReducer(user, action) {
    switch (action.type) {
      case 'added': {
        return action.text;
      }
      
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

export const initialPersistState = ""