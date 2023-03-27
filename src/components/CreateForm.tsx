import './createform.scss';
import { Key, useState, useEffect } from 'react';
import photo from '../assets/Add_round.svg'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'
import addIcon from '../assets/Add_round.svg'

function CreateForm() {
    const [leftName, setLeftName] = useState('');
    const [leftBirthDate, setLeftBirthDate] = useState('');

    const [rightName, setRightName] = useState('');
    const [rightBirthDate, setRightBirthDate] = useState('');

    const [dateTogether, setDateTogether] = useState('');

    const [allSpecDates, setAllSpecDates] = useState<any>([]);
    const [addTitle, setAddTitle] = useState('');
    const [addDate, setAddDate] = useState('');

    const navigate = useNavigate();

    

    const handleAddSpecDay = () => {
        let newSpecDay = {
            id: uuidv4(),
            title: addTitle,
            date: addDate
        }

        let updatedSpecDateArr: any = [...allSpecDates];
        updatedSpecDateArr.push(newSpecDay)
        console.log(updatedSpecDateArr)
        setAllSpecDates(updatedSpecDateArr)
    }

    const handleDeleteSpecDay = (id: string ) => {
        let filtered = allSpecDates.filter((item: { id: string; }) => item.id !== id)
        setAllSpecDates(filtered);
            
    }
    
    
    let activeUser = localStorage.getItem('activeUser')
    
    
    console.log('hi');
    async function saveToServer() {

        const specDatesJson = allSpecDates.map((item: any) => JSON.stringify(item));

        let sendData: any = {
            user: activeUser,
            data: {
                names: [leftName,rightName],
                birthdates: [leftBirthDate, rightBirthDate],
                togetherdate: dateTogether,
                specdates: specDatesJson,
            }
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sendData)
        }

        const response = await fetch('/api/files/upload', requestOptions)

        const data = await response.json();

        if (response.status === 201) {
            navigate('/home');

        } else {
            console.log(data);
        }
    }

    
    const handleSubmit =  (e:any) =>{

        
        e.preventDefault();
        
        saveToServer();
    }
   
    
  return (
    <form className='form' onSubmit={handleSubmit}>
        
        <div className='icon-container'>
            <p className='man-icon'></p>
            <p className='woman-icon'></p>

        </div>
        
        <section className='fields-container'>
            <div className='field'> 
              <div className='name'>
                  <label htmlFor="text">Name</label>
                  <input type="text"  value={leftName} onChange={(e) => setLeftName(e.target.value)}/>
              </div>

              <div className='dateofbirth'>
                  <label htmlFor="text">Birthdate</label>
                  <input type="date"  value={leftBirthDate} onChange={(e) => setLeftBirthDate(e.target.value)}/>
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
            <img src={addIcon} onClick={handleAddSpecDay} alt="" className='add-icon'/>
        </div>
        <div className='special-dates'>
            {allSpecDates.map((item: {title:string, date:string, id:string}, index: Key) => {
                return(
                    <div className='special-date-list' key={index}>
                        <h4>{item.title}</h4>
                        <h5>{item.date}</h5>
                        <p className='delete-icon' onClick={()=> handleDeleteSpecDay(item.id)}></p>
                    </div>
                )
            })}
            
        </div>

        <button type='submit'>Save</button>
      
    </form>
  )
}

export default CreateForm


