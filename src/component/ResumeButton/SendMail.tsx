import React, { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
interface SendMailProps {
    onClose: () => void; // Define onClose prop as a function that doesn't take any arguments and returns void
}

const SendMail: React.FC<SendMailProps> = ({ onClose }) => {
    const [email, setEmail] = useState('');

    const handleSendCV = () => {
        console.log("Email:", email);
        onClose(); // Close the popup when "Send CV" button is clicked
    };

    return (
        <div className='fixed z-50 inset-0 overflow-y-auto bg-gray-300 bg-opacity-50 flex -flex-col justify-center items-center'>
            <div className='bg-white p-10 rounded-xl relative'>
                <IoMdCloseCircle className='absolute top-2 right-4 text-red-600 cursor-pointer' onClick={onClose} />
                <div className="">
                    <h5 className='text-xl'>Please provide me your mail</h5>
                    <input type="text" className='border-2 rounded-xl p-2 w-64 mt-4' placeholder='email@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type='submit' className='border-2 rounded-lg p-3 bg-green-600 text-white m-3 hover:bg-lime-500 translate-x-4 transition-colors' onClick={handleSendCV}>Send CV</button>
                </div>
            </div>
        </div>
    );
}

export default SendMail;
