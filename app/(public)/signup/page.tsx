"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState("personalInfo");
  const [isSigningUp, setIsSigningUp] = useState(false);

  const [formData, setFormData] = useState({
    accountType: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

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
    { label: "First Name*", name: "firstName", type: "text" },
    { label: "Last Name*", name: "lastName", type: "text" },
    { label: "Date of Birth*", name: "dateOfBirth", type: "date" }
  ];

  const addressInfo = [
    { label: "City*", name: "city", type: "text" },
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
    setIsSigningUp(true);

    try {
      const apiRes = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const apiData = await apiRes.json();

      if (!apiRes.ok) {
        toast.error(apiData.message || "Something went wrong during signup.");
        return;
      }

      toast.success("Account created successfully! Redirecting...");
      router.push("/");

    } catch {
      toast.error("Failed to sign up. Please try again.");
    } finally {
      setIsSigningUp(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 py-8">
        {step === 1 ? (
          <>
            <div className="bg-white/80 backdrop-blur-xl h-auto w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg shadow-2xl py-8 px-6 md:px-10 rounded-3xl border border-white/20">
              <div className="flex justify-end items-center ">
                <button
                  className="hover:bg-gray-100 rounded-full p-1 transition-all focus:outline-none"
                  onClick={() => router.back()}
                >
                  <i className="ri-close-line text-[#333333] text-2xl md:text-3xl sm:text-3xl cursor-pointer"></i>
                </button>
              </div>

              <div className="flex justify-center items-center mt-6 md:mt-8 sm:mt-8">
                <h1 className="text-[#333333] text-sm md:text-base sm:text-base font-bold">
                  Account Type
                </h1>
              </div>

              <div className="mt-6 md:mt-8 sm:mt-8">
                <div className="flex flex-col space-y-4 md:space-y-6 sm:space-y-8">
                  <button
                    className={`flex justify-between items-center group h-auto p-5 border transition-all duration-300 rounded-2xl cursor-pointer focus:outline-none text-left ${formData.accountType === "hirer"
                      ? "border-green-500 bg-green-50/50 ring-1 ring-green-500"
                      : "border-gray-200 hover:border-green-400 hover:bg-gray-50 hover:shadow-md"
                      }`}
                    onClick={() =>
                      setFormData({ ...formData, accountType: "hirer" })
                    }
                  >
                    <div className="flex flex-col space-y-1.5">
                      <h1 className={`font-semibold text-sm md:text-base transition-colors ${formData.accountType === "hirer" ? "text-green-800" : "text-gray-700"}`}>
                        Hirer
                      </h1>
                      <p className="text-gray-500 text-xs md:text-sm font-light">
                        You&apos;re looking to rent equipment
                      </p>
                    </div>
                    <div className="flex justify-end items-center pl-4">
                      <i
                        className={`text-xl transition-all duration-300 ${formData.accountType === "hirer"
                          ? "ri-checkbox-circle-fill text-green-500 scale-110"
                          : "ri-checkbox-blank-circle-line text-gray-300 group-hover:text-green-400"
                          }`}
                      ></i>
                    </div>
                  </button>

                  <button
                    className={`flex justify-between items-center group h-auto p-5 border transition-all duration-300 rounded-2xl cursor-pointer focus:outline-none text-left ${formData.accountType === "owner"
                      ? "border-green-500 bg-green-50/50 ring-1 ring-green-500"
                      : "border-gray-200 hover:border-green-400 hover:bg-gray-50 hover:shadow-md"
                      }`}
                    onClick={() =>
                      setFormData({ ...formData, accountType: "owner" })
                    }
                  >
                    <div className="flex flex-col space-y-1.5">
                      <h1 className={`font-semibold text-sm md:text-base transition-colors ${formData.accountType === "owner" ? "text-green-800" : "text-gray-700"}`}>
                        Owner
                      </h1>
                      <p className="text-gray-500 text-xs md:text-sm font-light">
                        You&apos;re looking to list equipment
                      </p>
                    </div>
                    <div className="flex justify-end items-center pl-4">
                      <i
                        className={`text-xl transition-all duration-300 ${formData.accountType === "owner"
                          ? "ri-checkbox-circle-fill text-green-500 scale-110"
                          : "ri-checkbox-blank-circle-line text-gray-300 group-hover:text-green-400"
                          }`}
                      ></i>
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center mt-8 sm:mt-12 space-y-6 sm:space-y-8">
                <button
                  onClick={() => {
                    if (!formData.accountType) {
                      toast.error("Please select an account type");
                      return;
                    }
                    setStep(2);
                  }}
                  className="w-full text-sm bg-gradient-to-r from-green-600 to-emerald-600 text-white h-12 rounded-full font-semibold tracking-wide cursor-pointer hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
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
            <div className="bg-white/80 backdrop-blur-xl min-h-[60vh] w-full max-w-xl lg:max-w-3xl xl:max-w-4xl shadow-2xl py-8 px-6 lg:px-12 rounded-3xl border border-white/20 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col mt-4 md:mt-6 sm:mt-6 lg:mt-8 space-y-4 md:space-y-5 sm:space-y-6 lg:space-y-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className="flex cursor-pointer items-center text-left hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 rounded"
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <h1
                      className={`text-sm md:text-base font-medium transition-colors duration-200 px-4 py-2 rounded-lg ${activeTab === tab.id
                        ? "text-green-700 bg-green-50"
                        : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                        }`}
                    >
                      {tab.label}
                    </h1>
                  </button>
                ))}
              </div>

              <div className="flex flex-col justify-start">
                <div className="flex justify-center items-center">
                  <h1 className="text-[#333333] font-medium text-base md:text-lg sm:text-lg">
                    {tabs.find((tab) => tab.id === activeTab)?.label}
                  </h1>
                </div>

                <div className="mt-4 md:mt-6 sm:mt-6 space-y-6 md:space-y-7 sm:space-y-8">
                  {activeTab === "personalInfo" && (
                    <>
                      {personalInfo.map((info) => (
                        <div key={info.name}>
                          <label
                            htmlFor={info.name}
                            className="mb-2 block text-xs md:text-sm sm:text-sm font-regular text-[#333333]"
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
                            placeholder={`Enter ${info.label.replace('*', '').trim().toLowerCase()}`}
                            className="w-full h-12 px-5 bg-gray-50 border border-transparent text-sm text-gray-800 rounded-full transition-all duration-200 focus:outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 placeholder:text-gray-400"
                            required={info.label.includes("*")}
                          />
                        </div>
                      ))}
                      <button
                        type="button"
                        className="flex justify-center items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] text-white h-12 rounded-full cursor-pointer transition-all duration-200 w-full"
                        onClick={handleNextTab}
                      >
                        <h1 className="text-xs md:text-sm sm:text-sm font-medium">
                          Continue
                        </h1>
                      </button>
                    </>
                  )}

                  {activeTab === "address" && (
                    <>
                      {addressInfo.map((info) => (
                        <div key={info.name}>
                          <label
                            htmlFor={info.name}
                            className="mb-2 block text-xs md:text-sm sm:text-sm font-regular text-[#333333]"
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
                            placeholder={`Enter ${info.label.replace('*', '').trim().toLowerCase()}`}
                            className="w-full h-12 px-5 bg-gray-50 border border-transparent text-sm text-gray-800 rounded-full transition-all duration-200 focus:outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 placeholder:text-gray-400"
                            required={info.label.includes("*")}
                          />
                        </div>
                      ))}
                      <button
                        type="button"
                        className="flex justify-center items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] text-white h-12 rounded-full cursor-pointer transition-all duration-200 w-full"
                        onClick={handleNextTab}
                      >
                        <h1 className="text-xs md:text-sm sm:text-sm font-medium">
                          Continue
                        </h1>
                      </button>
                    </>
                  )}

                  {activeTab === "contact" && (
                    <>
                      {contactInfo.map((info) => (
                        <div key={info.name}>
                          <label
                            htmlFor={info.name}
                            className="mb-2 block text-xs md:text-sm sm:text-sm font-regular text-[#333333]"
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
                            placeholder={`Enter ${info.label.replace('*', '').trim().toLowerCase()}`}
                            className="w-full h-12 px-5 bg-gray-50 border border-transparent text-sm text-gray-800 rounded-full transition-all duration-200 focus:outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 placeholder:text-gray-400"
                            required={info.label.includes("*")}
                          />
                        </div>
                      ))}
                      <button
                        type="button"
                        className="flex justify-center items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] text-white h-12 rounded-full cursor-pointer transition-all duration-200 w-full"
                        onClick={handleNextTab}
                      >
                        <h1 className="text-xs md:text-sm sm:text-sm font-medium">
                          Continue
                        </h1>
                      </button>
                    </>
                  )}

                  {activeTab === "password" && (
                    <>
                      {passwordInfo.map((info) => (
                        <div key={info.name}>
                          <label
                            htmlFor={info.name}
                            className="mb-2 block text-xs md:text-sm sm:text-sm font-regular text-[#333333]"
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
                            placeholder={`Enter ${info.label.replace('*', '').trim().toLowerCase()}`}
                            className="w-full h-12 px-5 bg-gray-50 border border-transparent text-sm text-gray-800 rounded-full transition-all duration-200 focus:outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 placeholder:text-gray-400"
                            required={info.label.includes("*")}
                          />
                        </div>
                      ))}

                      <div className="mt-2 md:mt-3 sm:mt-3">
                        <p className="text-[#787878] text-xs font-regular">
                          Must be at least 8 characters
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleSignUp}
                        disabled={isSigningUp}
                        className="flex justify-center items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 text-white h-12 rounded-full w-full cursor-pointer transition-all duration-200"
                      >
                        <h1 className="text-xs md:text-sm sm:text-sm font-medium">
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
      </div >
    </>
  );
}

export default Page;
