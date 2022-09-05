import React from "react";

export type CheckBoxProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  id?: string;
};
