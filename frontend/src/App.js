
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route ,createBrowserRouter ,createRoutesFromElements, defer} from "react-router-dom"
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { HomePage } from "./pages/Home";
import { ProfilePage } from "./pages/Profile";
import { SettingsPage } from "./pages/Settings";
import { HastaPage } from "./pages/Hasta";
import { IlacPage } from "./pages/Ilac";

import { ProtectedLayout } from "./components/ProtectedLayout";
import { HomeLayout } from "./components/HomeLayout";
import { AuthLayout } from "./components/AuthLayout";
import "./styles.css";


const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("token");
      resolve(user);
    }, 3000)
  );


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="hasta" element={<HastaPage />} />
        <Route path="ilac" element={<IlacPage />} />
      </Route>
    </Route>
  )
);

