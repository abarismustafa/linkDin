
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
// import { SketchPicker } from "react-color";
import { HexColorPicker } from "react-colorful";
import '../imageEditer/imageEditer.css'

const ImageIditor = (props) => {
    const [image, setImage] = useState(null);
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [color, setColor] = useState("#000000");
    const [rotation, setRotation] = useState(0);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDownload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = image;
        img.crossOrigin = "anonymous";
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = "destination-atop";
            ctx.drawImage(img, 0, 0);
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "edited-image.png";
            link.click();
        };
    };

    useEffect(() => {
        if (!props.show) {
            setImage(null);
            setBrightness(100);
            setContrast(100);
            setColor("#000000");
            setRotation(0);
        }
    }, [props.show]);
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {/* <Modal.Header closeButton>
                    <Modal.Title >
                        dfs

                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <div className="editor-container">
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        {image && (
                            <div className="editor">
                                <img
                                    src={image}
                                    alt="Uploaded"
                                    style={{
                                        filter: `brightness(${brightness}%) contrast(${contrast}%)`,
                                        transform: `rotate(${rotation}deg)`,
                                        backgroundColor: color
                                    }}
                                />
                                <div className="controls">
                                    <label>Brightness</label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="200"
                                        value={brightness}
                                        onChange={(e) => setBrightness(e.target.value)}
                                    />
                                    <label>Contrast</label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="200"
                                        value={contrast}
                                        onChange={(e) => setContrast(e.target.value)}
                                    />
                                    <label>Rotation</label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="360"
                                        value={rotation}
                                        onChange={(e) => setRotation(e.target.value)}
                                    />
                                    <label>Background Color</label>
                                    <HexColorPicker color={color} onChange={setColor} />

                                </div>
                            </div>
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-primary' onClick={handleDownload}>Download Image</button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ImageIditor