import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import RequireAuth from "./auth/RequireAuth";

import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import NoPage from "./pages/admin/NoPage";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import VehicalInformation from "./pages/admin/vehicalInformation";
import InvoicePage from "./pages/admin/InvoicePage"

// Dealer pages
import DealerHome from "./pages/dealer/Home";
import DealerNewInsurance from "./pages/dealer/NewInsurance";
import DealerRenewInsurance from "./pages/dealer/RenewInsurance";
import DealerWallet from "./pages/dealer/Wallet";
import DealerInvoice from "./pages/dealer/Invoice";
import DealerCommStatement from "./pages/dealer/CommStatement";
import DealerOtherServices from "./pages/dealer/OtherServices";
import DealerPriceList from "./pages/dealer/PriceList";
import DealerPolicyDownload from "./pages/dealer/PolicyDownload";
import DealerPolicyMis from "./pages/dealer/PolicyMis";
import DealerEndorsement from "./pages/dealer/Endorsement";
import DealerCancellation from "./pages/dealer/Cancellation";

// Issuer pages
import IssuerInvoice from "./pages/issuer/Invoice";
import AddNewDealer from "./pages/admin/AddNewDealer";
import AddNewIssuer from "./pages/admin/AddNewIssuer";
import AddPriceList from "./pages/admin/AddPriceList";
import DealerDetail from "./pages/admin/DealerDetail";
import DealerList from "./pages/admin/DealerList";
import DealerWisePriceList from "./pages/admin/DealerWisePriceList";
import EditDealer from "./pages/admin/EditDealer";
import IssuerDetail from "./pages/admin/IssuerDetail";
import IssuerList from "./pages/admin/IssuerList";
import Payment from "./pages/admin/Payment";
import PolicyMic from "./pages/admin/PolicyMic";
import PaymentDetail from "./pages/admin/PaymentDetail";
import VehiclePriceTable from "./Tables/VehiclePriceTable";
import EndorsementList from "./pages/dealer/EndorsementList";
import Cancellation from "./pages/dealer/Cancellation";
import CancellationList from "./pages/dealer/CancellationList";
import Claims from "./pages/dealer/Claims";
import AddClaimsTable from "./pages/dealer/AddNewClaim";
import InssuranceLists from "./pages/dealer/InssuranceLists";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Login */}
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <RequireAuth>
                <ProtectedRoute allowedRoles={["Admin"]}>
                  <DashboardLayout />
                </ProtectedRoute>
              </RequireAuth>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="add_new_dealer" element={<AddNewDealer />} />
            <Route path="add_new_issuer" element={<AddNewIssuer />} />
            <Route path="add_price_list" element={<AddPriceList />} />
            <Route path="dealer_detail" element={<DealerDetail />} />
            <Route path="dealer_list" element={<DealerList />} />
            <Route path="dealer_wise_price_list" element={<DealerWisePriceList />} />
            <Route path="edit_dealer" element={<EditDealer />} />
            <Route path="issuer_detail" element={<IssuerDetail />} />
            <Route path="issuer_list" element={<IssuerList />} />
            <Route path="payment" element={<Payment />} />
            <Route path="policy_mic" element={<PolicyMic />} />
            <Route path="payment_details" element={<PaymentDetail />} />
            <Route path="InformationTable" element={<VehicalInformation />} />
            <Route path="invoice_Page" element={<InvoicePage />} />
            <Route path="*" element={<NoPage />} />
          </Route>

          {/* Dealer Routes */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <ProtectedRoute allowedRoles={["Dealer"]}>
                  <DashboardLayout />
                </ProtectedRoute>
              </RequireAuth>
            }
          >
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="home" element={<DealerHome />} />
            <Route path="new_insurance" element={<DealerNewInsurance />} />
            <Route path="renew_insurance" element={<DealerRenewInsurance />} />
            <Route path="wallet" element={<DealerWallet />} />
            <Route path="invoice" element={<DealerInvoice />} />
            <Route path="comm_statement" element={<DealerCommStatement />} />
            <Route path="other_services" element={<DealerOtherServices />} />
            <Route path="price_list" element={<DealerPriceList />} />
            <Route path="policy_download" element={<DealerPolicyDownload />} />
            <Route path="policy_mis" element={<DealerPolicyMis />} />
            <Route path="endorsement" element={<DealerEndorsement />} />
            <Route path="cancellation" element={<DealerCancellation />} />
            <Route path="endorsement_list" element={<EndorsementList />} />
            <Route path="cancellation_list" element={<CancellationList />} />
            <Route path="claims" element={<Claims />} />
            <Route path="add_new_claim" element={<AddClaimsTable />} />
            <Route path="insurances" element={<InssuranceLists />} />

          </Route>

          {/* Issuer Routes */}
          <Route
            path="/issuer/*"
            element={
              <RequireAuth>
                <ProtectedRoute allowedRoles={["Issuer"]}>
                  <DashboardLayout />
                </ProtectedRoute>
              </RequireAuth>
            }
          >
            <Route
              index
              element={<Navigate to="/issuer/policy_mis" replace />}
            />
          </Route>

          {/* Catch-All Redirect to Login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
