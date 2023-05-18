import React, { useEffect, useState, useRef } from "react";
import ReactTooltip from "react-tooltip";
import useFittingCart from "../../state/useFittingCart";
import { categorizeFittings } from "../../helper/categorize-fittings";
import { isFittingInCart } from "../../helper/cart-utils";
import { isEven } from "../../helper/utils";
import Image from "next/image";
import FittingQuantityInput from "./FittingQuantityInput";
import JobPacks from "../header/JobPacks";
import _ from "lodash";
import { filterFittings } from "../../helper/utils";
import SearchIcon from "../../public/images/actions/search.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Fittings = ({ fittingsList }) => {
  const fittingsOnCart = useFittingCart();
  const [categorizedFittings, setCategorizedFittings] = useState([]);
  const [filteredFittings, setFilteredFittings] = useState(null);
  const searchInputRef = useRef();
  const FILTER_DELAY = 200;

  function getFittingIndex(id) {
    return fittingsList.findIndex((fitting) => fitting.id === id);
  }

  function setFittingBgColor(fittingId, index) {
    if (isFittingInCart(fittingId)) {
      return "in-cart";
    } else {
      return isEven(index) ? "alt-even" : "alt-odd";
    }
  }

  function filterFittingsByKeyword(keyword) {
    setFilteredFittings(filterFittings(categorizedFittings, keyword));
  }

  const doFilterFittingsByKeyWord = _.debounce(
    filterFittingsByKeyword,
    FILTER_DELAY
  );

  useEffect(() => {
    setCategorizedFittings(categorizeFittings(fittingsList));
  }, [fittingsList]);

  useEffect(() => {
    setFilteredFittings(categorizedFittings);
  }, [categorizedFittings]);
  useEffect(() => {}, [fittingsOnCart]);

  return (
    <div className="boxed-container">
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <div className="fittings-filter">
          <div className="filter-icon">
            <Image src={SearchIcon} height={20} width={20} alt="" />
          </div>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search Fittings"
            className="fittings-filter-input"
            onInput={(e) => doFilterFittingsByKeyWord(e.target.value.trim())}
          />
          <div
            className="clear-icon"
            onClick={() => {
              searchInputRef.current.value = "";
              doFilterFittingsByKeyWord("");
            }}
          >
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-gray-500 text-lg"
            />
          </div>
        </div>
        <JobPacks />
      </div>
      {filteredFittings && (
        <div className="min-h-[72vh]">
          {filteredFittings.length === 0 && (
            <div className="w-full font-bold text-center pt-10">
              No Match Found
            </div>
          )}
          <div className="fittings-wrapper">
            {filteredFittings.map((category, index) => (
              <div key={`category-${index}`} className="fitting-card">
                <div className="fitting-header">
                  <div>{category.category} </div>
                  <div className="pr-5">QTY</div>
                </div>
                <div className="fitting-content">
                  {category.fittings.map((fitting, index) => (
                    <div key={fitting.id}>
                      <div
                        className={`fitting-item ${setFittingBgColor(
                          fitting.id,
                          index
                        )}`}
                        data-tip
                        data-for={`${fitting.id}`}
                      >
                        <div className="flex flex-col justify-between">
                          <div className="min-w-[185px]">
                            <span className="font-bold">{fitting.title}</span>
                          </div>
                          <div className="min-w-[90px]">
                            {fitting.primeProducts.partNumber}
                          </div>
                        </div>
                        <FittingQuantityInput
                          fitting={fitting}
                          minVal={0}
                          disabled={false}
                        />
                      </div>
                      <ReactTooltip
                        id={`${fitting.id}`}
                        place={`${
                          getFittingIndex(fitting.id) < 64 ? "right" : "left"
                        }`}
                        effect="solid"
                        className="fitting-tooltip"
                        scrollHide={true}
                      >
                        <div className="text-center">
                          {fitting.primeProducts.image && (
                            <Image
                              src={`${fitting.primeProducts.image?.sourceUrl}`}
                              width={256}
                              height={241}
                              alt=""
                              priority
                            />
                          )}
                          <div className="text-lg">
                            {fitting.primeProducts.description.toUpperCase()}
                          </div>
                        </div>
                      </ReactTooltip>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fittings;
