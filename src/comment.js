import React, { useState,useEffect } from 'react';
import axios from 'axios';
import FeedbackMessage from './FeedbackMessage';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState({ message: '', type: '' });

  useEffect(() => {
    if (feedbackMessage.message) {
      const timer = setTimeout(() => {
        setFeedbackMessage({ message: '', type: '' });
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [feedbackMessage]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newComment.trim()) {
      setFeedbackMessage({ message: 'Comment cannot be blank.', type: 'error' });
      return;
    }

    setIsLoading(true);
    const comment = {
      author: author,
      comment: newComment,
    };

    axios
      .post('https://diane-communication-be.onrender.com/comment', comment)
      .then((response) => {
        setComments([...comments, response.data]);
        setNewComment('');
        setAuthor('');
        setFeedbackMessage({ message: 'Comment submitted successfully!', type: 'success' });
      })
      .catch((error) => {
        console.error(error);
        setFeedbackMessage({
          message: 'Failed to submit comment. Please try again later.',
          type: 'error',
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="mt-4 max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
            Leave a comment
          </label>
          <textarea
            id="comment"
            name="comment"
            required={true}
            placeholder='Write your comment here...'
            value={newComment}
            onChange={handleCommentChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          />
        </div>
        <div className="mb-4">
          <input
            id="author"
            name="author"
            type="text"
            value={author}
            placeholder='Your Name (optional)'
            onChange={handleAuthorChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={isLoading}
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
      {feedbackMessage.message && <FeedbackMessage message={feedbackMessage.message} type={feedbackMessage.type} />}
    </form>
    </div>
  );
}

export default CommentSection;
