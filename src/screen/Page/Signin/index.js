import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../../store/auth/Actions';
import { Redirect, Link } from 'react-router-dom';
import SigninStyleWrapper from './Signin.style';
import IntlMessages from '../../../component/intlMessages';
import Input from '../../../component/input';
import Checkbox from '../../../component/checkbox';
import Button from '../../../component/button';

class Signin extends React.Component{
    
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(){
        const {login} = this.props;  
        const emailId = this.emailInput.input.value;
        const password = this.passwordInput.input.value;
        login(emailId, password);
        this.props.history.push('/app');
    }
    render(){
        const from = { pathname: '/app' };
        const { isLoggedIn, accessDenied } = this.props;
        if( isLoggedIn ){
            return <Redirect to = {from}/>;
        }
        const accessDeniedHint =  <p  className="isoHelperText">
            <IntlMessages id="page.signInPreview" />
        </p>;

        return (
            <SigninStyleWrapper className="isoSignInPage"> 
                <div className="isoLoginContentWrapper">
                    <div className="isoLoginContent"> 
                        <div className="isoLogoWrapper">
                            <Link to="/app">
                                <IntlMessages id="page.signInTitle" /> 
                            </Link>
                        </div>
                        <div className="isoSignInForm">
                               
                            <div className="isoInputWrapper">
                                <Input innerRef = {node => {this.emailInput = node;}} size="large" placeholder="Email" />
                            </div>

                            <div className="isoInputWrapper">
                                <Input innerRef = {node => {this.passwordInput = node;}}  size="large" type="password" placeholder="Password" />
                            </div>
                            
                            {accessDenied? accessDeniedHint : <p></p>}
         
                            <div className="isoInputWrapper isoLeftRightComponent">
                                <Checkbox>
                                    <IntlMessages id="page.signInRememberMe" />
                                </Checkbox>
                                <Button type="primary" onClick={this.handleLogin}>
                                    <IntlMessages id="page.signInButton" />
                                </Button>
                            </div>

                            <div className="isoCenterComponent isoHelperWrapper">
                                <Link to="/forgotpassword" className="isoForgotPass">
                                    <IntlMessages id="page.signInForgotPass" />
                                </Link>
                                <Link to="/signup">
                                    <IntlMessages id="page.signInCreateAccount" />
                                </Link>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </SigninStyleWrapper>
        );
         
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn:state.Auth.idToken !==null ? true : false,
        accessDenied:state.Auth.loginError
    };
};

export default connect( mapStateToProps, { login } )(Signin);