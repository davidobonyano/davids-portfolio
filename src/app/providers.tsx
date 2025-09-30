"use client";

import { ReactNode } from "react";
import { LocaleProvider } from "@/i18n/LocaleProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}


