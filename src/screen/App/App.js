import React from 'react';
import { connect } from 'react-redux';
import boot from '../../boot';
import { Layout } from 'antd';
import { Debounce } from 'react-throttle';
import WindowResizeListener from 'react-window-size-listener';
import AppHoler from './commonStyle';
import Sidebar from '../SideBar';
import { toggleAll } from '../../store/app/Actions';

class App extends React.Component{
    render(){
        const appHeight = window.innerHeight;
        // const { url } = this.props.match;
        const { toggleAll } = this.props;
        const { height } = this.props;
        return <AppHoler>
            <Layout style={{ height: appHeight }}>
                <Debounce>
                    <WindowResizeListener onResize={windowSize => { 
                        toggleAll(
                            windowSize.windowWidth,
                            windowSize.windowHeight
                        ); }}/>
                </Debounce>
                <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
                    <Sidebar />
                    <Layout
                        className="isoContentMainLayout"
                        style={{
                            height: height
                        }}
                    >
                    .....
                    </Layout>
                </Layout>
            </Layout>
        </AppHoler>;
        
    }
}
console.log('boot');
boot();
// const mapDispatchToProps = (dispatch) => ({
//     toggleAll: (width, height) => {
//         dispatch(toggleAll(width, height));
//     }
// });

export default connect(
    state => ({
        auth: state.Auth,
        height: state.App.height
    }), { toggleAll })(App);
