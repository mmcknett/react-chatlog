import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((message) => {
    return (
      <li>
        <ChatEntry
          key={message.id}
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      </li>
    );
  });

  return <ul>{chatComponents}</ul>;
};

// ChatLog.propTypes = {
//   messages: PropTypes.,
// };

export default ChatLog;
