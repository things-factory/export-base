import { UPDATE_EXTENSION, EXPORT } from '../actions/export'

const INITIAL_STATE = {
  extensions: {}
}

const exporting = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_EXTENSION:
      return {
        ...state,
        extensions: {
          ...state.extensions,
          ...action.extensions
        }
      }

    case EXPORT:
      state.extensions[action.export.extension].export(action.export.params)

    default:
      return state
  }
}

export default exporting
