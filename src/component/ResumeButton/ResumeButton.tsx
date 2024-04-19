import { useState } from 'react';
import resumePDF from '/src/assets/Resume/Rahul_cv.pdf';
import { FaDownload } from "react-icons/fa";
import SendMail from './SendMail';

export const Resume = () => {
    const [showProgressBar, setShowProgressBar] = useState(false);
    const [showSendMail, setShowSendMail] = useState(false);
    const progressBarValue = 50;

    const handleDownloadClick = () => {
        setShowProgressBar(true);

        const downloadFile = () => {
            return new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 3000);
            });
        };

        downloadFile()
            .then(() => {
                const link = document.createElement('a');
                link.href = resumePDF;
                link.download = 'Rahul_cv.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((error) => {
                console.error('Download error:', error);
            })
            .finally(() => {
                setShowProgressBar(false);
            });
    };

    const handleEmailCv = () => {
        setShowSendMail(true);
    };

    const handleCloseSendMail = () => {
        setShowSendMail(false);
    };

    return (
        <>
            <button
                className={`w-36 relative bg-emerald-400 hover:bg-teal-600 mt-3 text-white font-bold py-2 px-4 rounded-sm shadow-lg ${showProgressBar ? 'hidden' : ''}`}
                onClick={handleDownloadClick}
                disabled={showProgressBar}
            >
                Download CV <FaDownload className='text-center' />
            </button>
            <button
                className={`relative bg-emerald-400 hover:bg-teal-600 ml-32 mt-3 text-white font-bold py-2 px-4 rounded-sm shadow-lg ${showSendMail ? 'hidden' : ''}`}
                onClick={handleEmailCv}
                disabled={showSendMail}
            >
                CV on mail
            </button>
            {showSendMail && <SendMail onClose={handleCloseSendMail} />}
            {showProgressBar && (
                <div className="relative w-[7rem] h-2 bg-[#ff577f] mt-3 rounded-full">
                    <div
                        className="absolute top-0 left-0 h-full bg-highLighter"
                        style={{ width: `${progressBarValue}%` }}
                    />
                </div>
            )}
        </>
    );
};
