import classNames from "classnames";
import React, { FunctionComponent, MouseEvent } from "react";

import { Avatar } from "../Avatar";

export interface ListViewItemsProps {
    actionLabel?: string;
    onItemClick: (entity: string) => void;
    items: Array<{
        id: string;
        image?: string;
        name: string;
        description: string;
    }>;
}

export const ListViewItems: FunctionComponent<ListViewItemsProps> = ({ items, onItemClick, actionLabel = "Add" }) => {
    const _onItemClick = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        const item = event.currentTarget.getAttribute("data-item");
        item && onItemClick(item);
    };

    const itemClasses = classNames("text-gray-600 text-xs hover:text-gray-900 cursor-pointer");

    return (
        <ul className="divide-y divide-gray-200">
            {items.map((item, idx) => {
                let liClasses = classNames("flex", {
                    "py-3": idx !== items.length,
                    "pb-0": idx + 1 === items.length
                });

                return (
                    <li className={liClasses} key={idx}>
                        <Avatar size={10} src={item.image} alt={item.name} />
                        <div className="ml-3 flex flex-col flex-grow">
                            <span className="text-sm font-medium text-gray-900">{item.name}</span>
                            <span className="text-xs text-gray-500">{item.description}</span>
                        </div>
                        <div onClick={_onItemClick} data-item={item.id} className={itemClasses}>
                            <span>{actionLabel}</span>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
