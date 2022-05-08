import { Link as InternalLink } from "gatsby-theme-material-ui";
import Link from "@mui/material/Link";
import * as React from "react";
import { NavLinkList, NavLinkItem } from "../types/interface";

export const NavLink = ({
  destination,
  text,
  newTab,
}: NavLinkItem): JSX.Element => {
  return (
    <>
      {newTab ? (
        <Link href={destination} target="_blank" rel="noreferrer">
          {text}
        </Link>
      ) : (
        <InternalLink to={destination}>{text}</InternalLink>
      )}
    </>
  );
};

export const SiteLinks = ({ navLinks }: NavLinkList): JSX.Element => {
  return (
    <>
      {navLinks.map((link: NavLinkItem, i: number) => {
        return <NavLink key={`header-link-${i}`} {...link} />;
      })}
    </>
  );
};