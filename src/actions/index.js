import { request } from '../helpers'

export const DESIGN_REVIEW_MARKERS = 'DESIGN_REVIEW_MARKERS';
export const LAND_USE_MARKERS = 'LAND_USE_MARKERS';
export const ELECTRICAL_PERMIT_MARKERS = 'ELECTRICAL_PERMIT_MARKERS';
export const BUILDING_MARKERS = 'BUILDING_MARKERS';
export const ELECTRICAL_MARKERS = 'ELECTRICAL_MARKERS';
export const TRADE_MARKERS = 'TRADE_MARKERS';
export const COMPANY_MARKERS = 'COMPANY_MARKERS';

export const designReviewMarkers = marker => {
  return dispatch =>{
    request('/new')
    .then(markers => dispatch({
      type: DESIGN_REVIEW_MARKERS,
      payload: markers.data
    }))
  }
}

export const landUseMarkers = marker => {
  return dispatch =>{
    request('/permits/landuse')
    .then(markers => dispatch({
      type: LAND_USE_MARKERS,
      payload: markers.data
    }))
    .catch(console.error)
  }
}

export const buildingMarkers = marker => {
  return dispatch =>{
    request('/permits/building')
    .then(markers => dispatch({
      type: BUILDING_MARKERS,
      payload: markers.data
    }))
    .catch(console.error)
  }
}

export const electricalPermitsMarkers = marker => {
  return dispatch =>{
    request('/permits/electrical')
    .then(markers => dispatch({
      type: ELECTRICAL_MARKERS,
      payload: markers.data
    }))
    .catch(console.error)
  }
}

export const tradeMarkers = marker => {
  return dispatch =>{
    request('/permits/trade')
    .then(markers => dispatch({
      type: TRADE_MARKERS,
      payload: markers.data
    }))
    .catch(console.error)
  }
}

export const companyMarkers = marker => {
  return dispatch =>{
    request('/companies')
    .then(markers => dispatch({
      type: COMPANY_MARKERS,
      payload: markers.data
    }))
    .catch(console.error)
  }
}
