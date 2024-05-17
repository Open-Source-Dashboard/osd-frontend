import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import { useAuth } from '../auth/AuthContext';
// import axios from 'axios';
import emailjs from 'emailjs-com';



// const Feedback = () => {
//     const { user } = useAuth();
//     const [email, setEmail] = useState(''); 
//     const [message, setMessage] = useState('');
//     const [feedbackSent, setFeedbackSent] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const feedbackData = {
//             name: user.github_username, 
//             email: email, 
//             message: message
//         };
//         try {
//             await axios.post(process.env.REACT_APP_BACKEND_URL + '/feedback', feedbackData);
//             setFeedbackSent(true);
//             setMessage('');
//             setEmail('');  
//         } catch (error) {
//             console.error("Error sending feedback:", error);
//         }
//     };


// use of EmailJS to send feedback until backend is implemented for axios call and feedback data storage and/or initiating email
const Feedback = () => {
    const { user } = useAuth();
    const [email, setEmail] = useState(''); 
    const [message, setMessage] = useState('');
    const [feedbackSent, setFeedbackSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const feedbackData = {
            from_name: user.github_username,
            reply_to: email,
            message: message
        };
        
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            feedbackData,
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then((result) => {
            console.log(result.text);
            setFeedbackSent(true);
            setMessage('');
            setEmail('');
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <div className="min-h-screen p-8 bg-gradient-to-r from-primary to-secondary">
            <div className="container mx-auto text-center">
                <h1 className="mb-8 text-4xl font-bold text-white">Give Feedback</h1>
                {feedbackSent ? (
                    <>
                    <p className="mb-8 text-2xl font-semibold text-orange-500">Thanks for your message!</p>
                    <p>Go back to <Link to="/">Donut Dashboard home</Link></p>
                    </>
                ) : (
                    <div className="w-2/3 mx-auto mb-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-2xl font-semibold text-orange-500">From</label>
                            <input
                                type="text"
                                id="name"
                                value={user.github_username}
                                readOnly
                                className="w-full p-3 text-white rounded-lg shadow-lg bg-violet-950"
                                placeholder="Login to add your GitHub username here..."
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-2xl font-semibold text-orange-500">Email (optional)</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 text-white rounded-lg shadow-lg bg-violet-950"
                                placeholder="Your email..."
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-2xl font-semibold text-orange-500">Message</label>
                            <textarea
                                id="message"
                                rows="8"
                                className="w-full p-3 text-white rounded-lg shadow-lg bg-violet-950"
                                placeholder="Your feedback..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-1/3 p-3 text-xl text-white bg-teal-500 rounded-lg shadow-md hover:text-light-blue"
                        >
                            Send Feedback
                        </button>
                    </form>
                    </div>
                )}
                <div className="mt-8">
                </div>
            </div>
        </div>
    );
};

export default Feedback;
