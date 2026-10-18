import MainLayout from "@/shared/components/layout/main-layout";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main")({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
});
