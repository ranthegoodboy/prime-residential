import Header from "../components/header/header";
import Fittings from "../components/fittings";
import Head from "next/head";
import { useQuery } from "react-query";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const fetcher = () => {
    return axios.get("/api/get-fittings");
  };
  const { isLoading, data, isError } = useQuery("fittings", fetcher);

  return (
    <>
      <Head>
        <title>Residential App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {isLoading && (
        <div className="flex justify-center mt-[40vh]">
          <div>
            <FontAwesomeIcon
              icon={faSpinner}
              size={"3x"}
              className="animate-spin"
            />
          </div>
        </div>
      )}
      {isError && (
        <div className="flex justify-center mt-[40vh]">
          <div className="font-bold text-lg text-center">
            Something went wrong. Please refresh your browser.
          </div>
        </div>
      )}
      {!isLoading && !isError && (
        <Fittings fittingsList={data?.data} fetching={isLoading} />
      )}
    </>
  );
}
