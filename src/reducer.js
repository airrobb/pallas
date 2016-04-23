import { Map } from 'immutable'

const initialState = Map({
  things: 'hi'
})

export default function(state = initialState, action) {
  switch(action.type) {
    case 'SET_STATE':
      return state
  }
  return state
}
