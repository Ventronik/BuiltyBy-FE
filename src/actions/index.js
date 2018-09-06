import { request } from '../helpers'

export const DESIGN_REVIEW_MARKERS = 'DESIGN_REVIEW_MARKERS'
export const LAND_USE_MARKERS = 'LAND_USE_MARKERS'

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
