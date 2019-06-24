import axios from 'axios';

import { GET_PARTNER, PARTNER_ERROR } from './types';

export const getPartner = () => async dispatch => {
  try {
    const res = await axios.get('/api/partners?lng=-80&lat=25');
    console.log('hllmsldkjf', res);
    dispatch({ type: GET_PARTNER, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PARTNER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
