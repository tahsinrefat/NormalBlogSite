import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const person = { name: 'yoshi', age: 30 };
  // const link = "https://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
          </Routes>
          {/* <h1>{ title }</h1>
          <p>Liked { likes } times</p> */}
          {/* <p>{ person }</p> */}

          {/* <p>{ 10 }</p>
          <p>{ "Hello Ninjas" }</p>
          <p>{ [1,2,3,4,5] }</p>
          <p>{ Math.random()*10 }</p>

          <a href={ link }>Google Site</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
