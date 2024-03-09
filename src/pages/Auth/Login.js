import React, { useState, useContext} from "react";
import Layout from "../../components/Layout";
import UserContext from "../../context/UserContext";
import Profile from "../Profile";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setUser({ email, password });

  };
  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-8">
            <form onSubmit={handleSubmit} className="p-5 shadow">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
         <div>
          <p>State management using context api which is global state</p>
         </div>
             <Profile/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
