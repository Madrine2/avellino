import { NavLink } from "@mantine/core";
import React from "react";

type DropItem = {
    label: string;
    link: string;
    icon?: React.ReactNode;
    drop?: DropItem[];
};

type LinksGroupProps = {
    data: DropItem[];
};

export const LinksGroup: React.FC<LinksGroupProps> = ({ data }) => {
    return (
        <>
            {data.map((dt) => (
                <NavLink key={dt.label} label={dt.label} href={dt.link} leftSection={dt.icon}>
                    {dt.drop && dt.drop.map((nested) => (
                        <NavLink key={nested.label} label={nested.label} href={nested.link} leftSection={nested.icon}>
                            {nested.drop && nested.drop.map((nest2) => (
                                <NavLink key={nest2.label} label={nest2.label} href={nest2.link} />
                            ))}
                        </NavLink>
                    ))}
                </NavLink>
            ))}
        </>
    );
};
