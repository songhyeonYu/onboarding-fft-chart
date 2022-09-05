import React from "react";

export type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: string;
};
