import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

const RestrictedRoute = ({component: Component, isLoggedIn, ...rest}) => (
    <Route {...rest} render= { (props) => {

        return isLoggedIn? (
            < Component {...props} />)
            :(<Redirect to = {{pathname: '/signin',
                state: {
                    from: props.location }
            }} />); }
    } />
);

const PublicRoutes = ({history, isLoggedIn}) => {
    return(
        <ConnectedRouter history = {history} >
            <div>
                <Route exact path={'/'} component = { (props) => { console.log(props); return <div> Signin </div>;}}/>
                <Route exact path={'/signin'} component = { (props) => { console.log(props); return <div> Signin </div>;}}/>
                <RestrictedRoute path={'/dashboard'} component = {(props) => { console.log(props); return <div> App </div>;}} isLoggedIn = {isLoggedIn}/>
            </div>
        </ConnectedRouter>
    );
};

export default connect(state => ({
    isLoggedIn: state.Auth.idToken !== null
}))(PublicRoutes);
