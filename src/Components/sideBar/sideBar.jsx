import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import StarIcon from '@mui/icons-material/Star';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import styles from "./sideBar.module.css";

export const Sidebar = () => {
  const [direccionFlecha, setDireccionFlecha] = useState("atras");
  const [anchoReducido, setAnchoReducido] = useState(true);
  const cambiarDireccionFlecha = () => {
    setDireccionFlecha(direccionFlecha === "atras" ? "adelante" : "atras");
    setAnchoReducido(!anchoReducido);
  };

  return (
    <nav className={anchoReducido ? styles.sidebarReducido : styles.sidebar}>
      {direccionFlecha === "atras" ? (
        <h1 className={styles.botonAbrir} onClick={cambiarDireccionFlecha}>
          <DensityMediumIcon className={styles.arrow} />
        </h1>
      ) : (
        <h1 className={styles.botonCerrar} onClick={cambiarDireccionFlecha}>
          <ClearIcon className={styles.arrow} />
        </h1>
      )}
      <div className={!anchoReducido ? styles.contenedorOpciones: styles.contenedorOpcionesReducido}>
        <h1
          className={
            anchoReducido ? styles.logoCountriesReducido : styles.logoCountries
          }
        >
          {anchoReducido ? "C" : "Countries"}
        </h1>
        <div
          className={
            anchoReducido ? styles.contenedorReducido : styles.contenedor
          }
        >
          {!anchoReducido ? (
            <>
              <h5>GENERAL</h5>
              <NavLink
                className={styles.NavLink}
                to="/"
                onClick={cambiarDireccionFlecha}
              >
                <TravelExploreIcon className={styles.iconSideBar} />
                Explora
              </NavLink>
              <NavLink
                className={styles.NavLink}
                to="/vista1"
                onClick={() => {
                  cambiarDireccionFlecha();
                }
                }
              >
                <StarIcon className={styles.iconSideBar} />
                Favoritos
              </NavLink>
              <NavLink
                className={styles.NavLink}
                to="/vista2"
                onClick={() => {
                  cambiarDireccionFlecha();
                }
                }
              >
                <SupervisorAccountIcon className={styles.iconSideBar} />
                Reseñas
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/"><TravelExploreIcon className={styles.iconSideBarReducido} /></NavLink>
              <NavLink to="/vista1"><StarIcon className={styles.iconSideBarReducido} /></NavLink>
              <NavLink to="/vista2"><SupervisorAccountIcon className={styles.iconSideBarReducido} /></NavLink>
            </>
          )}
        </div>
        <div className={styles.contenedorUsuario}>
          {!anchoReducido ? (
            <>
              <h5>USUARIO</h5>
              <NavLink
                className={styles.NavLink}
                to="/configuracion"
                onClick={cambiarDireccionFlecha}
              >
                <ManageAccountsIcon className={styles.iconSideBar} />
                Configuración de Perfil
              </NavLink>
              <NavLink
                className={styles.NavLink}
                onClick={cambiarDireccionFlecha}
              >
                <LogoutIcon className={styles.iconSideBar} />
                Cerrar sesión
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/configuracion"><ManageAccountsIcon className={styles.iconSideBarReducido} /></NavLink>
              <NavLink><LogoutIcon className={styles.iconSideBarReducido} /></NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
