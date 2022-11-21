import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;


/*
<p>liked {likes} times</p>
const title = "welcome to the new blog"
  const likes = 50
  const person = {name: "arip", age: 25}
  const link ="htttp://www.google.com"
{<p>{person}</p>}

<p>{10}</p>
<p>{"helllo arip"}</p>
<p>{[1,2,3,4,5]}</p>
<p>{Math.random() * 10}</p>

<a href={link}>Goolge Site</a>
*/