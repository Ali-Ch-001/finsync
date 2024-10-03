/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...tabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-col sm:flex-row items-center justify-between py-4 px-6 bg-white shadow-md w-full",
          containerClassName
        )}
        style={{ maxWidth: "100vw" }}
      >
        {/* Logo and name */}
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <Image src="/icons/logo.svg" width={34} height={34} alt="FinSync logo" />
          <span className="text-lg sm:text-2xl font-bold text-gray-800 whitespace-nowrap">
            FinSync
          </span>
        </div>

        {/* Tab buttons */}
        <div className={cn("flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto", containerClassName)}>
          {tabs.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => moveSelectedTabToTop(idx)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className={cn(
                "relative px-3 sm:px-4 py-2 rounded-full bg-white hover:bg-gray-300 text-gray-700 font-medium transition whitespace-nowrap",
                tabClassName
              )}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {active.value === tab.value && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    "absolute inset-0 bg-blue-500 text-white rounded-full ",
                    activeTabClassName
                  )}
                />
              )}

              <span className="relative block text-black">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Sign In and Sign Up buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Link href="/sign-in" passHref>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
              Sign In
            </button>
          </Link>
          <Link href="/sign-up" passHref>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-900 transition w-full sm:w-auto">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full mt-6 sm:mb-10 px-4 sm:px-0 pb-10 sm:pb-0">
        <FadeInDiv
          tabs={tabs}
          active={active}
          key={active.value}
          hovering={hovering}
          className={cn("flex justify-center items-center max-w-5xl mx-auto", contentClassName)}
        />
      </div>
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
  active,
}: {
  className?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };

  return (
    <div className="relative w-full h-auto sm:h-screen flex items-start justify-center pt-0 sm:pt-10 ">
      <div className="relative w-full h-auto sm:h-[80%] max-w-5xl mx-auto"> {/* Changed h-full to h-auto */}
        {tabs.map((tab, idx) => (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              scale: 1 - idx * 0.1,
              top: hovering ? idx * -50 : 0,
              zIndex: -idx,
              opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            }}
            animate={{
              y: isActive(tab) ? [0, 40, 0] : 0,
            }}
            className={cn("w-full h-auto sm:h-[80%] absolute ", className)} // Fixed height for desktop, auto for mobile
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
