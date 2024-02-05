import { Component } from 'react';
import './Style.css';
import '../App.css';
import logo from '../cute_cat.gif';

export default class Content extends Component {
    render() {

        return <div>
            <p className='title'>LOREM IPSUM</p>
            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices dui eget nulla dapibus dignissim ac eget libero. Sed placerat dapibus dolor eget sagittis. Phasellus lacus magna, dapibus in lectus eu, semper porttitor velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur venenatis odio et nisi volutpat, non blandit mauris sodales. Nunc porttitor vestibulum massa a luctus. Integer porttitor ornare turpis at efficitur. Fusce eget nibh mollis, placerat arcu et, mattis libero. Aliquam id libero sed leo finibus viverra. Etiam id hendrerit enim. Aenean tincidunt a magna ut viverra. Donec viverra nisl quis ligula aliquam tincidunt. Morbi et enim dui.</p>
            <img src={logo} className='App-logo' alt='cute cat!' />
            <p>
                HENLO IT ME A <b>CATS!</b>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                meow
            </a>
        </div>;

    }
}