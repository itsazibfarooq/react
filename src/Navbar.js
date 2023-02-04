import logo from './logo.svg';
export default function Navbar(){
  return(
    <div className = 'nav'>
      <img className = "nav--image" src={logo} alt='react logo'></img>
      <h3 className = "nav--logo-title">ReactFacts</h3>
      <h4 className = "nav--project-title">Project - 1</h4>
    </div>
  )
}