import AppFooter from "@/layout/AppFooter";
import AppHeader from "@/layout/AppHeader";

export default function AuthLayout({ children }) {
  return (
    <>
      <AppHeader />
      <div className="container mx-auto px-4 md:px-6 min-h-[calc(100vh-200px)]">{children}</div>
      <AppFooter />
    </>
  );
}
