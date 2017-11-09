import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // Modal "window"
    const modalStyle = {
      backgroundColor: '#dff3ec',
      borderRadius: '5px',
      maxWidth: '500px',
      minHeight: '100px',
      margin: '100px auto',
      padding: '50px',
      textAlign: 'center'
    };

    // Button
    const button = {
      backgroundColor: 'white',
      marginBottom: '10px',
      height: '30px',
      minWidth: '100%',
      width: '100%',
      border: 'none'
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}

          <div className="footer">
            <button style={button} onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
