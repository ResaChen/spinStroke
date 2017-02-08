import { handleActions } from 'redux-actions'

const initialState = {
    Flag: false,
    Font: ''
}

export default handleActions({

    UPLOAD_FILE: {
        next (state, action) {
            return {
                ...state,
                Flag: true,
                Font: [
                    action.payload
                ]
            }
        },
        throw (state, action) {
            return {
                ...state
            }
        }
    },

    default: (state, action) => {
        return {
            ...state
        }
    }
}, initialState)
