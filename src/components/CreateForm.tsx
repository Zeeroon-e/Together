import React from 'react'
import './createform.scss';
function CreateForm() {
  return (
    <form className='form'>
        <div className='photo'>
            <input type="file" id='file' className='file'/>
            <label htmlFor="file">upload photo</label>
        </div>
        
      
    </form>
  )
}

export default CreateForm
