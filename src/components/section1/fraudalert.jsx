import React, { useState } from "react";

const FraudAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="px-2 py-1">
      {/* Test Alert Button */}
      <button
        onClick={() => setShowAlert(true)}
        className="px-4 py-0 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
      >
        Test Alert
      </button>

      {/* Fraud Detected Popup */}
      {showAlert && (
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            <h2 className="text-xl font-bold text-red-600 mb-4">
              🚨 Fraud Detected
            </h2>
            <p className="text-gray-700 mb-6">
              Suspicious financial activity has been flagged by the system for money laundering.
            </p>
            <button
              onClick={() => setShowAlert(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FraudAlert


