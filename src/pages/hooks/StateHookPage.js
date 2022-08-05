import ExerciseLayout from '../../layouts/ExerciseLayout';

export const StateHookPage = () => {
  const submitFormHandler = (e) => {
    e.preventDefault();

    // Getting form data
    const { username, currentTime } = Object.fromEntries(
      new FormData(e.target)
    );
  };

  return (
    <>
      <ExerciseLayout title="The useState Hook" introContent={<Intro />}>
        <form onSubmit={submitFormHandler} style={{ marginBottom: 32 }}>
          <label>What is your name?</label>
          <input
            type={'text'}
            name="username"
            placeholder="E.g: John Doe"
            autoComplete="off"
          />
          <br />
          <label>What time is it?</label>
          <input type={'time'} name="currentTime" />
          <br />
          <br />
          <button type={'submit'}>Greet me!</button>
        </form>
        <h2 className="inverted">Exercise result</h2>
        <p>
          {/* Get greeting according the time */ 'Hi'},{' '}
          {/* Name goes here */ 'so-and-so'}!
        </p>
      </ExerciseLayout>
    </>
  );
};

const Intro = () => (
  <>
    <p>
      The <code>useState</code> hook is used to update the <code>state</code> of
      a component.
      <br />
      When the state changes the component is rendered again to reflect those
      changes.
    </p>
    <p>
      Let's train the <code>useState</code> Hook! Open the{' '}
      <code>StateHookPage.js</code> and follow the instructions commented on it.
    </p>
  </>
);

/**
 * Get the appropriate greeting according the time of the day.
 * @param {string} time Time used to decide which greeting best fits your situation
 * @returns The appropriate greeting as string
 */
const getGreeting = (time) => {
  const hour = parseInt(time.split(':')[0], 10) || 0;
  if (hour < 5) return 'evening';
  else if (hour < 12) return 'morning';
  else return 'afternoon';
};
