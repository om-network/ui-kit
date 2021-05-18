import React from "react";

interface LabelDividerProps {
  text: string;
}

export const LabelDivider = ({ text }: LabelDividerProps) => (
  <div className="relative">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
    </div>
    <div className="relative flex justify-center">
      <span className="px-2 bg-white text-sm text-gray-500">{text}</span>
    </div>
  </div>
);

export default LabelDivider;
