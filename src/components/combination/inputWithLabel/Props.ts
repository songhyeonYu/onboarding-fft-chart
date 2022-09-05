import React from "react";

export type InputLabelProps = {
  value: string;
  text: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  gap?: string;
  type: string;
};
