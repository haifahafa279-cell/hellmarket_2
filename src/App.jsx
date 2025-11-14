import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Landing } from "@/pages/Landing";
import { SignIn } from "@/pages/SignIn";
import { SignUp } from "@/pages/SignUp";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Dashboard } from "@/pages/dashboard/Dashboard";
import { Deposit } from "@/pages/dashboard/Deposit";
import { Cards } from "@/pages/dashboard/Cards";
import { MyCards } from "@/pages/dashboard/MyCards";
import { Tickets } from "@/pages/dashboard/Tickets";
import { TicketHistory } from "@/pages/dashboard/TicketHistory";
import { MyProfile } from "@/pages/dashboard/MyProfile";
import { ChangePassword } from "@/pages/dashboard/ChangePassword";
import { Transactions } from "@/pages/dashboard/Transactions";
import { ProtectedRoute } from "@/components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/deposit"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Deposit />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/cards"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Cards />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/my-cards"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <MyCards />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/tickets"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Tickets />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/ticket-history"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <TicketHistory />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/my-profile"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <MyProfile />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/change-password"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ChangePassword />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/transactions"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Transactions />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
