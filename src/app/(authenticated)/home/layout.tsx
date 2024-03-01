import React, { ReactNode } from "react";
import { Guard } from "../GuardAuthenticated";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Guard>
        <div>{children}</div>;
      </Guard>
    </>
  );
};

export default HomeLayout;
