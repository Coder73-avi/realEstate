import Head from "next/head";

import Card from "../components/Card";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Pagination from "../components/Pagination";

import { houseData } from "../components/NavigationList";
export default function house() {
  return (
    <>
    <Head>
      <title>House</title>
    </Head>
      <main>
        <Navigation />
        <div className={"heading"}>house</div>

        {/* card */}
        <div className="grid grid-cols-4 gap-5 pt-4 p-8">
          {houseData.map(
            ({ img, title, cost, location, contact, details }, indx) => (
              <Card
                img={img}
                title={title}
                cost={cost}
                location={location}
                contact={contact}
                details={details}
                key={indx}
              />
            )
          )}
        </div>
        <Pagination />
      </main>
      <Footer />
    </>
  );
}
