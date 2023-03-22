import {useState} from 'react';
import Header from '../components/Header';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import signTeller from 'sign-teller';
import './home.scss'
import icon1 from '../assets/man_icon.svg';
import icon2 from '../assets/woman_icon.svg';


function Home() {
  const [name1, setName1] =useState('');
  const [name2, setName2] =useState('');
  const [dateTogether, setDateTogether] = useState('');
  const [months, setMonths] = useState<number>();
  const [days, setDays] = useState<number>();
  const [weeks, setWeeks] = useState<number>();




  const displayData = (data:any) => {
    // set names
    setName1(data.names[0])
    setName2(data.names[1])
    /// date together calculate
    
    setDateTogether(data.togetherdate)
    const date1 = dayjs(dateTogether)
    
    const diffMonths = date1.diff(dayjs(), 'M' , true)
    const diffDays = date1.diff(dayjs(), 'd' , true)
    const diffWeeks = date1.diff(dayjs(), 'w' , true)

    function correctnumber (value:any){
      let toNumber = parseInt(value);
      let toPositive = Math.abs(toNumber);
      return toPositive
    }
    setDays(correctnumber(diffDays));
    setWeeks(correctnumber(diffWeeks));

    setMonths(correctnumber(diffMonths));
    console.log("display",data);
    console.log("date 1 ==",date1)
    console.log("Calc",diffMonths)

    const dateOfBirth = { day: 4, month: 7 }
    const signDetails = signTeller(dateOfBirth);
    console.log(signDetails.sign)

    
  }

  const fetchData = async () => {
    const response = await fetch('/api/files/getfiles', { mode: 'cors' });
    const data = await response.json();
    let activeUser = localStorage.getItem('activeUser');
    const found = data.filter((data: { user: string | null; }) => data.user === activeUser)
    if (found.length > 0) {
      console.log('found!', found[0].data.names[0])
      displayData(found[0].data)
    } else {
      console.log('didnt find');
    }
    

    

  }

  useEffect(() => {
    fetchData()
}, );
  return (
    <div>
      <nav className='header-display'>
        <Header />
      </nav>
      <main className='content-container'>
        <div className='info-container'>
          <div className='photo'>
            <img src="" alt="" />
          </div>
          <div className='icon-container'>
            <img src={icon1} alt="maleicon" />
            <h2>{name1} & {name2}</h2>
            <img src={icon2} alt="femaleicon" />
          </div>
          <div className='together-container'>
            <h3>YOU HAVE BEEN TOGETHER FOR</h3>
            <div className='months-and-days'>
              <h5>{months} Months and {days} days</h5>
            </div>
            <h5 className='weeks'>{weeks} Weeks</h5>
          </div>
          <div className='zodiac-signs-container'>
            <h3>ZODIAC SIGNS</h3>
            <div className='zodiac-signs'>
              <div className='zodiac'>
                <img src="" alt="" />
                <h5>Aries</h5>
              </div>
              <div className='zodiac'>
                <img src="" alt="" />
                <h5>Aries</h5>
              </div>
            </div>
          </div>
        </div>
      </main>
    
    </div>
  )
}

export default Home
