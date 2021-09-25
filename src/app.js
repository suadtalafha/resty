import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import './app.scss';
import axios from 'axios';

import History from './History';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

//  initialState to reducer
const initialState = {
  histArray: []
}
//function reducer  for new requester
function reducer(state, action) {
  switch (action.type) {
    case 'Add request':
      return {
        ...state,
        histArray: [...state.histArray, action.payload]


      };
    default:
      return state;
  }

}



function App() {
  // use Reducer to store request API 
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const [data, setdata] = useState(null);
  const [requestParams, setrequestParams] = useState({});

  //function to store information array
  function addNewHistory(info) {


    return {
      type: 'Add request',
      payload: { info }
    }

  }

  //to deal with API
  const HandeLAPI = (reqDats) => {

    setrequestParams(reqDats);
  }

  useEffect(() => {
    async function getApiData() {
      console.log(requestParams)
      if (requestParams.url) {
        const { url, method, reqBody } = requestParams

        const data = await axios.get(url);
        console.log(data.data);
        setdata(data)
        //dispatch to store requestParams in the array which we decleare
        dispatch(addNewHistory(requestParams));
      }
    }
    getApiData();
  }, [requestParams])


  return (

    <React.Fragment>
      <Header />
      {console.log('historyData', state.histArray)}
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
     
      <Form HandeLAPI={HandeLAPI} />
      <History addNewHistory={state.histArray} />
      <Results data={data} />

      <Footer />
    </React.Fragment>
  );

}

export default App;