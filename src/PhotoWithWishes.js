import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const PhotoWithWishes = ({ file, message, textColor }) => {
    const imageRef = useRef();

    if (!file) return null;

    const fileURL = URL.createObjectURL(file);

    const handleDownload = async () => {
        const canvas = await html2canvas(imageRef.current);
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'birthday-wishes.png';
        link.click();
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div ref={imageRef} style={{ position: 'relative', display: 'inline-block', textAlign: 'center' }}>
                <img src={fileURL} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: textColor,
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '20px',
                    borderRadius: '10px',
                    fontSize: '36px',
                    fontFamily: 'Cursive',
                    WebkitTextStroke: '1px black', // Stroke shadow
                }}>
                    {message}
                </div>
            </div>
            <button onClick={handleDownload} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer' }}>
                Download Image
            </button>
        </div>
    );
};

export default PhotoWithWishes;
