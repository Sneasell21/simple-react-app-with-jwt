import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import MainView from '../MainView/MainView';
import * as s from './DashboardView.styles';
import {Switch, Route } from 'react-router-dom';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HomeIcon from '@material-ui/icons/Home';
import PanToolIcon from '@material-ui/icons/PanTool';
import GavelIcon from '@material-ui/icons/Gavel';


const DashboardView =() => {
    const sidebarHeader = 'Sample NavBar';
    const menuItems = [
        {name :'Home',to:'/',icon:<HomeIcon/>,subMenuItems:[ 
        {name:'NewView', to: '/newView2'} ] },
        {name :'Menu3' ,to:'/2323',icon:<AirlineSeatIndividualSuiteIcon/>,subMenuItems:[] },
        {name :'Menu4' ,to:'/232',icon:<AccessTimeIcon/>,subMenuItems:[] },
        {name :'Menu5' ,to:'/23',icon:<PanToolIcon/>,subMenuItems:[] },
        {name :'About',to:'/dashboard/about',icon:<GavelIcon/>,subMenuItems:[] }
      ];

    return (
    <s.Dashboard>
        <Sidebar sidebarHeader={sidebarHeader} menuItems={menuItems}/>
        <MainView/>
    </s.Dashboard>)
}





export default DashboardView;