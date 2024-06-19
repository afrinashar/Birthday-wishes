import React, { useState } from 'react';
import FileUpload from './FileUpload';
import PhotoWithWishes from './PhotoWithWishes';
import './App.css';

function App() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('Happy Birthday!');
    const [textColor, setTextColor] = useState('#ffffff');

    const handleFileSelect = (selectedFile) => {
        setFile(selectedFile);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleTextColorChange = (event) => {
        setTextColor(event.target.value);
    };

    return (
        <div className="App">
            <h1>Upload a Photo to Get Birthday Wishes!</h1>
            <input 
                type="text" 
                value={message} 
                onChange={handleMessageChange} 
                placeholder="Enter your birthday message" 
                style={{
                    padding: '10px',
                    fontSize: '18px',
                    borderRadius: '5px',
                    marginBottom: '20px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                }}
            />
            <input 
                type="color" 
                value={textColor} 
                onChange={handleTextColorChange} 
                style={{
                    margin: '20px',
                    padding: '10px',
                    fontSize: '18px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            />
            <FileUpload onFileSelect={handleFileSelect} />
            <PhotoWithWishes file={file} message={message} textColor={textColor} />
        </div>
    );
}

export default App;
