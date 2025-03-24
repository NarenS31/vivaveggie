// components/LoginDialog.tsx
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginDialog = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State to show forgot password form

  // const handleLogin = () => {
  //   // Handle login functionality here, such as API call
  //   console.log("Logging in with:", { email, password });
  // };

  const handleSignUp = () => {
    // Handle sign-up functionality here, such as API call
    console.log("Signing up with:", { email, password });
  };

  const handlePasswordReset = () => {
    // Handle password reset functionality here, such as sending a reset email
    console.log("Sending password reset to:", email);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isLogin ? "Login" : "Sign Up"}</DialogTitle>
        </DialogHeader>

        {/* Conditional rendering based on current view */}
        {showForgotPassword ? (
          // Forgot Password Form
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handlePasswordReset();
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="email">
                Enter your email to reset your password
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <DialogFooter>
              <Button
                variant="default"
                className="bg-blue-500 hover:bg-blue-600 text-white"
                type="submit"
              >
                Send Password Reset Link
              </Button>
              <Button
                variant="link"
                className="text-blue-400 hover:text-blue-500"
                onClick={() => setShowForgotPassword(false)} // Switch back to Login form
              >
                Back to Login
              </Button>
            </DialogFooter>
          </form>
        ) : (
          // Login or Sign Up Form
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSignUp();
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <DialogFooter>
              <Button
                variant="default"
                className="bg-green-500 hover:bg-green-600 text-white"
                type="submit"
              >
                {isLogin ? "Login" : "Sign Up"}
              </Button>
            </DialogFooter>
          </form>
        )}

        {/* Toggle between Login and Sign Up */}
        {!showForgotPassword && (
          <div className="text-center mt-4">
            <p>
              {isLogin ? (
                <>
                  Do not have an account?{" "}
                  <button
                    onClick={() => setIsLogin(false)} // Switch to sign-up view
                    className="text-blue-500 hover:underline"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsLogin(true)} // Switch to login view
                    className="text-blue-500 hover:underline"
                  >
                    Login
                  </button>
                </>
              )}
            </p>
            {/* Forgot Password Link */}
            {isLogin && (
              <p className="mt-2">
                <button
                  onClick={() => setShowForgotPassword(true)} // Switch to forgot password view
                  className="text-blue-500 hover:underline"
                >
                  Forgot Password?
                </button>
              </p>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
