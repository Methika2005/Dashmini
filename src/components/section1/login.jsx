import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "../../supabaseClient"


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    console.log("Login success:", data);
    alert("Login successful!");

    navigate('/dashboard'); // React way (better than window.location)
  }
};

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-slate-200">
        
        {/* Branding/Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
            <span className="text-white font-bold text-xl">$</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">FinancePortal</h2>
          <p className="text-slate-500 mt-2 text-sm">Employee Secure Access Terminal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Corporate Email</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              placeholder="employee@firm.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Action Button */}
          <button 
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 rounded-md transition-colors shadow-md"
          >
            Authorize & Sign In
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400 italic">
            Authorized Personnel Only. All access is logged and monitored.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;