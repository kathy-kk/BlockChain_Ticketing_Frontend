import React from 'react';
import { connect } from 'react-redux';
import boot from '../../boot';

class App extends React.Component{
    render(){
        return <div>App</div>;
    }
}
console.log('boot');
boot();
export default App;
