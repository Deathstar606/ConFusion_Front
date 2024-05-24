import React, { useState } from 'react';
//import ReactDOMServer from 'react-dom/server';
import { renderToString } from 'react-dom/server';
import Email from '../emails';
//import { render } from '@react-email/render';
import axios from 'axios';

const SendNewsletter = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSend = async (e) => {
        e.preventDefault();

        const htmlContent = renderToString(<Email />);

        try {
            const res = await axios.post('https://localhost:3443/subscribe', 
            { subject, message, htmlContent });
            setResponse(res.data);
        } catch (error) {
            setResponse('Failed to send newsletter');
        }
    };

    return (
        <div>
            <h1>Send Newsletter</h1>
            <form onSubmit={handleSend}>
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                    required
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    );
};

export default SendNewsletter;