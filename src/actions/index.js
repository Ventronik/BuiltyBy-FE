import { request } from '../helpers'

export const DESIGN_REVIEW_MARKERS = 'DESIGN_REVIEW_MARKERS'



export const designReviewMarkers = marker => {
  return dispatch =>{
    request('/new')
    // .then(projects =>
      // console.log(projects)
      // type: DESIGN_REVIEW_MARKERS,
      // payload: projects
    // )
    .then(markers => dispatch({
      type: DESIGN_REVIEW_MARKERS,
      payload: markers.data
    }))
  }
}
