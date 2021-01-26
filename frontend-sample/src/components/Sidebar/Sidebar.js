 import React, {useState,useEffect} from 'react'
 import * as s from './Sidebar.styles'
 import { Link } from 'react-router-dom';
 
 const Sidebar = props => {

    const {
        sidebarHeader='',
        menuItems =[] 
    
    } = props; 

    const [selected,setSelectedMenuItem]= useState(menuItems[0].name) 
    const [isSidebarOpen,setSidebarState] = useState(true);
    const handleMenuItemClick = name => {
        setSelectedMenuItem(name);
    }
    useEffect( () => {
        const updateWindowWidth = () => {
            console.log(`Window Width ${window.innerWidth}`)
            if (window.innerWidth < 1280) 
            setSidebarState(false);
            else 
            setSidebarState(true);
        }
        window.removeEventListener('resize',updateWindowWidth);
        return () => window.removeEventListener('resize',updateWindowWidth);
    },[])
    const menuItemsJSX = menuItems.map((item,index)=>{
        const isItemSelected = selected === item.name;
        return (
            <Link key ={index}  to={item.to} style={{textDecoration:'none'}}>
            <s.menuItem 
            selected ={isItemSelected}
            isSidebarOpen={isSidebarOpen}
            onClick={()=>handleMenuItemClick(item.name)}>   
             <s.Icon>{item.icon}</s.Icon>
             <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>          
            </s.menuItem>
            </Link>
        )
    })
console.log( `Is sidebar open ${isSidebarOpen}`)
     return (       
<s.SidebarContainer isSidebarOpen ={isSidebarOpen}>
<s.SidebarHeaderImgContainer >
<s.SidebarHeaderImg src ='/images/logo512.png'></s.SidebarHeaderImg>
<s.SidebarHeaderText>SAMPLE</s.SidebarHeaderText>
</s.SidebarHeaderImgContainer>
<s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
<s.TogglerContainer onClick ={()=>setSidebarState(!isSidebarOpen)}>
    <s.Toggler></s.Toggler>
</s.TogglerContainer>
</s.SidebarContainer>)
 }

 export default Sidebar;