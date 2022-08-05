import { Link } from 'react-router-dom';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
};

const imageStyle = {
  maxWidth: 300,
  zIndex: 999,
};

const titleMessages = [
  'Just relax',
  'Chill out',
  'Wind down',
  'Slow down',
  'Go easy, man',
  'Cool your jets',
];

const descriptionMessages = [
  [
    'This exercise will be ready soon, little padawan.',
    'Go home, take a rest and come back later.',
  ],
  [
    "Go take a shower, listen to good music and relax.",
    'Next lessons will come soon.',
  ],
  [
    "Weren't you a developer in a previous life?",
    'The next lesson will be ready soon.',
  ],
  [
    'Wow! I bet you are the fastest man alive! ⚡️',
    'This lesson will be live in a flash.',
  ],
];

const buttonMessages = [
  "Okay! I'll be back",
  "Fine! I'm leaving",
  'Okay! Bye',
  'All right',
  'No problem. Just going',
];

const getRandomMessage = (messages) => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const ComingSoon = () => {
  const title = getRandomMessage(titleMessages);
  const description = getRandomMessage(descriptionMessages);
  const buttonMessage = getRandomMessage(buttonMessages);

  return (
    <div style={style}>
      <img src="/images/coming-soon.svg" alt="Coming soon" style={imageStyle} />
      <div>
        <h1 style={{ marginLeft: -32, zIndex: 0 }}>{title}</h1>
        <p style={{ paddingLeft: 16, fontSize: 18 }}>
          {description[0]}
          <br />
          {description[1]}
        </p>
        <Link to="/">
          <button>{buttonMessage}</button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
