"use client";

import { Tabs } from "@/components/ui/tabs-section";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { socialIcons } from "@/constants";

const AllTabs = () => {
  const tabs = [
    {
      title: "Overview",
      value: "overview",
      content: (
        <div className="w-full overflow-hidden relative h-auto sm:h-full rounded-2xl p-4 sm:p-10 text-base sm:text-xl font-medium text-white bg-gradient-to-br from-blue-500 to-blue-700">
          <h2 className="text-xl sm:text-4xl font-bold mb-4 sm:mb-6">Overview of Features</h2>
          <ul className="list-disc ml-4 sm:ml-6 space-y-2 sm:space-y-4">
            <li>Manage multiple bank accounts in one unified platform.</li>
            <li>Track and categorize your expenses with ease.</li>
            <li>Securely transfer funds between accounts with real-time tracking.</li>
            <li>Access detailed transaction history at any time.</li>
            <li>Apply for personal or business loans with simple steps.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Financial Services",
      value: "financial-services",
      content: (
        <div className="w-full overflow-hidden relative h-auto sm:h-full rounded-2xl p-4 sm:p-10 text-base sm:text-xl font-medium text-white bg-gradient-to-br from-blue-500 to-blue-700">
          <h2 className="text-xl sm:text-4xl font-bold mb-4 sm:mb-6">Comprehensive Financial Services</h2>
          <ul className="list-disc ml-4 sm:ml-6 space-y-2 sm:space-y-4">
            <li>Low-cost money transfers across various banks.</li>
            <li>Manage and automate bill payments effortlessly.</li>
            <li>Apply for personal or business loans tailored to your needs.</li>
            <li>Request new or replacement cards with just a few clicks.</li>
            <li>Control your debit, credit, and prepaid cards from a single dashboard.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Rewards & Offers",
      value: "rewards-offers",
      content: (
        <div className="w-full overflow-hidden relative h-auto sm:h-full rounded-2xl p-4 sm:p-10 text-base sm:text-xl font-medium text-white bg-gradient-to-br from-blue-500 to-blue-700">
          <h2 className="text-xl sm:text-4xl font-bold mb-4 sm:mb-6">Exciting Rewards & Offers</h2>
          <ul className="list-disc ml-4 sm:ml-6 space-y-2 sm:space-y-4">
            <li>Participate in the weekly spin wheel for a chance to win amazing vouchers.</li>
            <li>Exclusive discounts on shopping, dining, and travel.</li>
            <li>Earn cashback and rewards with select purchases.</li>
            <li>Track your rewards and redeem them directly in the app.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Learning Hub",
      value: "learning-hub",
      content: (
        <div className="w-full overflow-hidden relative h-auto sm:h-full rounded-2xl p-4 sm:p-10 text-base sm:text-xl font-medium text-white bg-gradient-to-br from-blue-500 to-blue-700">
          <h2 className="text-xl sm:text-4xl font-bold mb-4 sm:mb-6">Financial Learning Hub</h2>
          <ul className="list-disc ml-4 sm:ml-6 space-y-2 sm:space-y-4">
            <li>Expert advice on managing your finances and savings.</li>
            <li>Discover new strategies for growing your wealth.</li>
            <li>Stay updated with the latest financial market trends.</li>
            <li>Gain insights into global financial news that matters to you.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "What's New",
      value: "whats-new",
      content: (
        <div className="w-full overflow-hidden relative h-auto sm:h-full rounded-2xl p-4 sm:p-10 text-base sm:text-xl font-medium text-white bg-gradient-to-br from-blue-500 to-blue-700">
          <h2 className="text-xl sm:text-4xl font-bold mb-4 sm:mb-6">Latest Features & Updates</h2>
          <ul className="list-disc ml-4 sm:ml-6 space-y-2 sm:space-y-4">
            <li>Explore new features designed to improve your financial experience.</li>
            <li>Get notified of platform improvements and offers.</li>
            <li>New tools to help manage your finances more effectively.</li>
            <li>Stay tuned for upcoming updates and exclusive features!</li>
          </ul>
        </div>
      ),
    },
  ];



   return (
    <div className="relative flex flex-col items-center justify-start h-auto sm:h-[40rem] w-full px-4 sm:px-0 pt-6 sm:pt-0">
      {/* Tabs Section */}
      <Tabs tabs={tabs} />

      {/* Social Media Icons for Desktop */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block">
        {socialIcons.map((icon, idx) => {
          const randomRotation = Math.random() * 360; // Generate random initial rotation
          return (
            <motion.a
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="absolute pointer-events-auto"
              style={{
                top: icon.position.top,
                left: icon.position.left,
              }}
              initial={{ rotate: randomRotation }} // Set the initial random rotation
              animate={{ rotate: randomRotation }} // Maintain the initial rotation when not hovered
              whileHover={{
                scale: 1.5, // Increase size on hover
                rotate: randomRotation + (Math.random() * 10 - 5), // Slight random rotation during hover
                filter: "brightness(1.3)", // Increase glow on hover
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Image
                src={icon.icon}
                alt={icon.name}
                width={100} // Icon size
                height={100}
                className="drop-shadow-lg hover:drop-shadow-2xl"
              />
            </motion.a>
          );
        })}
      </div>

      {/* Social Media Icons for Mobile */}
      <div className="fixed bottom-0 flex justify-around items-center bg-white py-3 w-[100%] sm:hidden z-20 overflow-x-hidden">
        {socialIcons.map((icon, idx) => (
          <motion.a
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            className="pointer-events-auto"
            whileHover={{
              scale: 1.2,
              filter: "brightness(1.3)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Image
              src={icon.icon}
              alt={icon.name}
              width={50} // Smaller size for mobile view
              height={50}
              className="drop-shadow-lg hover:drop-shadow-2xl"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default AllTabs;