import React from 'react'

// import '../css/form.css';

const Form = () => {


  return (
    <div className='form'>
       <h3> Enquire Now</h3>
      
      <label> Username:
        <input type="text" id='uname' name="username" />
      </label> <br/>
      <label> E-mail:
        <input type="text" id='email' name="name" />
      </label> <br/>
      <label> Phone Num:
        <input type="text" id='phnum' name="name" />
      </label> <br/>

  


     
      <select tabindex="-1" aria-hidden="true" data-pc-section="select"><option value="" data-pc-section="option" selected=""> Qualification
      </option>  </select>
    
        <li role='option' class="p-dropdown-item" disabled="false" >BE</li>
      {/* <option value="BE" data-pc-section="option" selected="">  */}
      {/* </option>    */}
   



      
   
    

      
      

      
      


      <input type="submit" value="Submit" />
      
    </div>
  )
}

export default Form;




// {/*  <input type="text" placeholder='Course' aria-haspopup ='listbox' data-pc-section ='input' value='' /> */
//     //   <button class="btn btn-secondary dropdown-toggle" type="button" aria-expanded="false" tabindex="0"> Qualification
//     // </button> */}
    
// {/* <ul class="p-dropdown-items" role="listbox" data-pc-section="list">
// <li role="option" class="p-dropdown-item" aria-label="New York" aria-selected="false" data-p-highlight="false" data-p-disabled="false" data-pc-section="item">New York
// <span role="presentation" aria-hidden="true" class="p-ink" data-pc-name="ripple" data-pc-section="root" style="height: 179px; width: 179px;">
//   </span>
//   </li><li role="option" class="p-dropdown-item" aria-label="Rome" aria-selected="false" data-p-highlight="false" data-p-disabled="false" data-pc-section="item">Rome
//   <span role="presentation" aria-hidden="true" class="p-ink" data-pc-name="ripple" data-pc-section="root" style="height: 179px; width: 179px;">
//     </span></li><li role="option" class="p-dropdown-item" aria-label="London" aria-selected="false" data-p-highlight="false" data-p-disabled="false" data-pc-section="item">London
//     <span role="presentation" aria-hidden="true" class="p-ink" data-pc-name="ripple" data-pc-section="root" style="height: 179px; width: 179px;">
// </span></li><li role="option" class="p-dropdown-item" aria-label="Istanbul" aria-selected="false" data-p-highlight="false" data-p-disabled="false" data-pc-section="item">Istanbul<span role="presentation" aria-hidden="true" class="p-ink" data-pc-name="ripple" data-pc-section="root" style="height: 179px; width: 179px;"></span></li><li role="option" class="p-dropdown-item" aria-label="Paris" aria-selected="false" data-p-highlight="false" data-p-disabled="false" data-pc-section="item">Paris<span>
//  */}
