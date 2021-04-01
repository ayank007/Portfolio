import { React } from 'react';
import DelayLink from 'react-delay-link';
import './p4.css';
const P4 = ({props,doo}) => {
    return (
    	<div className="project hello" id='project4'>
        <DelayLink to='/projectDetails4' delay={1200}>
            <div className='project4 hello' onClick={doo}>
                <div className='project4con'>
                    <img className='img1' src='https://lh3.googleusercontent.com/6ZqZTWP3FLPJ5DL46mLzapdrNSijM1lJwrrxlf0C8IpNoSSuB8caNoS501s2dVKeJRJsB2B9EEBZhdP1_TBUK_B9LN4BWTNJXh6BA8D-gYDYMmsknAHS0De3lPeA6SMAfr0_47gcXw=w2400' />
                    <img className='img2' src='https://lh3.googleusercontent.com/RxiFjV1azwxuf9k8mG8jFzB_uKyOv9MvJV_MFLzVgyhCktFIwLjWWxzumbFyg3E_9mq2vm-TmDAGrQNpmYNcIlW5pxqB4WAXOR-rxH73kcQ2BNf75MO0Hov1SFPpdylia_wUUEUE4A=w2400' />
                </div>
            </div>
        </DelayLink>
            <h5>Travel Agency</h5>
            <p>( figma, html, css, api )</p>
    	</div>
    );
}

export default P4;