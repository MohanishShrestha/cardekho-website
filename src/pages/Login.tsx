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

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, user, error } = useSelector(
    (state: RootState) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <Card className="w-full max-w-sm shadow-xl rounded-xl border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {user && (
            <p className="text-green-600 text-sm text-center">
              Welcome {user.name}!
            </p>
          )}
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button
            onClick={handleLogin}
            className="w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
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
        </CardFooter>
      </Card>
    </div>
  );
}
