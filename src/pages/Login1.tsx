import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logout } from "../store/auth/authSlice";
import type { RootState, AppDispatch } from "../store";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginRegister1() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, user, error } = useSelector(
    (state: RootState) => state.auth
  );

  const [isRegister, setIsRegister] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const handleRegister = () => {
    if (!regName || !regEmail || !regPassword) {
      alert("Please fill all fields!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = existingUsers.some((u: any) => u.email === regEmail);

    if (userExists) {
      alert("User already exists!");
      return;
    }

    const newUser = {
      name: regName,
      email: regEmail,
      password: regPassword,
    };

    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    alert("Registered successfully!");

    setRegName("");
    setRegEmail("");
    setRegPassword("");

    setIsRegister(false);
  };

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4">
      <Card className="w-full max-w-sm shadow-xl rounded-xl border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {isRegister ? "Register" : "Login"}
          </CardTitle>
        </CardHeader>

        {/*REGISTER FORM*/}
        {isRegister ? (
          <CardContent className="space-y-4">
            <Input
              placeholder="Full Name"
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
            />

            <Input
              placeholder="Email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Password"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
            />
          </CardContent>
        ) : (
          /* LOGIN FORM */
          <CardContent className="space-y-4">
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {user && (
              <p className="text-green-600 text-sm text-center">
                Welcome {user.name}!
              </p>
            )}
          </CardContent>
        )}

        <CardFooter className="flex flex-col gap-3">
          {isRegister ? (
            <>
              <Button className="w-full" onClick={handleRegister}>
                Register
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsRegister(false)}
              >
                Already have an account?
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={handleLogin}
                className="w-full"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsRegister(true)}
              >
                Create an Account
              </Button>

              {user && (
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Button>
              )}
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
