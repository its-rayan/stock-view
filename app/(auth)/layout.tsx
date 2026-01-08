"use client";

import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href="/" className="auth-logo">
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>

        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>
      <section className="auth-right-section">
        <div className="flex-1 bg-linear-to-b from-violet-200 via-violet-600 from-5% to-black rounded-3xl relative overflow-hidden">
          <div className="absolute h-1/2 w-full bottom-0 left-0 from-black via-violet-600 to-violet-200">
            <div className="flex flex-col items-center justify-center gap-3">
              <h1 className="text-white text-4xl">
                Track Your Favourite Stocks
              </h1>
              <p className="text-accent-foreground/80 text-center text-lg max-w-md">
                Live charts and alerts to keep you updated with the market
                trends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
