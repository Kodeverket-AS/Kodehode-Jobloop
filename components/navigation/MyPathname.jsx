"use client";

import React from "react";
import { usePathname } from "next/navigation";

const MyPathname = () => {
  const pathname = usePathname();
  return <div>MyPathname component is rendering this: {pathname}</div>;
};

export default MyPathname;
