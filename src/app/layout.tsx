"use client";
import Providers from "@/lib/providers/provider";
import {store} from "@/redux/reduxConfig/store";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {Provider} from "react-redux";
import {Toaster} from "sonner";
import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (

      <Provider store={store}>
        <Providers>
          <AppRouterCacheProvider>
            <html lang="en">
              <body>
                <Toaster position="top-center" />
                {children}
              </body>
            </html>
          </AppRouterCacheProvider>
        </Providers>
      </Provider>
    
  );
}
