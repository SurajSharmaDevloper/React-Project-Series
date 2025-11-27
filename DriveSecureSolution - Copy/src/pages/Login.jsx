import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import Logo from "../components/base/Logo";
import InputBox from "../components/base/InputBox";
import Button from "../components/base/Button";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const user = await login(username, password);
    if (user && user.role) {
      // Redirect based on role
      const role = user.role;
      if (role === "Admin") navigate("/admin", { replace: true });
      else if (role === "Dealer") navigate("/home", { replace: true });
      else if (role === "Issuer")
        navigate("/issuer/policy_mis", { replace: true });
      else navigate("/login", { replace: true });
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <main className="w-dvw h-dvh  bg-surface ">
      <div className="w-full h-full max-[1070px]:bg-[#e36e53] flex justify-center items-start max-[1070px]:flex-col">
        <div className="w-[60%] max-[1070px]:hidden max-[1070px]:w-full h-full bg-primary flex flex-col gap-5 justify-center items-center">
          <img
            className="w-150"
            src="src/assets/media/DSS_Login_img.png"
            alt=""
          />
        </div>
        <div className="w-[40%] max-[1070px]:w-full h-full max-[1070px]:h-auto  flex justify-center items-center">
          <div className="bg-light max-[1070px]:h-full  max-[1070px]:w-[90%] max-w-[400px] rounded-xl p-5">
            <div className="w-full mb-5 flex justify-center">
              <img className="w-100" src="./Dss_Logo.png" alt="" />
            </div>
            <hr className="text-muted" />
            <form onSubmit={handleSubmit} className=" p-5 w-full ">
              <h2 className="text-3xl text-secondary font-bold mb-6 text-center">
                User Login
              </h2>

              <div className="mb-4">
                <InputBox
                  label="Username"
                  required
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <InputBox
                  label="Password"
                  type="password"
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full">
                Login
              </Button>
              {error && (
                <p className="text-red-500 text-sm text-center mt-3 mb-3">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
