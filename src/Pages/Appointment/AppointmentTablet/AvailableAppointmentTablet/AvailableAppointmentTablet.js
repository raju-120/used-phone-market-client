import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import TabletAppointment from "./TabletAppointment";
import TabBookingModal from "../BookingModalTab/TabBookingModal";
import Loading from "../../../../Shared/Loading/Loading";

const AvailableAppointmentTablet = ({ selectDate }) => {
  const [tabletBooked, setTabletBooked] = useState(null);
  const date = format(selectDate, "PP");

  const {
    data: appointmentTablets = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tabletCollections", date],
    queryFn: async () => {
      const res = await fetch(
        `https://used-product-server-raju-120.vercel.app/tabCollections?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-12">
      <p className="font-bold text-2xl text-center">
        Available Phones on {format(selectDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-col-2 lg:grid-cols-3">
        {appointmentTablets?.tablets?.map((option) => (
          <TabletAppointment
            key={option._id}
            option={option}
            setTabletBooked={setTabletBooked}
          ></TabletAppointment>
        ))}
      </div>
      {tabletBooked && (
        <TabBookingModal
          selectDate={selectDate}
          tabletBooked={tabletBooked}
          setTabletBooked={setTabletBooked}
          refetch={refetch}
        ></TabBookingModal>
      )}
    </div>
  );
};

export default AvailableAppointmentTablet;
