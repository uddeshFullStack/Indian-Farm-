import { useState, useCallback } from "react";
import { useRouter } from "next/router";

import Layout from "../layout";
import FarmCardList from "../../components/farm-cardComponent/farmCartList";
import Link from "next/link";
import FarmLocationFilter from "../../components/listFamComponent/FarmLocationFilter";

const ListedFarm = () => {
  const router = useRouter();
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center  py-[2.5vw] font-inter">
        <form className="w-[95vw] md:w-[90vw] flex flex-col items-center gap-[3vw] ml-[6px] xsm:ml-0 xsm:p-3 sm:p-4 md:p-10 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between w-full mt-[1vw] gap-[2vw]">
            <h2 className="text-[5vw] lg:text-[2vw] font-bold text-primary-colour">
              Listed Farms
            </h2>
            <div>
              <Link
                href="/agrotourism-suggestion"
                className="bg-secondary-colour rounded text-[4vw] lg:text-[1.5vw] font-semibold px-[6vw] lg:px-[1.5vw] py-[1vw] lg:py-[0.5vw] text-primary-colour hover:scale-105"
              >
                Suggest Me AgriTourism
              </Link>
            </div>

          </div>

          <div className="flex flex-col gap-[3vw] w-full">
  
            <FarmCardList  />

          </div>
        </form>
      </main>
    </Layout>
  );
};

export default ListedFarm;
