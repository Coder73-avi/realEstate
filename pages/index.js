import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";

import css from "../styles/Home.module.css";
// import images

import Footer from "../components/Footer";
import Service from "../components/Service";
import About from "../components/About";
import Contact from "../components/Contact";
import Link from "next/link";

// icons
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Home() {
  return (
    <>
      <Head>
        <title>RealEstate Site</title>
        <meta name="description" content="Real Estate website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <div className={css.home__page}>
          <div className={css.home__containt}>
            <div className={css.home__search__area}>
              <LocationOnOutlinedIcon className={css.search__location} />
              <input
                type="text"
                className={css.searchbox}
                placeholder="Search the location"
              />
              <SearchOutlinedIcon className={css.search__btn} />
            </div>
            <p>
              <span>Find the perfect</span> place for live
            </p>
            <Link href="/#contact">
              <a className={css.contact__btn}>Contact Us</a>
            </Link>
          </div>
        </div>

        {/* service page */}
        <Service />
        {/* about us page*/}
        <About />
        {/* contact us page */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
