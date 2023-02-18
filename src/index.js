import ReactDOM from "react-dom/client";
import './app.css'

function App(){
  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);