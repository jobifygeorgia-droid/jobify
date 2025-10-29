import { Suspense } from "react";
import { SessionProvider } from "next-auth/react";

import ThemeRegistry from "@/services/mui/ThemeRegistry";
import {
  AuthProvider,
  RouteTracker,
  PopupsProvider,
  FilterProvider,
  // GoogleMapProvider,
} from "@/providers";

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
              <PopupsProvider>
                <FilterProvider>
                  {/* <GoogleMapProvider> */}
                  {children}
                  {/* </GoogleMapProvider> */}
                </FilterProvider>
              </PopupsProvider>
            </RouteTracker>
          </ThemeRegistry>
        </AuthProvider>
      </SessionProvider>
    </Suspense>
  );
};

export default RootProvider;
