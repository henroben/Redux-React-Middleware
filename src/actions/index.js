import { FETCH_USERS } from './types';

export function fetchUsers() {
    return {
        type: FETCH_USERS,
        payload: [
            { name: 'Ben' },
            { name: 'Luke' },
            { name: 'Nuno' },
            { name: 'Mark' },
            { name: 'Derek' },
            { name: 'Peter' }
        ]
    }
}