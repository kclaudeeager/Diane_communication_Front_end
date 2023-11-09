import React from 'react';

const FeedbackMessage = ({ message, type }) => {
  const successEmoji = '🎉';
  const errorEmoji = '😞';

  const containerStyle = {
    marginTop: '1rem',
    padding: '1rem',
    borderRadius: '0.5rem',
    color: type === 'success' ? '#155724' : '#721c24',
    backgroundColor: type === 'success' ? '#d4edda' : '#f8d7da',
    border: `1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  return (
    <div style={containerStyle}>
      <div>
        {type === 'success' ? successEmoji : errorEmoji} {message}
      </div>
    </div>
  );
};

export default FeedbackMessage;
