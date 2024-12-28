import logo from './logo.svg';
import './App.css';
import Page1 from './component/Page1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page2 from './component/Page2';
import ScrollToTop from './component/Scroll';
import LiveTextDisplay from './react userinput/Livetextdisplay';

// function App() {
//   return (
//     <div className="App">
//   {/* <BrowserRouter>
// <Routes>
//     <Route path ='/'element={<Page1/>}/>
//     <Route path ='/move' element={<Page2/>}/>
// </Routes>
// </BrowserRouter> */}

// <ScrollToTop/>
//     </div>
//   );
// }


// function App() {
//     const dispatch = usedispatch();
//     const isVisible = useSelector((state) => state.toggle.isVisible);
  
//     return (
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <h1>Welcome Message Toggle App</h1>
//         <button onClick={() => dispatch(toggleVisibility())}>
//           {isVisible ? 'Hide' : 'Show'} Message
//         </button>
//         {isVisible && <p style={{ marginTop: '20px' }}>Welcome to the React-Redux App!</p>}
//       </div>
//     );
//   }
  

function App() {
    return (
      <div>
        <LiveTextDisplay />
      </div>
    );
  }

  

export default App;
