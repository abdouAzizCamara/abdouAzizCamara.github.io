"use client";
import React from "react";
import Image from "next/image";
import { FiGlobe } from "react-icons/fi";

export default function EnglishSkill() {
  return (
    <div className="max-w-xl mx-auto mb-8">
      <div className="flex items-center justify-center">
        <div className="w-full sm:w-[540px] flex items-center gap-6 bg-gradient-to-r from-indigo-600 to-cyan-400 text-white rounded-2xl p-5 shadow-lg">
          <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center">
            {/* Try to use a small globe icon as fallback */}
            <FiGlobe className="text-2xl" />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold">English — C1</div>
                <div className="text-xs opacity-90">
                  Fluent — Professional working proficiency
                </div>
              </div>
              <div className="text-xs opacity-90">Level: C1</div>
            </div>

            <div className="mt-3">
              <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                <div className="h-2 bg-white rounded-full w-[85%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
