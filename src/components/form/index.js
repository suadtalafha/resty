import './form.scss';
import { useState } from 'react';

// import axios from 'axios';

function Form (props) {

  const [method,setMethod]=useState('get')
  const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon')
  const [reqBody,setReqBody]=useState({})

 const handleSubmit = async (e) => {
    e.preventDefault();
    const request = {
      method: method,
      url: url,
      reqBody: reqBody
    };
    
    props.HandeLAPI(request);
  }
// to set methode fo event value
  const selectMethod=(e)=>{
    setMethod(e.target.value)
  }
// input url from form 
  const enterURL=(e)=>{
    setUrl(e.target.value)
  }
  const EnterReqBody=(e)=>{
    setReqBody(e.target.value)
  }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label className="methods" for='select' >
            Choose The  Method
          </label>
          <select name="select" id='select' onChange={selectMethod}>
            <option id="get" value='get'>GET</option>
            <option id="post" value='post'>POST</option>
            <option id="put" value='put'>PUT</option>
            <option id="delete" value='delete'>DELETE</option>
          </select>
          <label  >
            <span>URL: </span>
            <input name='url' type='text' onChange={enterURL} />
            <button type="submit">GO!</button>
          </label>
             {
            (method=='post'||method=='put')?<textarea id="text" name="text" rows="4" cols="50" defaultValue='' 
            onChange={EnterReqBody}>
            </textarea>:''
          }
        </form>
      </>
    );
  
}

export default Form;