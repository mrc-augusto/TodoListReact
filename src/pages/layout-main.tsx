import {  Outlet } from "react-router";
import { Header } from "../core-components/Header";
import { MainContent } from "../core-components/Main-content";
import { Footer } from "../components/Footer";

export function LayoutMain(){
  return(
    <>
      <Header/>
      <MainContent>
        <Outlet/>
      </MainContent>
      <Footer/>
    </>
  )
}