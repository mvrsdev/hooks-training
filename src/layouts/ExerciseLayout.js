import { Link } from 'react-router-dom';

const containerStyle = {
  paddingLeft: 32,
  maxWidth: 900,
};

const titleH1Style = {
  paddingLeft: 8,
};

const backButtonStyle = {
  marginRight: 16,
};

const ExerciseLayout = ({ title, introContent, children }) => {
  return (
    <>
      <section id="introduction">
        <h1 style={titleH1Style}>
          <Link to={'/'}>
            <button
              className="icon-button"
              style={backButtonStyle}
              title="Back to home"
            >
              {'<'}
            </button>
          </Link>
          {title}
        </h1>
        <div style={containerStyle}>{introContent}</div>
      </section>
      <section id="exercise">
        <h1>Exercise</h1>
        <div style={containerStyle}>{children}</div>
      </section>
    </>
  );
};

export default ExerciseLayout;
