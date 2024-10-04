"use client";

import { Tabs } from "@/components/ui/tabs-section";
import Image from "next/image";
import { motion } from "framer-motion";
import { socialIcons, usersData } from "@/constants";
import { useState, useEffect } from "react";


type User = {
  name: string;
  image: string;
  link: string;
};

type PopupData = {
  users: User[];
  iconName: string;
};


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

 
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState<PopupData | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  // Check if the user is on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define mobile as <= 768px width
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleIconClickMobile = (iconName: keyof typeof usersData) => {
    // On mobile, open the popup in the center when clicking the icon
    setPopupData({ users: usersData[iconName], iconName });
    setShowPopup(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleIconHoverDesktop = (event: any, iconName: keyof typeof usersData) => {
    // For desktop: Popup near the hovered icon
    if (!isMobile) {
      const rect = event.currentTarget.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      let top = rect.top;
      let left = rect.left + rect.width + 10; // Default: to the right of the icon

      if (screenWidth - rect.right < 150) {
        left = rect.left - 255;
      } else if (rect.top < 100) {
        top = rect.bottom + 10;
        left = rect.left + rect.width / 2 - 75;
      }

      setPopupData({ users: usersData[iconName], iconName });
      setPopupPosition({ top, left });
      setShowPopup(true);
    }
  };

  const handleMouseLeaveDesktop = () => {
    if (!isMobile) setShowPopup(false);
  };

  const closePopupMobile = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-start h-auto sm:h-[40rem] w-full px-4 sm:px-0 pt-6 sm:pt-0">
      {/* Tabs Section */}
      <Tabs tabs={tabs} />

      {/* Social Media Icons for Desktop */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block">
        {socialIcons.map((icon, idx) => {
          const randomRotation = Math.random() * 360;

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
              initial={{ rotate: randomRotation }}
              animate={{ rotate: randomRotation }}
              whileHover={{
                scale: 1.5,
                filter: "brightness(1.5)", 
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              onMouseEnter={(event) => handleIconHoverDesktop(event, icon.name as keyof typeof usersData)} // Show popup on hover for desktop
              onMouseLeave={handleMouseLeaveDesktop} 
            >
              <Image
                src={icon.icon}
                alt={icon.name}
                width={100}
                height={100}
                className="drop-shadow-lg hover:drop-shadow-2xl"
              />
            </motion.a>
          );
        })}
      </div>

      {/* Popup for Desktop With Hover */}
      {!isMobile && showPopup && popupData && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute p-4 bg-white rounded-lg shadow-lg z-20"
          style={{
            top: popupPosition.top,
            left: popupPosition.left,
            width: "250px",
          }}
          onMouseEnter={() => setShowPopup(true)} // Keep popup visible when hovering (desktop)
          onMouseLeave={handleMouseLeaveDesktop} // Close when leaving popup (desktop)
        >
          {popupData.users.map((user, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 mb-2 hover:bg-gray-100 p-2 rounded-md transition-all"
            >
              <Image src={user.image} alt={user.name} width={40} height={40} className="rounded-full" />
              <div>
                <h3 className="font-bold">{user.name}</h3>
                <a
                  href={user.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Popup for Mobile With Touch*/}
      {isMobile && showPopup && popupData && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed p-4 bg-white rounded-lg shadow-lg z-20"
          style={{
            top: "55%",
            left: "0%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {popupData.users.map((user, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 mb-2 hover:bg-gray-100 p-2 rounded-md transition-all"
            >
              <Image src={user.image} alt={user.name} width={40} height={40} className="rounded-full" />
              <div>
                <h3 className="font-bold">{user.name}</h3>
                <a
                  href={user.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
          <button
            className="mt-4 bg-blue-500 text-white py-1 px-4 rounded-md"
            onClick={closePopupMobile}
          >
            Close
          </button>
        </motion.div>
      )}

      {/* Social Media Icons for Mobile */}
      <div className="fixed bottom-0 flex justify-around items-center bg-white py-3 w-[100%] sm:hidden z-20 overflow-x-hidden">
        {socialIcons.map((icon, idx) => (
          <motion.a
            key={idx}
            className="pointer-events-auto"
            onClick={() => handleIconClickMobile(icon.name as keyof typeof usersData)} // Show popup on click for mobile
            whileHover={{
              scale: 1.2,
              filter: "brightness(1.3)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Image
              src={icon.icon}
              alt={icon.name}
              width={50}
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