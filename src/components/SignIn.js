import { Component } from 'react';
import './Style.css';

export default class SignIn extends Component {
    render() {
        return <div>
            <form id="intValidation">
                <div class="formInput">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" />
                </div>

                <div class="formInput">
                    <label for="password">Password</label>
                    <input type="text" id="password" name="password" />
                </div>

                <button onclick="validate()">Sign in</button>
            </form>
        </div>;
    }
}