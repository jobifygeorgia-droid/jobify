import { Suspense } from "react";
import { SessionProvider } from "next-auth/react";

import ThemeRegistry from "@/services/mui/ThemeRegistry";
import { AuthProvider, PopupsProvider, RouteTracker } from "@/providers";

type RootProviderT = {
  children: React.ReactNode;
};

const RootProvider: React.FC<RootProviderT> = ({ children }) => {
  return (
    <Suspense fallback={null}>
      <SessionProvider>
        <AuthProvider>
          <ThemeRegistry>
            <RouteTracker>
              <PopupsProvider>{children}</PopupsProvider>
            </RouteTracker>
          </ThemeRegistry>
        </AuthProvider>
      </SessionProvider>
    </Suspense>
  );
};

export default RootProvider;
