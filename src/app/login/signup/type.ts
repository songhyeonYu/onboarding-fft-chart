import React from "react";

export type msgType = "empty" | "fail" | "success";

export type DuplicationCheckProps = {
  msgType: msgType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
