import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiLogout } from "react-icons/hi";
import { gsap } from "gsap";

const UserNav = () => {
  const [userDropdown, setUserDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // GSAP Animation
  useEffect(() => {
    if (!dropdownRef.current) return;

    if (userDropdown) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -10,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [userDropdown]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setUserDropdown(!userDropdown)}
        className={`flex items-center gap-2 focus:outline-none transition-transform duration-200 ${
          userDropdown ? "scale-105" : "scale-100"
        }`}
      >
        <span>أحمد</span>
        <Image
          src="/image.webp"
          alt="user"
          width={40}
          height={40}
          className="rounded-full"
        />
      </button>

      {userDropdown && (
        <div
          ref={dropdownRef}
          className="absolute end-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg py-2 z-50"
        >
          <Link
            href="/profile"
            className="block px-4 py-2 hover:bg-gray-700"
          >
            الملف الشخصي
          </Link>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
            <HiLogout /> تسجيل خروج
          </button>
        </div>
      )}
    </div>
  );
};

export default UserNav;
