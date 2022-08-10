import ExerciseLayout from '../../layouts/ExerciseLayout';

// This is the initial state
const initialState = {
  name: 'John Doe',
  age: 32,
  address: "252 Dowson's Street",
  children: ['Hannah Doe', 'Spencer Doe'],
};

// >> Reducer function goes here <<

export const ReducerHookPage = () => {
  // >> Reducer declaration goes here <<

  const infoSubmitHandler = (e) => {
    e.preventDefault();

    // Get form data here (check how in the StateHookPage.js)

    // Update the state through the reducer dispatch here

    // Clear form data here
    e.target.reset();
  };

  const childrenSubmitHandler = (e) => {
    e.preventDefault();

    // Get form data here (check how in the StateHookPage.js)

    // Update the state through the reducer dispatch here

    // Clear form data here
    e.target.reset();
  };

  return (
    <ExerciseLayout title="The useReducer hook" introContent={<Intro />}>
      <p>Update your information below</p>
      <form onSubmit={infoSubmitHandler} style={{ marginBottom: 32 }}>
        <label>Select the information you want to update</label>
        <select name="property">
          <option value="name">My name</option>
          <option value="age">My age</option>
          <option value="address">My address</option>
        </select>

        <label>Type the information value</label>
        <input
          type={'text'}
          name="value"
          placeholder="Property value here"
          autoComplete="off"
        />
        <br />
        <br />
        <button type={'submit'}>Update it</button>
      </form>
      <hr />

      <form onSubmit={childrenSubmitHandler}>
        <p>Type child name and press "Make a children":</p>
        <label>Kid's name:</label>
        <input
          type={'text'}
          name="kidName"
          placeholder="Mariah"
          autoComplete="off"
        />{' '}
        <button type={'submit'}>Make a children</button>
      </form>

      <h2 className="inverted">Exercise result</h2>
      <p>
        Hello! My name is {/* name_here */}.<br />
        I'm {/* age here */} years old.
        <br />I live at {/* address here */}.<br />I have{' '}
        {/* kids amount here */} kids:
        <br />
      </p>
      <ul>
        {
          /* Replace the following array */ ['Mariah', 'Harry'].map(
            (kidName, index) => (
              <li key={index}>
                {kidName}
                <br />
              </li>
            )
          )
        }
      </ul>
    </ExerciseLayout>
  );
};

const Intro = () => (
  <>
    <p>
      The <code>useReducer</code> hook is used to update the <code>state</code>{' '}
      of a component, almost like the <code>useState</code>, but the difference
      is that with the <code>useReducer</code> you can handle complex logic,
      that means, you can use it when you have a complex logic in you screeen
      that using the
      <code>useState</code> it would be a pain.
      <br />
      When the state changes the component is rendered again to reflect those
      changes.
    </p>
    <p>
      Let's train the <code>useReducer</code> Hook! Open the{' '}
      <code>ReducerHookPage.js</code> and follow the instructions commented on
      it.
    </p>
  </>
);
