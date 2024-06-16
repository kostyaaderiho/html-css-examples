import React, { Suspense } from "react";

import { Header, Footer, Main } from "./modules";

export const AppLayout = React.memo(() => (
  <Suspense fallback={null}>
    <Header />
    <Main />
    <Footer />
  </Suspense>
));
