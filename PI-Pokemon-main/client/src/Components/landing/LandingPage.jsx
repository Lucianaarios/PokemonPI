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
import './Landing.css'

const LandingPage = () => {
  // Define the handleButtonClick function
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="containerLanding">
      <div className="imgContainer">
        <Link to='/home'>
          <button className="buttonLanding" onClick={handleButtonClick}> Home</button>
        </Link>
        <img className="imgLanding" src="https://fondosmil.com/fondo/14740.jpg" alt="Imagen representativa" />
      </div>
    </div>
  );
};

export default LandingPage;