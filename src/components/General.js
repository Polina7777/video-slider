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
        items:[{video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment',poster:'https://booker-viva-ie.s3.amazonaws.com/library/1339/20230726_URXkL69q8t62Ar.jpg'},
        {video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment',poster:'https://palmjumeirah.fivehotelsandresorts.com/media/7226/bhwa-launch-web_fb-without-logo-new-min.jpg?anchor=center&mode=crop&width=320&height=450&quality=80'},
        {video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment',poster:'https://booker-viva-ie.s3.amazonaws.com/library/1000/20230613_p03dklJW7DbzJh.jpg'},
        {video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment',poster:'https://booker-viva-ie.s3.amazonaws.com/library/1074/KIwWTYTg-PPEaN3zILdY.jpg'}],
        seeAll:'See All'
        },
        {
            title:'Trending',
            // items:[],
               items:[{video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment',poster:'https://booker-viva-ie.s3.amazonaws.com/library/1801/20230510_Pxq69EkIEXHq29.jpg'},
               {video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment',poster:'https://booker-viva-ie.s3.amazonaws.com/library/1764/20171211_163549553.jpg'},
               {video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment',poster:'https://booker-viva-ie.s3.amazonaws.com/library/2679/20210429_112325437.jpg'},
               {video:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',title:'Fundamentals of investment',poster:'https://booker-viva-ie.s3.amazonaws.com/library/1307/20170918_112640638.jpg'}],
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
