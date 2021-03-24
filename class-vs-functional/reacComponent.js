/**
 * reactComponent.js    -
 *
 * REACT COMPONENT -
 * React components are a way of defining a piece of UI into a reusable piece of code. A component
 * is like a function, accepting inputs (called props) and returning a React element, which describes
 * what should be rendered to the DOM.
 *
 *
 * Reference:
 *  - reactjs.org
 *  - The Startup medium article
 *  - Link > https://medium.com/swlh/react-functional-vs-class-components-517be1d9ff13
 */

// functional Component Example
// we'll destructure props such that we won't have to use props.name, props.profilePhotoUrl
const Profile = ({ name, profilePhotoUrl }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={profilePhotoUrl} />
    </div>
  );
};

// Class Component Example
class Profile extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img src={this.props.profilePhotoUrl} />
      </div>
    );
  }
}

/**
 * State in react refers to an object inside a component that is used to
 * store property values that blong to that component. When state object changes,
 * the component re-renders.
 */

/**
 * State in Functional Components -
 * In a functional component, we can use the useState hook to initialize state released
 * after React 16.8.0 version to support hooks.
 *
 * In the below example, let's add state to Profile component where the state stores a single
 * bio property.
 *
 * bio - the current state
 * setBio - a setter function that updates the state
 */
const MyProfile = ({ name, profilePhotoUrl }) => {
  const [bio, setBio] = React.useState('A little about me');

  return (
    <div>
      <h3>{name}</h3>
      <p>{bio}</p>
      <img src={profilePhotoUrl} />
    </div>
  );
};

/**
 * State in Class Components
 */
