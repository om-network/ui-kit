import * as Hi from "@heroicons/react/outline";
import * as React from "react";

interface ButtonDividerProps {
    onClick: () => void;
    text?: string;
}

const ButtonDivider = ({ text = "More", onClick }: ButtonDividerProps) => (
    <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t-0 border-gray-200" />
        </div>
        <div className="relative flex justify-center">
            <button
                type="button"
                onClick={onClick}
                className="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-400 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
                <Hi.PlusIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                {text}
            </button>
        </div>
    </div>
);

export default ButtonDivider;
