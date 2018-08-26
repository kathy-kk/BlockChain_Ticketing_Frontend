import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/auth/Actions';
import { Redirect } from 'react-router-dom';

class Signin extends React.Component{
    
    constructor(props){
        super(props);
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(){
        const {login} = this.props;  
        const emailId = this.emailInput.current.value;
        const password = this.passwordInput.current.value;
        login(emailId, password);
       this.props.history.push('/app');
    }
    render(){
        const from = { pathname: '/app' };
        const { isLoggedIn } = this.props;
        if( isLoggedIn ){
            return <Redirect to = {from}/>;
        }
        return (<div>
            <div> Email: <input ref= {this.emailInput}  type= "text"  /></div>
            <div> Password: <input  ref= { this.passwordInput } type="text" /></div>
            <div> <button onClick = {this.handleLogin}>SignIn</button></div>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn:state.Auth.idToken !==null ? true : false
    };
};

export default connect( mapStateToProps, { login } )(Signin);