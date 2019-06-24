import { GET_PARTNER, PARTNER_ERROR } from '../actions/types';
const initialState = {
  partner: [],
  partners: [],
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PARTNER:
      return {
        ...state,
        partner: payload
      };
    case PARTNER_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
