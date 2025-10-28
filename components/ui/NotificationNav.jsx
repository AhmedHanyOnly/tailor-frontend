import React, { useState, useRef, useEffect } from "react";
import { HiBell } from "react-icons/hi";
import { gsap } from "gsap";

export const NotificationNav = () => {
  const [notifDropdown, setNotifDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!dropdownRef.current) return;

    if (notifDropdown) {
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
  }, [notifDropdown]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setNotifDropdown(!notifDropdown)}
        className={`text-xl focus:outline-none transition-transform duration-200 ${
          notifDropdown ? "scale-125 text-[var(--color-primary)]" : "scale-100 text-white"
        }`}
      >
        <HiBell />
      </button>

      {notifDropdown && (
        <div
          ref={dropdownRef}
          className="absolute end-0 mt-2 w-60 bg-gray-800 rounded-md shadow-lg p-3 z-50"
        >
          <p className="text-sm">لا توجد إشعارات</p>
        </div>
      )}
    </div>
  );
};
