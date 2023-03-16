import React from 'react'
import './createform.scss';
function CreateForm() {
  return (
    <form className='form'>
        <div className='photo'>
            <input type="file" id='file' className='file'/>
            <label htmlFor="file" className='file-label' > Upload Photo<p className='icon'>f</p></label>
        </div>
        <section className='fields-container'>

            <div className='field'>
              <p className='man-icon'></p>
              <div className='name'>
                  <label htmlFor="text">Name</label>
                  <input type="text" />
              </div>

              <div className='dateofbirth'>
                  <label htmlFor="text">Birthdate</label>
                  <input type="text" />
              </div>
              
            </div>
            <div className='field'>
              <p className='man-icon'></p>
              <div className='name'>
                  <label htmlFor="text">Name</label>
                  <input type="text" />
              </div>

              <div className='dateofbirth'>
                  <label htmlFor="text">Birthdate</label>
                  <input type="text" />
              </div>
              
            </div>
            
        </section>
        
      
    </form>
  )
}

export default CreateForm
