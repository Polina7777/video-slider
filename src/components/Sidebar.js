'use client';
import community from '../assets/image/community.svg'
import home from '../assets/image/home.svg'
import watch from '../assets/image/watch.svg'
import search from '../assets/image/search.svg'
import help from '../assets/image/help.svg'
import bell from '../assets/image/bell.svg'

export default function DefaultSidebar() {
const avatar = 'https://img.freepik.com/free-photo/portrait-handsome-unshaven-dark-skinned-male-holds-chin_273609-28348.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais';
const peopleArr = ['https://img.freepik.com/free-photo/horizontal-shot-angry-disappointed-european-woman-looks-unhappily-camera-has-grumpy-expression-hears-something-unpleasant-wears-round-spectacles-jumper-isolated-pink-backgroud_273609-58074.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697068800&semt=ais','https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg','https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg']
    const navList = [
        {name:'Home',image:home},
        {name:'Watch',image:watch},
        {name:'Community',image:community}
    ]
const navTitle = 'MAIN'
  return (
    <div className='sidebar'>
        <div className='nav-wrapper'>
        <div className='profile_wrapper'>
            <div className='bell'>
            <img src={bell} alt='bell' />
            </div>
            <img src={avatar} className='avatar' alt='avatar'/>
        </div>
        <div className='search_wrapper'>
         <input placeholder='Search'>
         </input>
         <img src={search} alt='search' className='search-img'/>
        </div>
     <nav className='stroke'>
        <p>{navTitle}</p>
        <br/>
        <ul>
      {navList.map(item=>{
        return <li className={item.name === "Community" ? 'community-li':null}>
            <div className='li-item'>
              <img src={item.image} alt='image'/>
            <a>
            {item.name}
            </a>
            </div>
          {item.name === "Community" ? 
          <ul className='community-avatars'>
         {peopleArr.map(item =>{
            return <li className='avatars'>
                    <img src={item} alt='avatar' className='avatar'/>
                </li>
         })}
          </ul>:null}
            </li>
      })}
        </ul>
     </nav>
     </div>
     <div className='help_wrapper'>
     <img src={help} alt='help'/>
     <a>Help</a>
     </div>
    </div>
  )
}
