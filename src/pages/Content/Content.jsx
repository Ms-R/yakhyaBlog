import React,{useEffect} from 'react'
import './Content.scss'

const Content = ({open}) => {
    useEffect(() => {
        
        
      }, []);
  
   
    return (
        <div className='content'>
            <div className="content__block">
                <div className="content__block__text">
                    <h1>Hi, <br/> I`am Yakhya<br/> web developer</h1>
                    <span>Frontend Developer</span><br/>
                    <button>My Works</button>
                </div>
            </div>
            <div className="content__effect">
                <span>ReactJs</span>
                <span>Html/Css/Sass</span>
                <span></span>
                <span>JavaScript</span>
            </div>
        </div>
    )
}

export default Content
