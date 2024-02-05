import { Component } from 'react';
import './Style.css';

export default class SignUp extends Component {
    render() {
        return <div className='container'>
            <form id="intValidation">
                <div class="formInput">
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" />
                </div>

                <div class="formInput">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" />
                </div>

                <div class="formInput">
                    <label for="password">Password</label>
                    <input type="text" id="password" name="password" />
                </div>

                <button onclick="validate()">Sign up</button>
            </form>
        </div>;
    }
}