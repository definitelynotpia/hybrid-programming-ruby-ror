import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

export default class Navbar extends Component {
    render() {
        return <div className='container'>
            <ul class="nav nav-pills justify-content-center">
                <Link to="/" style={{ textDecoration: 'none' }}><li class="nav-item">
                    <h5 class="nav-link">Home</h5>
                </li></Link>
                <Link to="/signin" style={{ textDecoration: 'none' }}><li class="nav-item">
                    <h5 class="nav-link">Sign in</h5>
                </li></Link>
                <Link to="/signup" style={{ textDecoration: 'none' }}><li class="nav-item">
                    <h5 class="nav-link">Sign up</h5>
                </li></Link>
            </ul>
        </div>;
    }
}