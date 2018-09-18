import React, { Component } from 'react';
import { connect } from 'react-redux';
import SidebarWrapper from './sidebar.style';
import { Link } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import Scrollbars from '../../component/customScrollBar';
import Logo from '../../component/logo';
import Menu from '../../component/menu';
import options from './options';
import IntlMessages from '../../component/IntlMessages';
import 'antd/dist/antd.css'; 

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
class Sidebar extends Component{
    constructor(props){
        super(props);
    }
    getMenuItem({singleOption, submenuStyle, submenuColor}){
        const { key, label, leftIcon, children } = singleOption;
        console.log(leftIcon);
        const url = '/';
        if(children)
            return <SubMenu key = {key} title = {
                <span className="isoMenuHolder" style={submenuColor}>
                    <Icon style = { {color: 'white'}} theme = {'outlined'} type = {leftIcon} />
                    <span className="nav-text">
                        <IntlMessages id={label} />
                    </span>
                </span>
            }>
                {children.map(child => {
                    return (
                        <Menu.Item style={submenuStyle} key={child.key}>
                            <Link style={submenuColor} to = {'/'} >
                                <IntlMessages id={child.label} />
                            </Link>
                        </Menu.Item>
                    );
                })}
            </SubMenu>;
        return (
            <Menu.Item key={key}>
                <Link  to = '/'>
                    <span className="isoMenuHolder" style={submenuColor}>
                        <Icon style = { {color: '#788195'}} type = {leftIcon} theme = {'outlined'}/>
                        <span className="nav-text">
                            <IntlMessages id={label} />
                        </span>
                    </span>
                </Link>
            </Menu.Item>
        );
    }
    render(){
       
        const { collapsed } = this.props;
        const mode = collapsed === true ? 'vertical' : 'inline';
        const submenuStyle = {
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: '#788195'
        };
        const submenuColor = {
            color: '#788195'
        };
        return(<SidebarWrapper>
            <Sider
                trigger={null}
                collapsible={true}
                collapsed={collapsed}
                width={240}
                className="isomorphicSidebar">
                <Logo collapsed={collapsed}/>
                <Scrollbars >
                    <Menu
                        theme="dark"
                        className="isoDashboardMenu"
                        mode={mode}
                    >{ options.map(singleOption => 
                            this.getMenuItem({ submenuStyle, submenuColor, singleOption }))}
                    </Menu>
                </Scrollbars>
            </Sider>
        </SidebarWrapper>);
    }
}
export default connect(state => ({
    height: state.App.height,
    collapsed: state.App.collapsed
}), null)(Sidebar);