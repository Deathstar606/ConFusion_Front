import {useState} from 'react';
import { NavLink, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
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

const SidebarLink = styled(NavLink)`
    color: rgb(243, 196, 5);
    text-decoration: none;
    padding: 15px;
    width: 100%;
    text-align: center;
    font-size: 18px;
    margin: 5px 0;

    &.active {
        background-color: rgb(243, 196, 5);
        color: rgb(0, 0, 0);
    }

    &:hover {
        background-color: rgb(243, 196, 5, 0.8);
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
    return <div style={{minHeight: "100vh"}}>Users Page</div>;
};

export const SendNewsletter = () => {
    const [formData, setFormData] = useState({
        subject: '',
        name: '',
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
        const emailHtml = generateEmailHtml(formData.name, formData.message, formData.imageUrl);
        try {
          const response = await axios.post('https://localhost:3443/subscribe', {
            subject: formData.subject,
            htmlContent: emailHtml
          });
          alert(response.data);
        } catch (error) {
          console.error('There was an error sending the email:', error);
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
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
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
            <Email name={formData.name} message={formData.message} imageUrl={formData.imageUrl} />
        </div>
    );
};

// Sidebar component
const Sidebar = () => {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <SidebarContainer>
                    <SidebarLink to="/admin/users" activeClassName="active">
                        Users
                    </SidebarLink>
                    <SidebarLink to="/admin/send-newsletter" activeClassName="active">
                        Send Newsletter
                    </SidebarLink>
                </SidebarContainer>
                <ContentContainer>
                    <Switch>
                        <Route path="/admin/users" component={Users} />
                        <Route path="/admin/send-newsletter" component={SendNewsletter} />
                    </Switch>
                </ContentContainer>
            </div>
        </Router>
    );
};

export default Sidebar;
