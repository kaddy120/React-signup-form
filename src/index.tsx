import * as React from 'react';
import * as ReactDom from 'react-dom';
import SiginUp from './components/signup/signup'
import './layout.css'

const Root = document.querySelector('#root');

ReactDom.render(
    <div className="wrepper">
        <div className="left">
            <h1>Learn to code by watching others </h1>
            <p>see how experienced developer solve problems in real-time.
                watching scripted tutorial is great, but understanding how 
                developer think is invaluable.</p>
        </div>
        <div className="right">
            <SiginUp />
        </div>
    </div>, Root);