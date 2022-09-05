import React, { PropsWithChildren, Suspense } from "react";
import Loading from "./LoadingSpinner";

const LoadingSuspense = (props: PropsWithChildren) => {
  const { children } = props;
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default LoadingSuspense;
