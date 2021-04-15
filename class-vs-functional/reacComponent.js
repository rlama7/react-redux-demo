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
// {name, profilePhotoUrl} = props
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
 * In a class component, state object is initialized in the constructor, and can be used
 * anywhere in the component using this.state.propertyName. In the below example, let's add
 * state with bio to profile component. We render this in the render method using this.state.bio
 */
class YourProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bio: 'A little about you' };
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.state.bio}</p>
        <img src={this.props.profilePhotoUrl} />
      </div>
    );
  }
}

/**
 * Lifecycle Methods in React Class
 * componentDidMount -- is called once when the component is mounted, after the first render.
 *
 * componentDidUpdate -- is invoked immediately after the component updates on re-renders. It is not
 * called for the initial render
 *
 * componentWillUnmount -- is invoked immediately before a component is unmounted and destroyed.
 */
class LifecycleExercise extends React.Component {
  componentDidMount() {
    console.log('Component has mounter');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component is unmounting');
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img src={this.props.profilePhoto} />
      </div>
    );
  }
}

/**
 * Lifecycle methods in Functional components
 * In functional components we cannot simply add class based lifecycle methods such as:
 * componentDidMount, componentDidUpdate and componentWillMount. However, React.useEffect hook
 * allows us to achieve the same effect as these life cycle methods.
 *
 * The React.useEffect hook accetps a callback, and an array of dependencies. The callback
 * will only re-run if one of these dependencies change, so using React.useEffect with
 * the second argument of [] will only run once, and behaves the same as componentDidMount.
 *
 * We can also use React.useEffect with no dependencies provided, which will run on
 * every re-render. This behaves the same as componentDidUpdate, however will run after
 * every render including the first render.
 *
 * You can return a fucntion from React.useEffect which will run when unmounting. This
 * behaves the same as componentWillUnmount.
 *
 *
 */
const ProfileUsingEffect = ({ name, profilePhotoUrl }) => {
  // componentDidUpdate / componentWillUnmount()
  React.useEffect(() => {
    console.log('Component has mounted');
    return () => {
      console.log('Component is unmounting');
    };
  }, []);

  // componentDidUpdate
  React.useEffect(() => {
    console.log('Component updated');
  });

  return (
    <div>
      <h3>{name}</h3>
      <img src={profilePhotoUrl} />
    </div>
  );
};

/**
 * Summary
 * Prior to React 16.8.0 functional components were limited since
 * we couldn't use lifecycle methods and/or state. Since the hooks and effects
 * were introducerd, functional component could be used to achieve what
 * other wise only class components could achieve.
 *
 * As per React Facebook team, functional components are preferred and may be even
 * optimized for performances in the future releases.
 *
 * Functional components are often cleaner and more conscise, which leads to more
 * readble and testable code.
 */
