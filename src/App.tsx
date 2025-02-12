import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { lazy, Suspense } from "react";
import CardSkeleton from "./components/CardSkeleton";
import Layout from "./components/Layout";

const DetailedUser = lazy(() => import("./pages/DetailedUser"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/users/:id"
            element={
              <Suspense
                fallback={
                  <Layout>
                    <div className="flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                      <CardSkeleton />
                    </div>
                  </Layout>
                }
              >
                <DetailedUser />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
