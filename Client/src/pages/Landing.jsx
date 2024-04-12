import styled from "styled-components";
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from "react-router-dom";
import { Logo } from "../components";


const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Job <span>Tracking </span>App
          </h1>
          <p>
            Introducing our cutting-edge job tracking platform - the ultimate solution for streamlining your hiring process and managing your workforce efficiently.
            Designed with both employers and job seekers in mind, our platform offers a seamless experience from job posting to candidate selection.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}



export default Landing;