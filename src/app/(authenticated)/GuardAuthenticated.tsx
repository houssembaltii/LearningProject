"use client";
import React, { ReactNode, useEffect } from "react";
import { trpc } from "../trpc/client";
import { useRouter } from "next/navigation";
import { Spinner } from "@chakra-ui/react";

export const Guard = ({ children }: { children: ReactNode }) => {
  const checkauthenticated = trpc.auth.CheckAuthenticated.useQuery();
  const router = useRouter();

  useEffect(() => {
    // Check if authentication status is false and redirect to login
    if (checkauthenticated.data?.isAthuenticated === false) {
      router.push("/login");
    }
  }, [checkauthenticated.data?.isAthuenticated, router]);

  // Render children if authenticated, show spinner if checking, and do nothing if not authenticated (will be handled by useEffect)
  if (checkauthenticated.isLoading) {
    return <Spinner />;
  }

  if (checkauthenticated.data?.isAthuenticated) {
    return <>{children}</>;
  }

  // Return null or a placeholder component if not authenticated and not redirecting
  return <Spinner />;
};
