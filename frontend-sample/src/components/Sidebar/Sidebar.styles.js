import  styled from '@emotion/styled';

export const SidebarContainer = styled.div`
 width: ${p => p.isSidebarOpen?'20%':'5%'};
 max-width: 280px;
 min-width: 80px;
 background-image: linear-gradient(180deg, #013d72 10%, #080a13 100%);
 background-size:cover;
 background-repeat: no-repeat;
 background-position: center center;
 color: #fff;
 position: relative;
 transition: .2s ease-in all
`

export const SidebarHeader = styled.h3`
padding: 20px 0px;
text-align: center;
margin-bottom: 10px;
letter-spacing: 6px;
font-family: ZCOOL QingKe HuangYou
`
export const SidebarHeaderImgContainer = styled.div`
align-items: center ;
justify-content: center;
margin-bottom: 10px;
margin-top: 10px;
`

export const SidebarHeaderImg = styled.img`
padding: 0 1rem;
width: 60%;
`
export const SidebarHeaderText = styled.p`
padding: 0 1rem;
font-weight: 800;
font-size: 0.65rem;
&:before {
    content:'';
    border: 1px solid rgba(255, 255, 255, 0.15);
    display: block;
   }
`
export const MenuItemContainer = styled.div``


export const menuItem = styled.div`
${p => !p.isSidebarOpen && p.selected &&  `
   text-align:center;
   background-color:rgba(0,0,0,0.6)
`}
 padding: 6px 20px; 
 font-weight: 700;
 color: ${p =>p.selected ?'rgba(255,112,85)':'#fff'};
 font-family: 'Poppins';
 &:hover {
  color:rgba(255,112,85);
  transition:.1s ease-in all;
 }
 &:after {
  content:'';
  border: 1px solid ${p =>p.selected ?'rgba(255,112,85)':'#fff'};
  display: block;
  margin: 8px 0 4px;
 }

 ${p=>!p.selected && `
   &:hover {
       &:after{
           border: 1px solid rgba(255,112,85,0.2);
           transition:.1s ease-in all;
       }
   }
 `}
`

export const Text = styled.p`
display : ${p => p.isSidebarOpen ? 'inline' : 'none'};
`
export const Icon = styled.svg`
${p => p.isSidebarOpen && 'padding-right: 12px; transition: .2s ease-in padding-right'}
height: 16px;
width:16px;
padding: 0px 10px; 
`


export const TogglerContainer = styled.div `
position: absolute;
width:30%;
bottom: 10%;
left:0;
right:0;
margin: 0 auto;
`

export const Toggler = styled.div `
 height:40px;
 cursor: pointer;
 //border: 1px solid #fff;
 position: relative; // horizontal lines
 &:after {
     content:'';
     position: absolute;
     left: 0;
     top: .24em;
     width: 100%;
    height: .1em;
    background: #fff;
    box-shadow:
        0 .75em 0 0 #fff,
        0 1.5em 0 0 #fff;,
 }
`


