import React from 'react'


const ImageInfoDetails = ({ index,image, title, content }) => {
    return (
        <div className="image-info-details">
            <div className="img-wrapper">
                <img src={image} alt="" />
            </div>
            <div className="info-wrapper">
                <h2>{index}</h2>
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        </div>)
}

export default ImageInfoDetails