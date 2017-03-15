export default function({ dispatch }) {
    return next => action => {
        // If action does not have payload
        // or, payload does not have .then property
        // send to next middleware
        if(!action.payload || !action.payload.then) {
            return next(action);
        }

        // Make sure action promise resolves
        action.payload.then(function(response) {
            // create a new action with the old type, but
            // replace the promise with response data
            const newAction = { ...action, payload: response };
            dispatch(newAction);
        });
    };
}