import { useState } from "react";
import Snowfall from "react-snowfall";
import client from "~/lib/db";
import sectionsData from "~/lib/offers";

function GiftCreation() {
  const [page, setPage] = useState("init");
  const [offer, setOffer] = useState(0);
  const [inputRec, setInputRec] = useState("");

  function handleRecChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputRec(e.target.value);
  }

  function changePage() {
    if (page === "init") {
      if (
       client.authStore.isValid &&
        inputRec.trim() !== ""
      ) {
        setPage("select");
      }
    }
  }

  async function handleShare() {
    const origin = window.location.origin;
    
    if (!navigator.share) {
      alert("Not supported in your browser.");
      return;
    }
    const record = client.collection('gift').create({
      gift : offer,
      name : client.authStore.record?.name,
      reciever : inputRec
    })
    const id = (await record).id
    const link = `${origin}/gift?g=${id}`;
    await navigator.share({
      title: "Check this out!",
      text : `🎉 Here is your gift from ${client.authStore.record?.name}! 🎁 
      We hope you enjoy this special token of appreciation. 
      Stay tuned for more surprises and exciting offers!`,
      url: link,
    });
  }

  const handleLogin = async function () {
    const authData = await client
      .collection("users")
      .authWithOAuth2({ provider: "google" });
  };

  return (
    <div className="h-screen w-screen fixed left-0 right-0 bg-[#c60f0f] flex justify-end items-end px-2">
      <Snowfall />
      <div className="overflow-hidden h-2/3 w-11/12 md:w-1/2 glass fixed p-2 flex justify-center align-middle items-center flex-col">
        {page === "init" && (
          <div className="flex flex-col w-full justify-center md:items-center">
                       {client.authStore.isValid ? 
            <div>
         <div className="text-center mt-6">
  <p className="text-xl font-semibold text-gray-700">
    Dear <span className="text-white font-bold">{client.authStore.record?.name}</span>,
  </p>
  <h2 className="text-2xl font-bold text-white mt-4">
    Create Your Gift 🎁
  </h2>
  <p className="text-yellow-200 mt-2">
    Unlock special surprises and rewards for your friends
  </p>
</div>

            </div> :
            <button
              onClick={handleLogin}
              type="button"
              className="text-white bg-black hover:bg-gray-500/65 mt-4 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 "
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              Sign in with Google
            </button>
}
            <label htmlFor="name">Person Name</label>
            <input
              type="text"
              id="name"
              value={inputRec}
              onChange={handleRecChange}
              className="outline-none h-10 w-full md:w-1/2 rounded-2xl text-black p-2"
            />
 
            <button
              onClick={changePage}
              className=" mt-4 w-1/2 bg-black px-10 py-2 rounded-full active:bg-white active:text-black"
            >
              <p>Next</p>
            </button>
          </div>
        )}
        {page === "select" && offer === 0 && (
          <div className="w-full overflow-hidden overflow-y-scroll p-2">
            <p className="font-bold text-lg">Select Your Gift</p>
            {data.map((items) => (
              <div
                className="w-full outline rounded-2xl p-2 h-40 cursor-pointer flex mt-4"
                onClick={() => setOffer(parseInt(items.id))}
              >
                <img src="/dec.png" alt="decorator" className="h-36 mr-2" />
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
            <p className="text-xl font-bold">{client.authStore.record?.name}</p>
            <p>Reciever Name</p>
            <p className="text-xl font-bold">{inputRec}</p>
            <p>Gift</p>
            <p className="text-xl font-bold">{data[offer].title}</p>
            <p>{data[offer].description}</p>
            <div className="w-full flex justify-end items-end font-bold">
              <button
                onClick={() => handleShare()}
                className="bg-black px-6 py-2 mt-4 rounded-full"
              >
                Share Your Link
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GiftCreation;

const data = sectionsData;
