import React from 'react';

function DownArrowIcon(props) {
    return (
        <svg
            fill={props.fill || "#000000"}
            height="800px"
            width="800px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
            {...props}
        >
            <polygon points="442.2,93.1 256,279.3 69.8,93.1 0,162.9 256,418.9 512,162.9 " />
        </svg>
    );
}

export default DownArrowIcon;