import React, { useState } from 'react';

function Image() {
    const initialImgSrc = "https://s0.tchkcdn.com/g-Q_SKeix88FKFOMkrb3nIAw/17/189936/1200x630/f/0/tfnnppbflvsbdotf.jpg";
    const initialLinkHref = "https://kyivcity.gov.ua/";
    const step = 50;

    const [images, setImages] = useState([
        { id: 1, width: 600 }
    ]);

    const handleAdd = () => {
        const newImage = {
            id: Date.now(),
            width: 600
        };
        setImages((prev) => [...prev, newImage]);
    };

    const handleZoomIn = () => {
        if (images.length === 0) return;
        setImages((prev) => {
            const updated = [...prev];
            const lastIndex = updated.length - 1;
            updated[lastIndex] = {
                ...updated[lastIndex],
                width: updated[lastIndex].width + step
            };
            return updated;
        });
    };

    const handleZoomOut = () => {
        if (images.length === 0) return;
        setImages((prev) => {
            const updated = [...prev];
            const lastIndex = updated.length - 1;
            if (updated[lastIndex].width - step >= 100) {
                updated[lastIndex] = {
                    ...updated[lastIndex],
                    width: updated[lastIndex].width - step
                };
            }
            return updated;
        });
    };

    const handleDelete = () => {
        setImages((prev) => prev.slice(0, -1));
    };

    return (
        <div className="image-control-wrapper">
            <div id="image-wrapper">
                {images.map((img) => (
                    <a key={img.id} href={initialLinkHref} target="_blank" rel="noopener noreferrer" title="Офіційний портал Києва">
                        <img 
                            src={initialImgSrc} 
                            alt="Краєвид Києва" 
                            className="city-image"
                            style={{ width: `${img.width}px` }}
                        />
                    </a>
                ))}
            </div>

            <div className="controls">
                <button onClick={handleAdd}>Додати</button>
                <button onClick={handleZoomIn}>Збільшити</button>
                <button onClick={handleZoomOut}>Зменшити</button>
                <button onClick={handleDelete}>Видалити</button>
            </div>
        </div>
    );
}

export default Image;