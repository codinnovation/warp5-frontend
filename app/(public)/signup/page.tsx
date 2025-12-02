"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState("personalInfo");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    addressLine1: "",
    addressLine2: "",
    accountType: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: ""
  });

  const validateForm = () => {
    setError("");

    if (!formData.accountType) {
      setError("Please select an account type");
      return false;
    }

    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.date_of_birth
    ) {
      setError("Please fill in all personal information fields");
      return false;
    }

    if (!formData.addressLine1) {
      setError("Please fill in required address fields");
      return false;
    }

    if (!formData.email || !formData.phoneNumber) {
      setError("Please fill in all contact details");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  const tabs = [
    { id: "personalInfo", label: "Personal Information" },
    { id: "address", label: "Address" },
    { id: "contact", label: "Contact Details" },
    { id: "password", label: "Password" }
  ];

  const handleNextTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  const personalInfo = [
    { label: "First Name*", name: "first_name", type: "text" },
    { label: "Last Name*", name: "last_name", type: "text" },
    { label: "Date of Birth*", name: "date_of_birth", type: "date" }
  ];

  const addressInfo = [
    { label: "Address Line 1*", name: "addressLine1", type: "text" },
    { label: "Address Line 2", name: "addressLine2", type: "text" }
  ];

  const contactInfo = [
    { label: "Phone Number*", name: "phoneNumber", type: "tel" },
    { label: "Email Address*", name: "email", type: "email" }
  ];

  const passwordInfo = [
    { label: "Password*", name: "password", type: "password" },
    { label: "Confirm Password*", name: "confirmPassword", type: "password" }
  ];

  const handleSignUp = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSigningUp(true);
    setError("");
    setSuccess("");

    try {
      const apiRes = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          date_of_birth: formData.date_of_birth,
          addressLine1: formData.addressLine1,
          addressLine2: formData.addressLine2,
          accountType: formData.accountType,
          email: formData.email,
          password: formData.password,
          phoneNumber: formData.phoneNumber
        })
      });

      console.log('res', apiRes)
      const apiData = await apiRes.json();

      if (!apiRes.ok) {
        setError(apiData.message || "Something went wrong during signup.");
        return;
      }

      setSuccess("Account created successfully! Redirecting...");

      setTimeout(() => {
        router.push("/home");
      }, 2000);
    } catch (error) {
      setError("Failed to sign up. Please try again.");
      console.error("Failed to sign up", error);
    } finally {
      setIsSigningUp(false);
    }
  };

  return (
    <>
      <div className="h-screen bg-white flex items-center justify-center">
        {step === 1 ? (
          <>
            <div className="bg-white h-auto w-full max-w-xs lg:max-w-sm xl:max-w-md shadow-md py-4 sm:py-6 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 rounded-2xl">
              <div className="flex justify-end items-center ">
                <i
                  className="ri-close-line text-[#333333] text-2xl sm:text-3xl cursor-pointer"
                  onClick={() => router.back()}
                ></i>
              </div>

              <div className="flex justify-center items-center mt-6 sm:mt-8">
                <h1 className="text-[#333333] text-sm sm:text-base font-bold">
                  Account Type
                </h1>
              </div>

              <div className="mt-6 sm:mt-8">
                <div className="flex flex-col space-y-6 sm:space-y-8">
                  <div
                    className={`flex justify-between items-center h-16 sm:h-20 p-4 sm:p-6 border ${
                      formData.accountType === "hirer"
                        ? "border-[#43A047]"
                        : "border-[#787878]"
                    } rounded-2xl cursor-pointer`}
                    onClick={() =>
                      setFormData({ ...formData, accountType: "hirer" })
                    }
                  >
                    <div className="flex flex-col space-y-2">
                      <h1 className="text-[#333333] font-medium text-xs sm:text-sm">
                        Hirer
                      </h1>
                      <p className="text-[#333333] font-regular text-xs">
                        You&apos;re looking to rent equipment
                      </p>
                    </div>
                    <div className="flex justify-end items-center">
                      <i
                        className={
                          formData.accountType === "hirer"
                            ? "ri-checkbox-circle-fill text-[#43A047]"
                            : "ri-checkbox-blank-circle-line"
                        }
                      ></i>
                    </div>
                  </div>

                  <div
                    className={`flex justify-between items-center h-16 sm:h-20 p-4 sm:p-6 border ${
                      formData.accountType === "owner"
                        ? "border-[#43A047]"
                        : "border-[#787878]"
                    } rounded-2xl cursor-pointer`}
                    onClick={() =>
                      setFormData({ ...formData, accountType: "owner" })
                    }
                  >
                    <div className="flex flex-col space-y-2">
                      <h1 className="text-[#333333] font-medium text-xs sm:text-sm">
                        Owner
                      </h1>
                      <p className="text-[#333333] font-regular text-xs">
                        You&apos;re looking to list equipment
                      </p>
                    </div>
                    <div className="flex justify-end items-center">
                      <i
                        className={
                          formData.accountType === "owner"
                            ? "ri-checkbox-circle-fill text-[#43A047]"
                            : "ri-checkbox-blank-circle-line"
                        }
                      ></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center mt-8 sm:mt-12 space-y-6 sm:space-y-8">
                {error && (
                  <div className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  onClick={() => {
                    if (!formData.accountType) {
                      setError("Please select an account type");
                      return;
                    }
                    setError("");
                    setStep(2);
                  }}
                  className="w-full text-sm bg-[#43A047] text-[#FFFFFF] h-10 sm:h-12 rounded-full font-medium cursor-pointer hover:bg-[#388E3C] transition-colors"
                >
                  Continue
                </button>

                <div className="flex justify-center items-center space-x-2">
                  <h1 className="text-gray-500 text-sm">Have an account?</h1>
                  <button
                    type="button"
                    onClick={() => router.push("/home")}
                    className="text-[#43A047] text-sm border-b border-[#43A047] font-medium cursor-pointer hover:text-[#388E3C]"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white min-h-[60vh] w-full max-w-xl lg:max-w-3xl xl:max-w-4xl shadow-md py-6 sm:py-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 rounded-2xl grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col mt-4 sm:mt-6 lg:mt-12 space-y-4 sm:space-y-6 lg:space-y-12">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className="flex cursor-pointer items-center"
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <h1
                      className={`text-sm sm:text-base font-regular ${
                        activeTab === tab.id
                          ? "text-[#43A047]"
                          : "text-[#333333]"
                      }`}
                    >
                      {tab.label}
                    </h1>
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-start">
                <div className="flex justify-center items-center">
                  <h1 className="text-[#333333] font-medium text-base sm:text-lg">
                    {tabs.find((tab) => tab.id === activeTab)?.label}
                  </h1>
                </div>

                {(error || success) && (
                  <div
                    className={`mt-4 ${
                      success
                        ? "bg-green-100 border-green-400 text-green-700"
                        : "bg-red-100 border-red-400 text-red-700"
                    } border px-4 py-3 rounded-lg text-sm`}
                  >
                    {error || success}
                  </div>
                )}

                <div className="mt-4 sm:mt-6 space-y-6 sm:space-y-8">
                  {activeTab === "personalInfo" && (
                    <>
                      {personalInfo.map((info) => (
                        <div key={info.name}>
                          <label
                            htmlFor={info.name}
                            className="mb-2 block text-xs sm:text-sm font-regular text-[#333333]"
                          >
                            {info.label}
                          </label>
                          <input
                            type={info.type}
                            value={formData[info.name as keyof typeof formData]}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                [info.name]: e.target.value
                              })
                            }
                            id={info.name}
                            name={info.name}
                            className="w-full h-10 sm:h-12 px-4 sm:px-6 border border-[#787878] text-xs sm:text-sm text-[#333333] rounded-full transition-all focus:outline-none focus:border-[#43A047]"
                            required={info.label.includes("*")}
                          />
                        </div>
                      ))}
                      <div
                        className="flex justify-center items-center bg-[#43A047] hover:bg-[#388E3C] text-white h-10 sm:h-12 rounded-full cursor-pointer transition-colors"
                        onClick={handleNextTab}
                      >
                        <h1 className="text-xs sm:text-sm font-medium">
                          Continue
                        </h1>
                      </div>
                    </>
                  )}

                  {activeTab === "address" && (
                    <>
                      {addressInfo.map((info) => (
                        <div key={info.name}>
                          <label
                            htmlFor={info.name}
                            className="mb-2 block text-xs sm:text-sm font-regular text-[#333333]"
                          >
                            {info.label}
                          </label>
                          <input
                            type={info.type}
                            value={formData[info.name as keyof typeof formData]}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                [info.name]: e.target.value
                              })
                            }
                            id={info.name}
                            name={info.name}
                            className="w-full h-10 sm:h-12 px-4 sm:px-6 border border-[#787878] text-xs sm:text-sm text-[#333333] rounded-full transition-all focus:outline-none focus:border-[#43A047]"
                            required={info.label.includes("*")}
                          />
                        </div>
                      ))}
                      <div
                        className="flex justify-center items-center bg-[#43A047] hover:bg-[#388E3C] text-white h-10 sm:h-12 rounded-full cursor-pointer transition-colors"
                        onClick={handleNextTab}
                      >
                        <h1 className="text-xs sm:text-sm font-medium">
                          Continue
                        </h1>
                      </div>
                    </>
                  )}

                  {activeTab === "contact" && (
                    <>
                      {contactInfo.map((info) => (
                        <div key={info.name}>
                          <label
                            htmlFor={info.name}
                            className="mb-2 block text-xs sm:text-sm font-regular text-[#333333]"
                          >
                            {info.label}
                          </label>
                          <input
                            type={info.type}
                            value={formData[info.name as keyof typeof formData]}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                [info.name]: e.target.value
                              })
                            }
                            id={info.name}
                            name={info.name}
                            className="w-full h-10 sm:h-12 px-4 sm:px-6 border border-[#787878] text-xs sm:text-sm text-[#333333] rounded-full transition-all focus:outline-none focus:border-[#43A047]"
                            required={info.label.includes("*")}
                          />
                        </div>
                      ))}
                      <div
                        className="flex justify-center items-center bg-[#43A047] hover:bg-[#388E3C] text-white h-10 sm:h-12 rounded-full cursor-pointer transition-colors"
                        onClick={handleNextTab}
                      >
                        <h1 className="text-xs sm:text-sm font-medium">
                          Continue
                        </h1>
                      </div>
                    </>
                  )}

                  {activeTab === "password" && (
                    <>
                      {passwordInfo.map((info) => (
                        <div key={info.name}>
                          <label
                            htmlFor={info.name}
                            className="mb-2 block text-xs sm:text-sm font-regular text-[#333333]"
                          >
                            {info.label}
                          </label>
                          <input
                            type={info.type}
                            value={formData[info.name as keyof typeof formData]}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                [info.name]: e.target.value
                              })
                            }
                            id={info.name}
                            name={info.name}
                            className="w-full h-10 sm:h-12 px-4 sm:px-6 border border-[#787878] text-xs sm:text-sm text-[#333333] rounded-full transition-all focus:outline-none focus:border-[#43A047]"
                            required={info.label.includes("*")}
                          />
                        </div>
                      ))}

                      <div className="mt-2 sm:mt-3">
                        <p className="text-[#787878] text-xs font-regular">
                          Must be at least 8 characters
                        </p>
                      </div>
                      <button
                        onClick={handleSignUp}
                        disabled={isSigningUp}
                        className="flex justify-center items-center bg-[#43A047] hover:bg-[#388E3C] disabled:bg-gray-400 disabled:cursor-not-allowed text-white h-10 sm:h-12 rounded-full w-full cursor-pointer transition-colors"
                      >
                        <h1 className="text-xs sm:text-sm font-medium">
                          {isSigningUp ? "Signing up..." : "Create Account"}
                        </h1>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Page;
