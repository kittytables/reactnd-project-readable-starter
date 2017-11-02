export const ADD_POST = 'ADD_POST'

export function addPost( {title, body} ) {
  return {
    type: ADD_POST,
    title,
    body
  }
}
