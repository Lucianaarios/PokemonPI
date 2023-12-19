// import { Link } from "react-router-dom"
// import './Landing.css'

// const Landing = () =>{
//     return (
//         <div className="container">
//           <img className="imgLanding" src='/assets/imgs/logoLanding.png' alt="" />
//           <Link to='/home'>
//             <button className="btnLanding">Home</button>
//           </Link>
//         </div>
//       );
// }
// export default Landing

import { Link } from "react-router-dom";

const LandingPage = () => {
  // Define the handleButtonClick function
  const handleButtonClick = () => {
    // Add the logic you want to execute when the button is clicked
    console.log("Button clicked!");
  };

  return (
    <div>
      <img src="https://fondosmil.com/fondo/14740.jpg" alt="Imagen representativa" />
      <Link to='/home'>
        {/* Use the handleButtonClick function in the onClick event */}
        <button onClick={handleButtonClick}>Ir a la Home Page</button>
      </Link>
    </div>
  );
};

export default LandingPage;