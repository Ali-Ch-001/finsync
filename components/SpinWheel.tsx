"use client";
import { useState, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Image from "next/image";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Data values and colors for the spin wheel (equal size with voucher names)
const datasetValues = [
  { value: 1, color: "#8f7f8f", label: "FoodPanda", details: "10% off on your next order", expiry: "31/12/2024", code: "FP123" },
  { value: 1, color: "#f97066", label: "Careem", details: "Free ride worth $5", expiry: "30/11/2024", code: "CR456" },
  { value: 1, color: "#2e90fa", label: "Golootlo", details: "15% off on electronics", expiry: "31/10/2024", code: "GL789" },
  { value: 1, color: "#fdb022", label: "InDrive", details: "25% off your next ride", expiry: "31/12/2024", code: "ID012" },
  { value: 1, color: "#ee46bc", label: "Uber", details: "20% off on rides", expiry: "15/01/2025", code: "UB345" },
  { value: 1, color: "#854CFF", label: "Daraz", details: "10% off on all products", expiry: "28/02/2025", code: "DZ678" },
];

const SpinWheel = () => {
  // State variables to manage spinning, countdowns, and results
  const [spinning, setSpinning] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const chartRef = useRef<Chart<"doughnut", number[], unknown> | null>(null);

  const numberOfVouchers = datasetValues.length;
  const anglePerSegment = 360 / numberOfVouchers; // Each segment takes an equal part of the circle

  // Data for the Doughnut chart (equal partitions)
  const data = {
    datasets: [
      {
        data: datasetValues.map((item) => item.value),
        backgroundColor: datasetValues.map((item) => item.color),
        borderColor: datasetValues.map((item) => item.color),
        cutout: "67%", // Cutout size for the center
      },
    ],
    labels: datasetValues.map((item) => item.label),
  };

  // Function to start spinning with random rotation
  const handleSpin = () => {
    if (spinning) return; // Prevent multiple spins

    const spinDuration = Math.random() * 5000 + 10000; // Random duration between 10-15 seconds
    const totalRotation = Math.random() * 2000 + 360 * 5; // Spin angle (minimum 5 full rotations)
    const spinEndAngle = rotationAngle + totalRotation; // Final rotation

    setSpinning(true);
    setRotationAngle(spinEndAngle);

    // Wait for the spin to complete
    setTimeout(() => {
      // Adjust for rotation starting at -90 degrees, and set an additional offset
      const adjustedAngle = (spinEndAngle - 90 + anglePerSegment / 2) % 360; // Correct for the initial rotation offset and center alignment
      const winningSegmentIndex = Math.floor((360 - adjustedAngle) / anglePerSegment) % numberOfVouchers; // Calculate the winning index

      setWinnerIndex(winningSegmentIndex);
      setSpinning(false); // End spinning
      setShowPopup(true); // Show the popup after spin
    }, spinDuration);
  };

  // Function to copy voucher code to clipboard
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    alert("Voucher code copied!");
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      {/* Spin Button */}
      <button
        onClick={handleSpin}
        className={`sm:mt-2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg font-bold text-lg transition-all duration-300 hover:bg-blue-600 ${
          spinning ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={spinning}
      >
        {spinning ? "Spinning..." : "Start Spin"}
      </button>

      {/* Spin Circle (Doughnut Chart) */}
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mt-4 md:mt-10">
        <div
          className={`transition-transform duration-[${spinning ? '10s' : '0s'}] ease-out`}
          style={{
            transform: `rotate(${rotationAngle}deg)`,
            transitionDuration: spinning ? '10s' : '0s',
          }}
        >
          <Doughnut
            data={data}
            options={{
              plugins: { legend: { display: false } },
              rotation: -90, // Start position for the wheel
              responsive: true,
              maintainAspectRatio: false,
            }}
            ref={chartRef}
            height={300} // Explicitly set height
            width={300} // Explicitly set width
          />
        </div>
        {/* Black Arrow for indicating spinning */}
        <div
          id="arrow-icon"
          className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-black rotate-180 z-20"
        >
          <svg
            className="h-8 w-8 text-black z-20"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 22 22 2 22"></polygon>
          </svg>
        </div>
      </div>

      {/* Voucher Popup */}
      {winnerIndex !== null && winnerIndex >= 0 && winnerIndex < datasetValues.length && showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl z-50 text-center w-[300px] md:w-[400px]">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🎉 You Won! 
            A {datasetValues[winnerIndex].label} Coupon
          </h3>
          <p className="text-lg text-gray-700 mb-2">
            {datasetValues[winnerIndex].details}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Expiry: {datasetValues[winnerIndex].expiry}
          </p>
          <div className="flex items-center justify-center mb-4">
          <p className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg mr-2">
  {datasetValues[winnerIndex].code}
        </p>
        <button
          onClick={() => handleCopy(datasetValues[winnerIndex].code)}
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
        >
          <div>
            <Image src={"/icons/copy.svg"} alt="Copy Icon" width={24} height={24}/>
          </div>
          
        </button>
</div>
<button
  onClick={() => setShowPopup(false)}
  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
>
  Close
</button>
        </div>
      )}
    </div>
  );
}

export default SpinWheel;