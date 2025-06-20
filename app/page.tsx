/**
 * A redesign of an online theme
 * url: https://preview.themeforest.net/item/hydropokit-hydroponic-agriculture-elementor-template-kit/full_screen_preview/41895918?_ga=2.194472164.898695472.1676736869-661641397.1675664519&_gac=1.56136153.1676736869.Cj0KCQiAi8KfBhCuARIsADp-A57gKt5chsNtyD8uJylmMJq0HmxYYdgRdD3mxJDMmRN2KI73X6HBW4waAhLbEALw_wcB
 */

import Head from "next/head";
import { Inter } from "next/font/google";
import Aic from "@/components/AIC";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import CircleList from "@/components/CircleList";
import WhoWeAre from "@/components/WhoWeAre";
import ClusterSection from "@/components/ClusterSection";
import CashewSection from "@/components/CashewSection";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import ChickenAmonth from "@/components/ChickenAmonth";

import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PEDOI</title>
        <meta
          name="description"
          content="PEDOI | Professional Enterprice Development Organisation International"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        {/* Nav Bar */}
        <NavBar />

        {/* Hero */}
        <Hero />
        {/* round circles section */}
        <CircleList />
        {/* who we are section */}
        <WhoWeAre />
        {/* cluster section */}
        <ClusterSection />
        {/* Cashew section */}
        <CashewSection />
        {/*  */}

        {/* aic section */}
        <Aic />

        {/* chicken a month */}
        <ChickenAmonth />

        {/* why us section */}
        <WhyUs />

        {/* footer */}
        <Footer />
      </main>
    </>
  );
}
