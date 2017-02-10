import { handleActions } from 'redux-actions'

const initialState = {
    Flag: false
}

export default handleActions({

    UPLOAD_FILE: {
        next (state, action) {
            return {
                ...state,
                Flag: true
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
