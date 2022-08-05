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

const getRandomMessage = () => {
  return titleMessages[Math.floor(Math.random() * titleMessages.length)];
};

const ComingSoon = () => (
  <div style={style}>
    <img src="/images/coming-soon.svg" alt="Coming soon" style={imageStyle} />
    <div>
      <h1 style={{ marginLeft: -32, zIndex: 0 }}>{getRandomMessage()}</h1>
      <p style={{ paddingLeft: 16, fontSize: 18 }}>
        This exercise will be ready soon, little padawan.
        <br />
        Go home, take a rest and come back later.
      </p>
      <Link to="/">
        <button>Okay! I'm going back</button>
      </Link>
    </div>
  </div>
);

export default ComingSoon;
