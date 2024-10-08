import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Details = ({
  className = "",
  state,
  district,
  farmName,
  address,
  farmerName,
  special,
  accommodation,
  activities,
  events,
  other,
  sightseeing,
  rentPerDay
}) => {
  const router = useRouter();

  const onButtonBackgroundClick = useCallback(() => {
    router.push({
      pathname: "/book-farm",
      query: { farmName },
    });
  }, [router, farmName]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-5xl text-primary-colour font-inter mq1100:flex-wrap ${className}`}
    >
      <div className="w-[340px] flex flex-col items-start justify-start gap-[88px] max-w-full mq450:gap-[44px]">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[5px] max-w-full text-center">
          <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[96px] mq450:text-lgi">
            Address
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[9px] box-border max-w-full text-left text-lg text-lite">
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
              <div className="relative">
                <ul className="m-0 font-inherit text-inherit pl-6">
                  {/* <li className="mb-0">{`${address?.village}, ${address?.post}, ${address?.tehsil}`}</li>
                  <p className="m-0">District-{address?.district}.</p> */}
                  <li>
                    {address} {district} {state}
                  </li>
                </ul>
              </div>
              <div className="w-[308px] relative inline-block">
                <ul className="m-0 text-inherit pl-6">
                  <li>
                    <span className="font-medium font-inter">
                      Farmer Name :
                    </span>
                    <span> {farmerName}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[238px] h-[100px] relative text-lg text-lite">
          <div className="mb-2 ml-[1.5px] top-[0px] left-[0px] text-5xl tracking-[-0.01em] font-semibold text-primary-colour inline-block min-w-[84px] mq450:text-lgi">
            Special
          </div>
          <div className="relative">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>{special}</li>
            </ul>
          </div>
        </div>
        <div className="w-[223px] flex flex-col items-start justify-start gap-[5px]">
          <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">
            Accommodation
          </div>
          <div className="self-stretch relative text-lg font-medium text-lite">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>Number of Rooms - {accommodation?.numberOfRooms}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[254px] flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border gap-[62px] text-lg text-lite mq450:gap-[31px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px] text-5xl text-primary-colour">
            <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">{`Activities & Facilities`}</div>
          </div>
          <div className="relative">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>{activities}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1px]">
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 text-5xl text-primary-colour">
            <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">{`Event or Festival `}</div>
          </div>
          <div className="relative">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>{events}</li>
            </ul>
          </div>
        </div>
        <div className="w-[214px] flex flex-col items-start justify-start gap-[5px] text-5xl text-primary-colour">
          <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[66px] mq450:text-lgi">{`Other `}</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px] text-lg text-lite">
            <div className="self-stretch relative">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li>Farm Area - {other?.farmArea}</li>
              </ul>
            </div>
            {other?.freeMilk && (
              <div className="relative inline-block min-w-[105px]">
                <ul className="m-0 font-inherit text-inherit pl-6">
                  <li>Free Milk</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-[324px] flex flex-col items-start justify-start gap-[83px] max-w-full mq450:gap-[41px]">
        <div className="flex flex-col items-start justify-start gap-[5px]">
          <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">
            Sightseeing
          </div>
          <div className="flex flex-col items-start justify-start text-lg text-lite">
            <div className="relative">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li>{sightseeing}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[228px] flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[5px]">
          <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[100px] mq450:text-lgi">
            Rent IND
          </div>
          <div className="self-stretch relative text-lg font-medium text-taxt-colour">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>{`${rentPerDay?.min}-${rentPerDay?.max}/day/person`}</li>
            </ul>
          </div>
        </div>
        <button
          className="cursor-pointer border-none p-0 w-[80vw] max-w-[200px] h-[20vw] max-h-[80px] relative text-[4.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw]"
          onClick={onButtonBackgroundClick}
        >
          <div className="absolute inset-0 shadow-[0px_0px_4px_#378805] rounded-3xs bg-primary-colour" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="tracking-[-0.01em] font-semibold font-inter text-white">
              Book Now
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

Details.propTypes = {
  className: PropTypes.string,
  address: PropTypes.shape({
    village: PropTypes.string,
    post: PropTypes.string,
    tehsil: PropTypes.string,
    district: PropTypes.string,
  }).isRequired,
  farmerName: PropTypes.string.isRequired,
  special: PropTypes.string.isRequired,
  accommodation: PropTypes.shape({
    numberOfRooms: PropTypes.number,
  }).isRequired,
  activities: PropTypes.string.isRequired,
  events: PropTypes.string.isRequired,
  other: PropTypes.shape({
    farmArea: PropTypes.string,
    freeMilk: PropTypes.bool,
  }).isRequired,
  sightseeing: PropTypes.string.isRequired,
  rentPerDay: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default Details;
