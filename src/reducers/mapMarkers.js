import {
  DESIGN_REVIEW_MARKERS,
  LAND_USE_MARKERS
} from '../actions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case DESIGN_REVIEW_MARKERS:
      return [...state, ...action.payload]
    case LAND_USE_MARKERS:
      return [state, ...action.payload]
    default:
      return state
  }
}
