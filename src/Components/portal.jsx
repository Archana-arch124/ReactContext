import React from 'react'
import ReactDom from 'react-dom'

const box1 = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const box2 = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default function Modal({ open, children, onClose }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div style={box2} />
            <div className='close' style={box1}>
                {children}
                <button onClick={onClose} style={{ backgroundColor: 'pink' }}>Close</button>
            </div>
        </>,
        document.getElementById('rootPortal')
    )
}