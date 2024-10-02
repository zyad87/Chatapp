import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ authorName, messageContent, timestamp, isSender }) => {
  const getAvatarUrl = () => {
    return `https://ui-avatars.com/api/?name=${authorName}&size=128`;
  };
  const baseStyles =
    'p-3 rounded-md my-1 break-words max-w-[75%] max-md:text-[0.8em]';
  const colorStyles = isSender
    ? 'bg-cyan-300 text-black self-start text-right'
    : 'bg-gray-500 text-white self-end text-right';

  const isImageUrl = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  return (
    <div
      className={`flex flex-col max-md:w-[60%] ${
        isSender ? 'items-start' : 'items-end'
      }`}
    >
      <div
        className={`max-md:text-[0.8em] text-gray-300 mb-1 flex gap-2 ${
          isSender ? 'text-left' : 'text-right flex flex-row-reverse'
        }`}
      >
        <img
          src={getAvatarUrl()}
          alt={`${authorName}'s avatar`}
          className="w-5 h-5 rounded-full"
        />
        {authorName}
      </div>
      <div className={`${baseStyles} ${colorStyles}`}>
        {isImageUrl(messageContent) ? (
          <img src={messageContent} alt="user shared" className="rounded-lg w-50 h-30" />
        ) : (
          <p>{messageContent}</p>
        )}
        <div className="text-xs text-gray-700 mt-1">
          {timestamp}
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  authorName: PropTypes.string.isRequired,
  messageContent: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  isSender: PropTypes.bool.isRequired,
};

export default Message;
