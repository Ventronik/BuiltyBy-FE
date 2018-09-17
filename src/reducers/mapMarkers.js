import {
  DESIGN_REVIEW_MARKERS,
  LAND_USE_MARKERS,
  BUILDING_MARKERS,
  ELECTRICAL_MARKERS,
  TRADE_MARKERS,
  COMPANY_MARKERS
} from '../actions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case DESIGN_REVIEW_MARKERS:
      return [ ...action.payload]
    case LAND_USE_MARKERS:
      return [ ...action.payload]
    case BUILDING_MARKERS:
      return [ ...action.payload]
    case ELECTRICAL_MARKERS:
      return [ ...action.payload]
    case TRADE_MARKERS:
      return [ ...action.payload]
    case COMPANY_MARKERS:
      return [ ...action.payload]
    default:
      return state
  }
}
