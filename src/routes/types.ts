/** @format */

import { JSX } from "react";

type IconType = JSX.Element;

export type TypeRoutesSubmenu = {
  name: string;
  path: string;
  component: React.FC | "";
  config: {
    icon?: IconType;
    structure: "layout" | "nonlayout";
    exact?: boolean; 
    isMenu: boolean;
  };
};

type a<T> = T & {submenu?: T[]}


type b<T> = T & {submenu?: a<T>[]}

export type TypeRoutes = b<TypeRoutesSubmenu>