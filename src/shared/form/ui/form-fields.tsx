"use client";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function FormFields({ children }: Props) {
  return <fieldset className="fieldset">{children}</fieldset>;
}
