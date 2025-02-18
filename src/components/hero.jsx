import mypic from '../assets/mypic.png'
import '../assets/styles/hero.css'

const Hero = () => {
    return (
      <div className="hero">
        <div className="content">
          <div className="text-section">
            <p className="greeting">Hi, I am</p>
            <h1 className="name">Franz Nathaniel Valdez</h1>
            <p className="description">
              A hardworking front-end dev from WMSU who creates user-friendly websites. Passionate about design and making things work smoothly.
            </p>
          </div>
          <div className="image-section">
            <img className="mypic" src=
  {mypic} alt="Franz Nathaniel Valdez" />
            <p className="role">FRONT-END DEVELOPER</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;