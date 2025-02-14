
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserComplaint = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('client')) {
      navigate('/');
      return alert("Please login as a user");
    }
  }, []);

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    department: '',
    subject: '',
    description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!localStorage.getItem("client")) {
      return alert("Please Login first");
    }

    const url = "https://complaint-mania-be.onrender.com/api/complaint";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'client': localStorage.getItem("client")
      },
      body: JSON.stringify(credentials)
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      alert(data.message);
    }
  };

  const onHandleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value.trim() });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className='flex-grow flex items-center justify-center bg-gradient-to-r from-red-300 bg-cover p-4'>
        <div className='bg-pink-950 bg-opacity-70 shadow-2xl text-white p-5 border-2 text-[20px] w-full max-w-lg md:max-w-2xl lg:max-w-4xl mb-5'>
          <h2 className="p-4 rounded-lg font-bold bg-pink-950 text-white text-center">FILE COMPLAINT</h2>
          <form onSubmit={handleSubmit}  >
            <div className="mb-4 text-[18px] sm:text-[20px]">
              <label className="block text-white font-medium mb-2 mt-3" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder='Enter your name'
                onChange={onHandleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
                required
              />
            </div>
            <div className="mb-4 text-[18px] sm:text-[20px]">
              <label className="block text-white font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder='Enter your email id'
                onChange={onHandleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
                required
              />
            </div>
            <div className="mb-4 text-[18px] sm:text-[20px]">
              <label className="block text-white font-medium mb-2" htmlFor="department">Department</label>
              <input
                type='text'
                placeholder='Enter Department'
                name="department"
                onChange={onHandleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
                required
              />
            </div>
            <div className="mb-4 text-[18px] sm:text-[20px]">
              <label className="block text-white font-medium mb-2" htmlFor="subject">Subject of concern</label>
              <input
                type="text"
                name="subject"
                placeholder='Write the crux/subject'
                onChange={onHandleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
                required
              />
            </div>
            <div className="mb-4 text-[18px] sm:text-[20px]">
              <label className="block text-white font-medium mb-2" htmlFor="description">Description</label>
              <textarea
                name="description"
                placeholder='Elaborate your complaint here'
                onChange={onHandleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-950 text-white font-medium py-2 px-4 rounded-md hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-900 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserComplaint;
