import { useSearchParams } from "@remix-run/react";
import Snowfall from "react-snowfall";
import GiftCreation from "~/components/createGift";
import "../styles/gift.css";

function Gift() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("n");
  const gift = searchParams.get("g");
  const datanum = gift ? parseInt(gift) : null;

  return (
    <div className="h-screen w-screen bg-[#c60f0f] flex justify-end items-end px-2 ">
      <Snowfall />
      <div className="flex justify-end tree items-end">
        <img src="/box.png" alt="box" className="h-[120px]" />
        <img src="/giftbox.png" alt="giftbox" className="h-[150px]" />
      </div>
      {!name || !gift ? (
        <GiftCreation />
      ) : (
        <div>
          <div className="container">
            <div className="back">
              <div className="topTriangle"></div>
            </div>

            <div className="card">
              <div className="title1">{data.montessoriOffers[datanum ? datanum : 0].title}</div>
              <div className="text-xl md:text-2xl">{data.montessoriOffers[datanum ? datanum : 0].description}</div>
            </div>

            <div className="front_container">
              <div className="front p-6">
                <p>From</p>
                <p className="text-xl">{name}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gift;

const data = {
  montessoriOffers: [
    {
      id: "1",
      title: "Early Bird Discount",
      description:
        "Get 20% off on Montessori teacher training courses for early registrations.",
      validFrom: "2024-12-01",
      validTo: "2024-12-31",
      targetAudience: ["Aspiring Montessori Teachers", "Parents"],
      additionalBenefits: [
        "Free teaching materials",
        "Access to online workshops",
      ],
    },
    {
      id: "2",
      title: "Refer and Earn",
      description:
        "Refer a friend to enroll in our Montessori program and earn a 10% discount on your next course.",
      validFrom: "2024-12-05",
      validTo: "2025-01-15",
      targetAudience: ["Existing Students", "Parents"],
      additionalBenefits: [
        "Exclusive webinars on child development",
        "Referral certificates",
      ],
    },
    {
      id: "3",
      title: "Holiday Special Offer",
      description:
        "Enroll during the holiday season and get a free Montessori toolkit worth $100.",
      validFrom: "2024-12-15",
      validTo: "2025-01-05",
      targetAudience: ["Teachers", "Institutions", "Parents"],
      additionalBenefits: [
        "Complimentary 1-year membership to Montessori resources",
        "Access to premium study materials",
      ],
    },
    {
      id: "4",
      title: "Group Enrollment Offer",
      description:
        "Enroll in groups of 5 or more and receive a 15% discount for all members.",
      validFrom: "2024-11-20",
      validTo: "2025-02-28",
      targetAudience: ["Educational Institutions", "Parent Groups"],
      additionalBenefits: [
        "Customizable Montessori workshops",
        "Dedicated mentor support",
      ],
    },
    {
      id: "5",
      title: "Scholarship Opportunity",
      description:
        "Apply for our Montessori education scholarship and get up to 50% off on course fees.",
      validFrom: "2024-12-01",
      validTo: "2024-12-30",
      targetAudience: [
        "Economically Disadvantaged Individuals",
        "Rural Teachers",
      ],
      additionalBenefits: [
        "Guided scholarship application support",
        "Free career counseling",
      ],
    },
  ],
};
