/**
 * Rendered prop
 * let's say we have some kind of logic that we want to reuse it
 * in multiple components. In such case we need to encapsulate
 * such shared logic in one place which is what rendered props
 * enable us to do.
 *
 *
 */

import './App.css';
import DetectHover from './components/DetectHover';

function App(props) {
  function render(hovered) {
    const style = {
      backgroundColor: hovered ? 'green' : 'blue',
    };
    return (
      <div style={style} className="App">
        <div>
          <h1>Hello World!</h1>
          <h3>Move your mouse to see some magic happen!</h3>
        </div>
      </div>
    );
  }
  return <DetectHover render={render} />;
}

export default App;
