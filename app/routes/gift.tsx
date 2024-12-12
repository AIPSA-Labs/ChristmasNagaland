import { useState } from "react";
import Snowfall from "react-snowfall";

function Gift() {
  const [page, setPage] = useState("init");
  const [offer, setOffer] = useState(0);
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputRec, setInputRec] = useState("");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputName(e.target.value);
  }
  function handleNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputNumber(e.target.value);
  }
  function handleRecChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputRec(e.target.value);
  }

  async function handleShare() {
    const origin = window.location.origin
    const link = `${origin}/g?name=${inputName}&g=${offer}`
    if (!navigator.share) {
        alert("Not supported in your browser.");
        return;
      }
    await navigator.share({
        title: "Check this out!",
        text: `Here is your gift by ${inputName}`,
        url: link,
      });
  }

  return (
    <div className="h-screen w-screen bg-[#c60f0f] flex justify-end items-end px-2">
      <Snowfall snowflakeCount={50} />
      <div className="overflow-hiddenr h-2/3 w-11/12 md:w-1/2 glass fixed p-2 flex justify-center align-middle items-center flex-col">
        {page === "init" && (
          <div className="flex flex-col w-full justify-center md:items-center">
            <label htmlFor="name">Person Name</label>
            <input
              type="text"
              id="name"
              value={inputRec}
              onChange={handleRecChange}
              className="outline-none h-10 w-full md:w-1/2 rounded-2xl text-black p-2"
            />
            <label htmlFor="pname">Your Name</label>
            <input
              type="text"
              id="pname"
              value={inputName}
              onChange={handleNameChange}
              className="outline-none h-10 w-full md:w-1/2 rounded-2xl text-black p-2"
            />
            <label htmlFor="number">Your contact Number </label>
            <input
              type="number"
              id="number"
              value={inputNumber}
              onChange={handleNumberChange}
              className="outline-none h-10 w-full md:w-1/2 rounded-2xl text-black p-2"
            />
            <button
              onClick={() => setPage("select")}
              className=" mt-10 w-1/2 bg-black px-10 py-2 rounded-full active:bg-white active:text-black"
            >
              Next{" "}
            </button>
          </div>
        )}
        {page === "select" && offer === 0 && (
          <div className="w-full overflow-hidden overflow-y-scroll p-2">
            <p className="font-bold text-lg">Select Your Gift</p>
            {data.montessoriOffers.map((items) => (
              <div
                className="w-full outline rounded-2xl p-2 h-40 cursor-pointer flex mt-4"
                onClick={() => setOffer(parseInt(items.id))}
              >
                <img
                  src="/dec.png"
                  alt="decorator"
                  className="h-36 mr-2"
                />
                <div>
                  <p className="font-bold text-2xl">{items.title}</p>
                  <p> {items.description} </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {offer >= 1 && (
          <div className="w-full">
            <p className="mb-6">
              {" "}
              <span className="font-bold text-xl"> Your Gift box </span>{" "}
              (Confirm)
            </p>
            <p>Your Name</p>
            <p className="text-xl font-bold">{inputName}</p>
            <p>Reciever Name</p>
            <p className="text-xl font-bold">{inputRec}</p>
            <p>Gift</p>
            <p className="text-xl font-bold">
              {data.montessoriOffers[offer].title}
            </p>
            <p>{data.montessoriOffers[offer].description}</p>
            <div className="w-full flex justify-end items-end font-bold">
              <button onClick={handleShare} className="bg-black px-6 py-2 mt-4 rounded-full">
                Share Your Link
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end tree items-end">
        <img src="/box.png" alt="box" className="h-[120px]" />
        <img src="/giftbox.png" alt="giftbox" className="h-[150px]" />
      </div>
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
