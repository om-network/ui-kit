import classNames from "classnames";
import React, { FunctionComponent, MouseEvent, ReactNode, useState } from "react";

export interface ToolbarButtonProps {
  index?: number;
  first?: boolean;
  last?: boolean;
  active?: boolean;
  label: string;
  title?: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
}

export interface ToolbarButtonDispatch {
  onTabClick?: (item: number) => void;
}

export interface ToolbarDividerProps {
  menu: Array<ToolbarButtonProps>;
  toolBarClasses?: string;
  children: ReactNode;
}

export const ToolbarButton: FunctionComponent<ToolbarButtonProps & ToolbarButtonDispatch> = ({
  label,
  onTabClick,
  first = false,
  index = 0,
  active = false,
  last = false,
  title,
  icon: Icon,
}) => {
  const btnClasses = classNames(
    "relative inline-flex items-center px-4 py-2",
    "border border-gray-300 bg-white text-sm font-medium text-gray-400",
    "hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200",
    {
      "bg-gray-200": active,
      "rounded-l-md": first,
      "rounded-r-md": last,
    }
  );

  const onButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (onTabClick) {
      onTabClick(index);
    }
  };

  return (
    <button type="button" className={btnClasses} title={title} onClick={onButtonClick}>
      <Icon className="h-5 w-5 text-gray-600" />
      <span className="ml-1 text-xs">{label}</span>
    </button>
  );
};

export const ToolbarDivider: FunctionComponent<ToolbarDividerProps> = ({ toolBarClasses = "mt-4", children, menu }) => {
  const [tabNumber, setTabNumber] = useState<number>(0);
  const containerClasses = classNames("relative", toolBarClasses);
  const menuLength = menu.length;

  return (
    <>
      <div className={containerClasses}>
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="relative z-0 inline-flex shadow-sm rounded-md -space-x-px">
            {menu.map((itemProps, idx: number) => (
              <ToolbarButton
                first={idx === 0}
                last={idx === menuLength - 1}
                active={idx === tabNumber}
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                {...itemProps}
                onTabClick={setTabNumber}
                index={idx}
              />
            ))}
          </span>
        </div>
      </div>
      <>
        {React.Children.map(children, (child, idx: number) => {
          if (idx === tabNumber) return <div className="block">{child}</div>;
          return <div className="hidden">{child}</div>;
        })}
      </>
    </>
  );
};
