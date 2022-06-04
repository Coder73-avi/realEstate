import "../styles/globals.css";
import { useState, useEffect } from "react";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    addEventListener("load", () => {
      return setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && (
        <div className="loading__wrapper">
          <span>Loading...</span>
        </div>
      )}
      <Component {...pageProps} />
      {/* <NextNProgress color="red" /> */}
    </>
  );
}

export default MyApp;
