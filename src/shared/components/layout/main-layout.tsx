import NotFound from "@/components/other/404";
import Footer from "../footer";
import Header from "../header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
}

export function MainNotFound() {
  return (
    <MainLayout>
      <NotFound />
    </MainLayout>
  );
}
