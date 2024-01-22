import { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return <div className='container'>
            <ul class="nav nav-pills justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">ContactUs</a>
                </li>
            </ul>
        </div>;
    }
}