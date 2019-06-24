import axios from 'axios';

import { GET_PARTNER, PARTNER_ERROR } from './types';

export const getPartner = () => async dispatch => {
  try {
    //Making a call to the api endpoint to get the partner nearest to a pick point
    const res = await axios.get('/api/partners?lng=-80&lat=25');

    dispatch({ type: GET_PARTNER, payload: res.data });
  } catch (err) {
    dispatch({
      type: PARTNER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
