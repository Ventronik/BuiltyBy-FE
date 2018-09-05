import {
  DESIGN_REVIEW_MARKERS
} from '../actions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case DESIGN_REVIEW_MARKERS:
      return [...state, ...action.payload]
    default:
      return state
  }
}
