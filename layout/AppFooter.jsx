"use client";
import React from "react";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
  RiSnapchatFill,
} from "react-icons/ri";

const AppFooter = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700">
      <div className="container mx-auto py-6 px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* أيقونات السوشيال */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white hover:text-blue-500 transition-colors text-2xl"
            >
              <RiInstagramFill />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-700 transition-colors text-2xl"
            >
              <RiFacebookFill />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors text-2xl"
            >
              <RiTwitterFill />
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 transition-colors text-2xl"
            >
              <RiSnapchatFill />
            </a>
          </div>

          {/* حقوق الملكية */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-gray-300">
              © 2025  جميع الحقوق محفوظة. القالب من قبل{" "}
              <a
                href="https://www.pixelrocket.store"
                className="text-[var(--color-primary)] hover:underline"
              >
                خياط
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
