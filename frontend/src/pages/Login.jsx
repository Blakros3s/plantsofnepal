import { useState, useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Optional floating effect (just for fun)
  useEffect(() => {
    const floating = document.getElementById("plant-image");
    if (floating) {
      floating.animate(
        [
          { transform: "translateY(0px)" },
          { transform: "translateY(-10px)" },
          { transform: "translateY(0px)" }
        ],
        {
          duration: 4000,
          iterations: Infinity
        }
      );
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel */}
      <div className="lg:w-1/2 w-full bg-gradient-to-br from-green-100 to-green-300 flex flex-col justify-center items-center p-12 relative overflow-hidden">
        <h1 className="text-4xl font-bold text-green-800 mb-6 z-10 drop-shadow-lg">
          Welcome to Plants of Nepal 🌿
        </h1>
        <p className="text-green-700 text-lg text-center mb-8 z-10 max-w-md">
          Reconnect with nature. Log in and grow your plant journey with us!
        </p>
        <img
          id="plant-image"
          src="https://cdn-icons-png.flaticon.com/512/2909/2909769.png"
          alt="Plant"
          className="w-60 z-10"
        />
        <div className="absolute inset-0 bg-[radial-gradient(#c9f7c2_1px,transparent_1px)] bg-[length:20px_20px] opacity-20" />
      </div>

      {/* Right Panel */}
      <div className="lg:w-1/2 w-full bg-white flex items-center justify-center px-8 py-16">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">
            Sign In to Your Account
          </h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-green-700 font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-green-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-green-700 font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-green-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-green-600">
              <a href="#" className="hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition duration-300"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-green-600">
            Don’t have an account?{" "}
            <a href="#" className="text-green-800 font-medium hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
