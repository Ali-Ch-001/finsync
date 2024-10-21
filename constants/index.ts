export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/home",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
  {
    imgURL: "/icons/spin-wheel.svg",
    route: "/spin-wheel",
    label: "Spin Wheel",
  },
  {
    imgURL: "/icons/loan-form.png",
    route: "/loan-form",
    label: "Loan Form",
  },
];

export const socialIcons = [
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    icon: "/icons/facebook.svg",
    position: { top: "40%", left: "8%" },
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    icon: "/icons/instagram.svg",
    position: { top: "25%", left: "83%" },
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com",
    icon: "/icons/linkedin.svg",
    position: { top: "93%", left: "55%" },
  },
  {
    name: "GitHub",
    url: "https://www.github.com",
    icon: "/icons/github.svg",
    position: { top: "70%", left: "83%" },
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    icon: "/icons/twitter.svg",
    position: { top: "90%", left: "20%" },
  },
];

interface User {
  name: string;
  image: string;
  link: string;
}

export const usersData: Record<string, User[]> = {
  Instagram: [
    { name: "Ali Mohsin", image: "/images/ali.webp", link: "https://www.instagram.com/ali.__.ch_" },
    { name: "Kabeer Ahmad", image: "/images/kabeer.webp", link: "https://www.instagram.com/kabeeahmad.ka" },
    { name: "Fatima Ahmad", image: "/images/fatima.webp", link: "https://www.instagram.com/fatinum._" },
  ],
  Facebook: [
    
    { name: "Kabeer Ahmad", image: "/images/kabeer.webp", link: "https://www.facebook.com/kabeerahmad381?mibextid=LQQJ4d" },
    { name: "Ali Mohsin", image: "/images/ali.webp", link: "https://www.facebook.com/profile.php?id=100037849306022&mibextid=LQQJ4d" },
    { name: "Fatima Ahmad", image: "/images/fatima.webp", link: "https://www.facebook.com/profile.php?id=100070665133899" },
  ],
  LinkedIn: [
    
    { name: "Ali Mohsin", image: "/images/ali.webp", link: "https://www.linkedin.com/in/ali-787-ch" },
    { name: "Kabeer Ahmad", image: "/images/kabeer.webp", link: "https://www.linkedin.com/in/kabeer-ahmad" },
    { name: "Fatima Ahmad", image: "/images/fatima.webp", link: "https://www.linkedin.com/in/fatima-0ahmad-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  ],
  GitHub: [
    
    { name: "Ali Mohsin", image: "/images/ali.webp", link: "https://github.com/Ali-Ch-001" },
    { name: "Kabeer Ahmad", image: "/images/kabeer.webp", link: "https://github.com/Kabeer-Ahmad" },
    { name: "Fatima Ahmad", image: "/images/fatima.webp", link: "https://github.com/fatimaa-ahmad" },
  ],
  Twitter: [
    { name: "Ali Mohsin", image: "/images/ali.webp", link: "www.x.com/Ali787ch" },
    { name: "Kabeer Ahmad", image: "/images/kabeer.webp", link: "" },
    { name: "Fatima Ahmad", image: "/images/fatima.webp", link: "https://www.instagram.com/fatinum._" },
  ],
};



export const topCategoryStyles = {
  "Food and Drink": {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-success-25",
    circleBg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionCategoryStyles = {
  "Food and Drink": {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transfer: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  Travel: {
    borderColor: "border-[#0047AB]",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};
