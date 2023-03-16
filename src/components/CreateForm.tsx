import React from 'react'
import './createform.scss';
function CreateForm() {
  return (
    <form className='form'>
        <div className='photo'>
            <input type="file" id='file' className='file'/>
            <label htmlFor="file" className='file-label' > Upload Photo<p className='icon'>f</p></label>
        </div>
        <div className='icon-container'>
            <p className='man-icon'>s</p>
            <p className='woman-icon'>s</p>

        </div>
        
        <section className='fields-container'>
            <div className='field'> 
              <div className='name'>
                  <label htmlFor="text">Name</label>
                  <input type="text" />
              </div>

              <div className='dateofbirth'>
                  <label htmlFor="text">Birthdate</label>
                  <input type="date" />
              </div>
            </div>

            <div className='field'>
              <div className='name'>
                  <label htmlFor="text">Name</label>
                  <input type="text" />
              </div>

              <div className='dateofbirth'>
                  <label htmlFor="text">Birthdate</label>
                  <input type="date" />
              </div>
            </div>
        </section>

        <div className='together-date'>
            <label htmlFor="text" className='together-label'>Date of when u got together </label>
            <input type="date" />
        </div>
      
    </form>
  )
}

export default CreateForm
