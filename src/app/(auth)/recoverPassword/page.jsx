"use client"

import { useState } from "react";
import Verification from "./verification";
import NewPassword from "./newPassword";
import ForgetPassword from "./forgetPassword";
import PasswordChanged from "./passwordChanged";

export default function RecoverPassword() {
  const [currentStep, setCurrentStep] = useState(1); // Step 1 by default

  // Function to go to the next component
  const nextStep = () => {
    setCurrentStep((prevStep) =>  prevStep + 1);
  };
  return (
    <div>
      {/* Conditionally Render Components Based on currentStep */}
      {currentStep === 1 && <ForgetPassword  nextStep={nextStep}/>}
      {currentStep === 2 && <Verification   nextStep={nextStep} />}
      {currentStep === 3 && <NewPassword   nextStep={nextStep} />}
      {currentStep === 4 && <PasswordChanged   nextStep={nextStep} />}
    </div>
  )
}
