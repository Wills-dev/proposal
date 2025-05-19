import { useState } from "react";

import Confetti from "react-confetti";
import emailjs from "@emailjs/browser";
import MessageBlock from "../molecules/MessageBlock";
import ButtonGroup from "../molecules/ButtonGroup";
import ThankYouMessage from "../molecules/ThankYouMessage";

const ProposalSection = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti(true);
    setShowThankYou(true);
    emailjs
      .send(
        "service_2dkcxp4", // Replace with your EmailJS Service ID
        "template_klitn7m", // Replace with your EmailJS Template ID
        {
          email: "ejioguvictor6@gmail.com",
          message: "She said yes!",
        },
        "yLLG4GQw9pt8jmzDJ" // Replace with your EmailJS User ID OR Public key
      )
      .then(() => console.log("Email sent successfully!"))
      .catch((error) => console.error("Email error:", error));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: showThankYou ? `url('/bg3.avif')` : `url('/bg.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 md:p-12 rounded-xl max-w-md md:max-w-lg text-center">
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={700}
            colors={["#ff6b6b", "#ff8e53", "#ffcccb", "#ffffff", "#0000ff"]}
          />
        )}
        {showThankYou ? (
          <ThankYouMessage />
        ) : (
          <>
            <h1 className="text-3xl md:text-4xl text-pink-200 font-bold mb-6">
              Hi Chiamka Grace Ogoke
            </h1>
            <MessageBlock />
            <ButtonGroup onButtonClick={handleButtonClick} />{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default ProposalSection;
