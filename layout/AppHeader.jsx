"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiHome,
  HiShoppingBag,
  HiChatAlt2,
  HiBell,
  HiLogout,
  HiCog,
  HiUsers,
  HiUser,
} from "react-icons/hi";
import Image from "next/image";
import { NotificationNav } from "@/components/ui/NotificationNav";
import UserNav from "@/components/ui/UserNav";

const AppHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [notifDropdown, setNotifDropdown] = useState(false);

  const navLinks = [
    { href: "/", name: "الرئيسية", icon: <HiHome /> },
    { href: "/settings", name: "الاعدادات", icon: <HiCog /> },
    { href: "/clients", name: "العملاء", icon: <HiUsers /> },
    { href: "/tailors", name: "الخياطين", icon: <HiUser /> },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-md w-full">
      {/* الجزء العلوي */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between px-4 md:px-6 py-3 border-b border-gray-700">
          {/* اللوجو */}
          <div className="text-2xl font-bold cursor-pointer flex-shrink-0 ">
            <Link href="/" className="flex  items-center">
              <Image src="/logo.png" alt="logo" width={60} height={60} />
              <h1 className="">الخياط</h1>
            </Link>
          </div>

          {/* بيانات اليوزر + إشعارات */}
          <div className="flex items-center gap-4 ms-auto relative">
            {/* الاشعارات */}
            <NotificationNav />

            {/* اسم وصورة اليوزر */}
            <UserNav />
          </div>

          {/* زر الموبايل */}
          <div className="md:hidden ml-4">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-3xl focus:outline-none"
            >
              {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* الجزء السفلي - قوائم التنقل */}
      <nav className="bg-gray-900 md:bg-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-4 md:px-6">
          <ul
            className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-2 transition-all ${
              mobileOpen ? "block" : "hidden md:flex"
            }`}
          >
            {navLinks.map((link, index) => (
              <li key={index} className="rounded-md hover:bg-gray-800">
                <Link
                  href={link.href}
                  className="flex items-center gap-2 px-3 py-2"
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
