import React from 'react';
import { connect } from 'react-redux';
import SignUpStyleWrapper from './signup.style';
import { Link, Redirect } from 'react-router-dom';
import Input from '../../../component/input';
import Checkbox from '../../../component/checkbox';
import Button from '../../../component/button';
import IntlMessages from '../../../component/intlMessages';
import { fireRegister } from '../../../store/auth/Actions';


class Signup extends React.Component{
    constructor(props){
        super(props);
        this.handleSignin = this.handleSignin.bind(this);
        this.state = {
            errorHint: null
        };
    }
    
    handleSignin(){
        const { fireRegister } = this.props;
        const firstName = this.firstNameInput.input.value;
        const lastName = this.lastNameInput.input.value;
        const emailId = this.emailInput.input.value;
        const password = this.passwordInput.input.value;
        const passwordConfirm = this.passwordConfirmInput.input.value;
        fireRegister(firstName, lastName, emailId, password, passwordConfirm);    
    }

    render(){
        const from = { pathname: '/app' };
        const { isLoggedIn, signupError ,errorHint } = this.props;
        if( isLoggedIn ){
            return <Redirect to = {from}/>;
        }
        const errorHintComponent = <p  className="isoHelperText">
            <IntlMessages id={errorHint} />
        </p>;
        return (
            <SignUpStyleWrapper className="isoSignUpPage">
                <div className="isoSignUpContentWrapper">
                    <div className="isoSignUpContent">
                        <div className="isoLogoWrapper">
                            <Link to="/dashboard">
                                <IntlMessages id="page.signUpTitle" />
                            </Link>
                        </div>

                        <div className="isoSignUpForm">
                            <div className="isoInputWrapper isoLeftRightComponent">
                                <Input innerRef = {node => {this.firstNameInput = node;}} size="large" placeholder="First name" />
                                <Input innerRef = {node => {this.lastNameInput = node;}} size="large" placeholder="Last name" />
                            </div>

                            <div className="isoInputWrapper">
                                <Input innerRef = {node => {this.emailInput = node;}} size="large" placeholder="Email" />
                            </div>

                            <div className="isoInputWrapper">
                                <Input innerRef = {node => {this.passwordInput = node;}} size="large" type="password" placeholder="Password" />
                            </div>

                            <div className="isoInputWrapper">
                                <Input
                                    innerRef = {node => {this.passwordConfirmInput = node;}}
                                    size="large"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            { signupError? errorHintComponent:<p></p>}
                            <div className="isoInputWrapper" style={{ marginBottom: '50px' }}>
                                <Checkbox>
                                    <IntlMessages id="page.signUpTermsConditions" />
                                </Checkbox>
                            </div>

                            <div className="isoInputWrapper">
                                <Button type="primary"  onClick={this.handleSignin}>
                                    <IntlMessages id="page.signUpButton" />
                                </Button>
                            </div>
          
                            <div className="isoInputWrapper isoCenterComponent isoHelperWrapper">
                                <Link to="/signin">
                                    <IntlMessages id="page.signUpAlreadyAccount" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SignUpStyleWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn:state.Auth.idToken !==null ? true : false,
        signupError:state.Auth.signupError,
        errorHint:state.Auth.errorHint !== null ? state.Auth.errorHint:''
    };
};

export default connect( mapStateToProps, { fireRegister } )(Signup);
