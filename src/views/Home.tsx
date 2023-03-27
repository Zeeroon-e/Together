import { Key, useState } from 'react';
import Header from '../components/Header';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import './home.scss'
import icon1 from '../assets/man_icon.svg';
import icon2 from '../assets/woman_icon.svg';


function Home() {
  const [name1, setName1] =useState('');
  const [name2, setName2] =useState('');
  const [months, setMonths] = useState<number>();
  const [days, setDays] = useState<number>();
  const [weeks, setWeeks] = useState<number>();
  const [zodiac1, setZodiac1] = useState('');
  const [zodiac2, setZodiac2] = useState('');
  const [specDates, setSpecDates] = useState([]);




  const displayData = (data:any) => {
    // set names
    setName1(data.names[0])
    setName2(data.names[1])
    /// date together calculate
    
    const date1 = dayjs(data.togetherdate)
    

    
    const diffMonths = date1.diff(dayjs(), 'M' , true)
    const diffDays = date1.diff(dayjs(), 'd' , true)
    const diffWeeks = date1.diff(dayjs(), 'w' , true)
    console.log("dddd",diffMonths)


    function correctnumber (value:any){
      let toNumber = parseInt(value);
      let toPositive = Math.abs(toNumber);
      return toPositive
    }
    setDays(correctnumber(diffDays));
    setWeeks(correctnumber(diffWeeks));

    setMonths(correctnumber(diffMonths));

    // set spec dates
    // let parsedG = JSON.parse(data.specdates)
    // console.log(parsedG[0]);
    // setSpecDates(parsedG)
    const specDatesJson = data.specdates.map((item: any) => JSON.parse(item));
    setSpecDates(specDatesJson)
    console.log(specDates)


    
    
    const findSign = (date:any) => {
      const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
      const signs = ["empty","Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", ];
      // let month = date.getMonth();
      // let day = date.getDate();
      
      const sliced = date.slice(5,7);
      let month = sliced;
      
      const slicedDay = date.slice(8,10)
      
      let day = slicedDay;
      if (sliced.includes(0)) {
        
        month = sliced.slice(1,2)
        
      }
      
      if(month == 0 && day <= 20){
        month = 11;
      }else if(day < days[month]){
        month--;
      };
      return signs[month];
    };
    setZodiac1(findSign(data.birthdates[0]))
    setZodiac2(findSign(data.birthdates[1]))
  
  }

  const fetchData = async () => {
    const response = await fetch('/api/files/getfiles', { mode: 'cors' });
    const data = await response.json();
    let activeUser = localStorage.getItem('activeUser');
    const found = data.filter((data: { user: string | null; }) => data.user === activeUser)
    if (found.length > 0) {
      
      displayData(found[0].data)
    } else {
      console.log('didnt find data');
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      
        <Header />
      
      <main className='content-wrapper '>
        <div className='info-container'>
          <div className='icon-container'>
            <img src={icon1} alt="maleicon" />
            <h2>{name1} & {name2}</h2>
            <img src={icon2} alt="femaleicon" />
          </div>
          <div className='together-container'>
            <h3>YOU HAVE BEEN TOGETHER FOR</h3>
            <div className='months-and-days'>
              <h5> {months} Months <br /> {days} Days</h5>
            </div>
            <h5 className='weeks'>{weeks} Weeks</h5>
          </div>
          <div className='zodiac-signs-container'>
            <h3>ZODIAC SIGNS</h3>
            <div className='zodiac-signs'>
              <div className='zodiac'>
                <h4>{zodiac1} & {zodiac2}</h4>
              </div>
            </div>
          </div>
          <div className='spec-dates'>
            <div>
            {specDates.map((item: {title:string, date:string, id:string}, index: Key) => {
                return(
                    <div className='special-date-list' key={index}>
                      <div className='list'>
                        <h4 className='list-title'>{item.title} </h4><h4 className='list-date'>{item.date}</h4>  
                      </div>
                    </div>
                )
            })}
              <h4>  </h4>
            </div>
          </div>
        </div>
      </main>
    
    </>
  )
}

export default Home
