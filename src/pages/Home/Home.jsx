import React, { useRef, useEffect } from 'react';
import "./Home.css"
import { ReactComponent as SideBlob } from "../../assets/sideBlob.svg";

const Home = () => {

    const title = useRef(null)
    const cursor = useRef(null)

    useEffect(() => {
        //every 10 seconds, have 'type' animation run to update title text
        const titleChangeInterval = setInterval(() => {
            switch(title.current.innerText){
                case "Hey":
                    //change title to Hello:
                    //  delete all the text but the 'H'
                    title.current.innerText = 'He'
                    setTimeout(() => {title.current.innerText = 'H'}, 300)
                    setTimeout(() => {title.current.innerText = 'He'}, 530)
                    setTimeout(() => {title.current.innerText = 'Hel'}, 750)
                    setTimeout(() => {title.current.innerText = 'Hell'}, 900)
                    setTimeout(() => {title.current.innerText = 'Hello'}, 1200)
                    break;
                case "Hello":
                    //change title to Howdy
                    title.current.innerText = 'Hell'
                    setTimeout(() => {title.current.innerText = 'Hel'}, 300)
                    setTimeout(() => {title.current.innerText = 'He'}, 530)
                    setTimeout(() => {title.current.innerText = 'H'}, 750)
                    setTimeout(() => {title.current.innerText = 'Ho'}, 900)
                    setTimeout(() => {title.current.innerText = 'How'}, 1100)
                    setTimeout(() => {title.current.innerText = 'Howd'}, 1500)
                    setTimeout(() => {title.current.innerText = 'Howdy'}, 1800)
                    break;
                case "Howdy":
                    //change title to Hey
                    title.current.innerText = 'Howd'
                    setTimeout(() => {title.current.innerText = 'How'}, 300)
                    setTimeout(() => {title.current.innerText = 'Ho'}, 530)
                    setTimeout(() => {title.current.innerText = 'H'}, 750)
                    setTimeout(() => {title.current.innerText = 'He'}, 900)
                    setTimeout(() => {title.current.innerText = 'Hey'}, 1200)
                    break;
                default:
                    break;
            }
        }, 5500);
        //cursor flash after title
        const cursorDisplayInterval = setInterval(() => {
            
            if(cursor.current.innerText === "_"){
                cursor.current.innerText = ""
            } else {
                cursor.current.innerText = "_"
            }
        }, 1000);

        //remove the intervals upon dismount
        const intervals = [titleChangeInterval, cursorDisplayInterval]
        return () => {
            for(let i = 0; i < intervals.length; i++){
                clearInterval(intervals[i]);
            }
        }
        //return () => clearInterval(titleChangeInterval);
    })

    return(
        <div className='Home-container'>

            <div className='Home-text'>
                <div className='Home-title-text'>
                    <span ref={title}>Hey</span>
                    <span ref={cursor}>_</span>
                </div>
                
                <div className='Home-bottom-text'>
                    <p>I'm Leo, a Full Stack developer & Cloud Architect</p>
                    <p>I use this site to showcase my work</p>
                </div>
            </div>

            <SideBlob id='sideBlob' />

        </div>
    );
}

export default Home;