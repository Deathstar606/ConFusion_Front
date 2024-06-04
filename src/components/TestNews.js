import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { generateEmailHtml } from '../emails';
import Email from '../emails';
import axios from 'axios';
import styled from 'styled-components';

// Styled components
const SidebarContainer = styled.div`
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
`;

const SidebarLink = styled.div`
    color: ${props => props.active ? 'rgb(0, 0, 0)' : 'rgb(243, 196, 5)'};
    background-color: ${props => props.active ? 'rgb(243, 196, 5)' : 'transparent'};
    padding: 15px;
    width: 100%;
    text-align: center;
    font-size: 18px;
    margin: 5px 0;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.active ? 'rgb(243, 196, 5)' : 'rgba(243, 196, 5, 0.8)'};
        color: rgb(0, 0, 0);
    }
`;

const ContentContainer = styled.div`
    background-color: rgb(255, 249, 225);
    flex-grow: 1;
    padding: 20px;
    margin-left: 250px; /* Add this margin to prevent content overlap with the fixed sidebar */
`;

export const Users = () => {
    return <div style={{ minHeight: "100vh" }}>Users Page</div>;
};

export const SendNewsletter = ({ subscribers }) => {
    const [formData, setFormData] = useState({
        subject: '',
        message: '',
        imageUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSend = async (e) => {
        e.preventDefault();
        try {
            const emailPromises = subscribers.Subscribers.map(async (sub) => {
                const emailHtml = generateEmailHtml(sub.firstname, formData.message, formData.imageUrl);
                return axios.post('http://localhost:9000/sendnews', {
                    subject: formData.subject,
                    htmlContent: emailHtml,
                    email: sub.email
                });
            });
            await Promise.all(emailPromises);
            alert('Emails sent successfully');
        } catch (error) {
            console.error('There was an error sending the emails:', error);
        }
    };

    return (
        <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif', minHeight: "100vh" }}>
            <h1 style={{ textAlign: 'center' }}>Send Newsletter</h1>
            <form onSubmit={handleSend}>
                <div>
                    <label>Subject:</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
                </div>
                <button type="submit">Send Email</button>
            </form>
            <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Preview</h2>
            <Email name={"First Name"} message={formData.message} imageUrl={formData.imageUrl} />
        </div>
    );
};

// Sidebar component
const Sidebar = (props) => {
    const [activeLink, setActiveLink] = useState('Users');
    const [Comp, setComp] = useState(<Users />);

    const handleLinkClick = (link, component) => {
        setActiveLink(link);
        setComp(component);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SidebarContainer>
                <SidebarLink 
                    active={activeLink === 'Users'} 
                    onClick={() => handleLinkClick('Users', <Users />)}
                >
                    Users
                </SidebarLink>
                <SidebarLink 
                    active={activeLink === 'SendNewsletter'} 
                    onClick={() => handleLinkClick('SendNewsletter', <SendNewsletter subscribers={props.subscribers} />)}
                >
                    Send Newsletter
                </SidebarLink>
            </SidebarContainer>
            <ContentContainer>
                {Comp}
            </ContentContainer>
        </div>
    );
};

export default Sidebar;
