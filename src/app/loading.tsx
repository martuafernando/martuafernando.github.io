'use client';

import React, { useEffect, useState } from 'react';

export default function Loading () {
  const [message, setMessage] = useState("Loading, please wait...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("This is taking longer than expected...");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black border-solid mx-auto mb-4"></div>
        <p className="text-lg font-medium text-gray-700">{message}</p>
      </div>
    </div>
  );
};
