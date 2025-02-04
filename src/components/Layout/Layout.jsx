// components/Layout/Layout.jsx
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";
import styles from "./Layout.module.css";

export const Layout = () => (
  <div className={styles.container}>
    <AppBar />
    <main>
      <Outlet />
    </main>
    <Toaster position="top-right" />
  </div>
);
