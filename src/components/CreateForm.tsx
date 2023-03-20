import './createform.scss';
import { Key, useState } from 'react';
import photo from '../assets/Add_round.svg'

function CreateForm() {
    const [leftName, setLeftName] = useState('');
    const [leftBirthDate, setLeftBirthDate] = useState('');

    const [rightName, setRightName] = useState('');
    const [rightBirthDate, setRightBirthDate] = useState('');

    const [dateTogether, setDateTogether] = useState('');

    const [ allSpecDates, setAllSpecDates] = useState<any>([]);
    const [addTitle, setAddTitle] = useState('');
    const [addDate, setAddDate] = useState('');

    interface specDate {
        title: string;
        date: string;
    }

    const handleAddSpecDay = () => {
        let newSpecDay = {
            title: addTitle,
            date: addDate
        }

        let updatedSpecDateArr: any = [...allSpecDates];
        updatedSpecDateArr.push(newSpecDay)
        setAllSpecDates(updatedSpecDateArr)
    }

    const handleDeleteSpecDay = (index: any ) => {
         let reducedSpecDate = [...allSpecDates];
         reducedSpecDate.splice(index);
         setAllSpecDates(reducedSpecDate);
        console.log(index)    
    }
    
    
    let activeUser = localStorage.getItem('activeUser')

    const handleSubmit = (e:any) =>{
        e.preventDefault();
    }

    const handleFileUpload = async (e:any) => {

    }
  return (
    <form className='form' onSubmit={handleSubmit}>
        <div className='photo'>
            <input type="file" id='file-upload' name="image" className='file' accept='.jpeg, .png, .jpg' onChange={(e) => handleFileUpload(e)} />
            <label htmlFor="file-upload" className='custom-file-upload'>
                <img src={photo} alt="add photo" />
            </label>
        </div>
        <div className='icon-container'>
            <p className='man-icon'></p>
            <p className='woman-icon'></p>

        </div>
        
        <section className='fields-container'>
            <div className='field'> 
              <div className='name'>
                  <label htmlFor="text">Name</label>
                  <input type="text" required value={leftName} onChange={(e) => setLeftName(e.target.value)}/>
              </div>

              <div className='dateofbirth'>
                  <label htmlFor="text">Birthdate</label>
                  <input type="date" required value={leftBirthDate} onChange={(e) => setLeftBirthDate(e.target.value)}/>
              </div>
            </div>

            <div className='field'>
              <div className='name'>
                  <label htmlFor="text">Name</label>
                  <input type="text" value={rightName} onChange={(e) => setRightName(e.target.value)}/>
              </div>

              <div className='dateofbirth'>
                  <label htmlFor="text">Birthdate</label>
                  <input type="date" value={rightBirthDate} onChange={(e) => setRightBirthDate(e.target.value)}/>
              </div>
            </div>
        </section>

        <div className='together-date'>
            <label htmlFor="text" className='together-label'>Date of when u got together </label>
            <input type="date" value={dateTogether} onChange={(e) => setDateTogether(e.target.value)}/>
        </div>
        <div className='own-date-container'>
            <h4 className='own-date-title'>Add your own special day</h4>
            <div className='add-field'>
                <label htmlFor="">Title</label>
                <input type="text" value={addTitle} onChange={(e) => setAddTitle(e.target.value)}/>
                <label htmlFor="">Date</label>
                <input type="date" value={addDate} onChange={(e) => setAddDate(e.target.value)}/>
            </div>
            <p className='add-icon' onClick={handleAddSpecDay}></p>
        </div>
        <div className='special-dates'>
            {allSpecDates.map((item: {title:string, date:string}, index: Key) => {
                return(
                    <div className='special-date-list' key={index}>
                        <h4>{item.title}</h4>
                        <h5>{item.date}</h5>
                        <p className='delete-icon' onClick={()=> handleDeleteSpecDay(index)}></p>
                    </div>
                )
            })}
            
        </div>

        <button type='submit'>Save</button>
      
    </form>
  )
}

export default CreateForm

function convertToBase64(file: any){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);    
        };
        fileReader.onerror = (error) => {
            reject(error);
        }

    })
}
