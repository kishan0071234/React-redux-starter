import axios from 'axios';
import * as actions from '../action/rootAction'

export const getData=  payload => {
    axios.get('https://api.mocki.io/v1/b043df5a')
        .then((response) => actions.getDataSuccess({data:response.data}))
        .catch((err) => getDataError({data:err}));
}