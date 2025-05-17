import React, { useState } from 'react';
import { FaLeaf, FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Username must be at least 3 letters')
        .required('Username is required.'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long.')
        .required('Password is required.'),
    }),
    onSubmit: (values) => {
      console.log('Logging in with:', values);
    },
  });

  return (
    <div className="h-screen w-full bg-white flex items-center justify-center px-4 overflow-hidden">
      <div className="w-full max-w-sm mx-auto overflow-auto sm:overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 border border-green-400 relative overflow-hidden w-full"
        >
          <div className="text-center mb-6">
            <FaLeaf className="text-4xl text-green-600 inline-block animate-spin-slow" />
            <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mt-2">Forest Guardian Login</h2>
            <p className="text-green-600 text-sm mt-1">Enter your realm credentials</p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-200 border-4 border-green-600 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-green-700">🌿</span>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-green-800 font-semibold">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className="w-full mt-1 px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.username}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="password" className="block text-green-800 font-semibold">Password</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="w-full mt-1 px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-green-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg shadow-md transition duration-300"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
