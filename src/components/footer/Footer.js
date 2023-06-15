import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.scss'

function Footer() {
  return (
    <div className='container_footer'>
        <Row className='contents_footer'>
            <Col sm={6} md={3} lg={3} xl={3} xxl={3} className='footer'>
                <div className='footer_icons'>
                    <FacebookIcon className='footer_icon' />
                    <InstagramIcon className='footer_icon' />
                    <YouTubeIcon className='footer_icon' />
                </div>
                <span>Audio Description</span>
                <span>Investor Relations</span>
                <span>Legal Notices</span>
                <div className='service'>Sevice Code</div>
                <span className='copywrite'>1997-2023 Netflix, Inc.</span>
            </Col>
            <Col sm={6} md={3} lg={3} xl={3} xxl={3} className='footer_details'>
                <span>Help Center</span>
                <span>Jobs</span>
                <span>Cookie Preferences</span>
            </Col>
            <Col sm={6} md={3} lg={3} xl={3} xxl={3} className='footer_details'>
                <span>Gift Cards</span>
                <span>Term of Use</span>
                <span>Corporate Information</span>
            </Col>
            <Col sm={6} md={3} lg={3} xl={3} xxl={3} className='footer_details'>
                <span>Media Center</span>
                <span>Privacy</span>
                <span>Contact Us</span>
            </Col>
        </Row>
    </div>
  )
}

export default Footer