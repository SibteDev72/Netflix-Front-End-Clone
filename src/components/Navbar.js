import { ArrowDropDown, Notifications, Search, } from '@mui/icons-material'
import { Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navbar.scss'

function Navbar() {

  const [scrolled, setscroller] = useState(false);
  const [sideMenu, setsideMenu] = useState(false);
  
  window.onscroll = function(){
    if(window.pageYOffset === 0){
      setscroller(false);
    }
    else{
      setscroller(true);
    }
  }
  function clicked(){
    window.location.assign('/SignIn');
  }
  return (
      <Row className = {scrolled ? 'Container scrolled': "Container"}>
        <Col className='left' sm={12} md={8} lg={8} xl={8} xxl={8}>
          <img src='assets/Netflix_2015_logo.svg.png' alt='' />
          <span><Nav.Link href="/">Home</Nav.Link></span>
          <span className='menu_options'>TV Shows</span>
          <span className='menu_options'>Movies</span>
          <span className='menu_options'>New & Popular</span>
          <span className='menu_options'>My List</span>
          <span className='menu_options'>Browse by Language</span>
          <Outlet />
          <div className='side_menu'>
            <MenuIcon onClick = {() => {setsideMenu(true)}} />
          </div>
        </Col>
        <Col className='right' sm={12} md={4} lg={4} xl={4} xxl={4}>
            <Search className='icon' />
            <Notifications className='icon' />
            <span className='icon' >Sibte Muhammad</span>
            <img className='icon' src='assets/Profile Pic.png' alt='' />
            <div className='dropdownoptions'>
              <ArrowDropDown className='icon' />
              <div className='options'>
                <span><Nav.Link href="/SignUp">SignUp</Nav.Link></span>
                <span><Nav.Link href="/SignIn">SignIn</Nav.Link></span>
                <span>Account</span>
                <span>Profile</span>
                <span>Settings</span>
                <span onClick={() => clicked()}>Log Out</span>
              </div>
            </div>
        </Col>
        <SideMenu show = {sideMenu}>
          <CloseButton>
            <CloseIcon onClick = {() => {setsideMenu(false)}} />
          </CloseButton>
          <Options>Home</Options>
          <Options>TV Shows</Options>
          <Options>Movies</Options>
          <Options>New & Popular</Options>
          <Options>My List</Options>
          <Options>Browse by Language</Options>
        </SideMenu>
    </Row>
  );
}

export default Navbar

const SideMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0%;
  right: 0;
  background-color: rgb(0, 0, 0, 0.85);
  height: 100vh;
  width: 25vw;
  font-size: 20px;
  padding-top: 6%;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.2s;
`
const CloseButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  background-color: red;
  border-radius: 7px;
`
const Options = styled.div`
  text-align: start;
  padding-top: 20px;
  cursor: pointer;
`