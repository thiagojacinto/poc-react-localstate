import { useMemo, useState, useEffect} from 'react';

/**
 * Uses Web API LocalStorage to persist a string state value.
 * 
 * Based on blog post: https://dev.to/jorensm/how-to-keep-state-between-page-refreshes-in-react-3801
 * 
 * @param {*} initial_value 
 * @param {*} id To identify the correct state from LocalStorage
 * @returns [state, setState]
 */
export function usePersistStringState(initial_value, id) {
    
    const _initial_value = useMemo(() => {
        const local_storage_value_str = localStorage.getItem('state:' + id);
        if(local_storage_value_str) {
            return local_storage_value_str;
        } 
        return initial_value;
    }, []);
    
    const [state, setState] = useState(_initial_value);

    useEffect(() => {
        localStorage.setItem('state:' + id, state)
    }, [state, id]);
    
    return [state, setState];
}

