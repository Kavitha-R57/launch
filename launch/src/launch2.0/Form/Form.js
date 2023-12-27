import React from 'react'

import '../css/form.css';
const Form = () => {


  return (
    <div className='form'>
       <h3> Enquire Now</h3>
      <form>
      <label> Username:
        <input type="text" id='uname' name="username" />
      </label> <br/>
      <label> E-mail:
        <input type="text" id='email' name="name" />
      </label> <br/>
      <label> Phone Num:
        <input type="text" id='phnum' name="name" />
      </label> <br/>
      <label> Course:
        <input type="text" id='address' name="name" />
      </label> <br/>
      
      


      <input type="submit" value="Submit" />
      </form>~
    </div>
  )
}

export default Form;