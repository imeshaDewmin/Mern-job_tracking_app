import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo,FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
       <FormRow type ='text' name='name' defaulValue=''/>
       <FormRow type ='text' name='lastName' labelText='last name'defaulValue=''/>
       <FormRow type ='text' name='location' defaulValue=''/>
       <FormRow type ='email' name='email' defaulValue=''/>
       <FormRow type ='password' name='password' defaulValue=''/>

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>Already a member?
          <Link to='/login' className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;