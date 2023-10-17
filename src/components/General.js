'use client';
import arrowNext from '../assets/image/arrow-next.svg';
import arrowPrev from '../assets/image/arrow-prev.svg';
import ContentBox from '../components/ContentBox'


export default function defaultGeneral() {

    const tagList = [
        {name:'All'},
        {name:'Stocks'},
        {name:'ETFs'},
        {name:'Crypto'},
        {name:'NFTs'}
    ];
    const pageContentList = [
        {
        title:'New Playlist',
        // items:[],
        items:[{video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment'},{video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment'},{video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment'},{video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment'},,{video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment'}],
        seeAll:'See All'
        },
        {
            title:'Trending',
            // items:[],
               items:[{video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment'},{video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment'},{video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment'},{video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment'}],
            seeAll:'See All'
            }
    ]
const pageTitle = 'Academy'
  return (
    <div className='general'>
    <div className='page-header__wrapper'>
       <div className='title-box'>
        <img src={arrowPrev} alt='arrow-prev' className='arrow' />
        <h2>{pageTitle}</h2>
        </div>
        <nav className='tag-nav'>
            <ul className='tag'>
                {tagList.map((item,index)=>{
                    return <li key={index}><a>{item.name}</a></li>
                })}
            </ul>
        </nav>
    </div>

    <div className='general-content__wrapper'>
{pageContentList.map((item,index)=>{
    return <ContentBox item={item} key={index}/>
})}
    </div>
    </div>
  )
}
