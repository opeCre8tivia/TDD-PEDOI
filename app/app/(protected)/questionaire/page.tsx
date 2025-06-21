"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { useUser } from "../context/UserContext";

const roleOptions = [
  "Seed system development- nursery operator",
  "Grower",
  "Processor",
  "Aggregator",
  "Products development",
  "Distributor/ Exporter",
  "Technical support- Agronomy.",
  "Investor",
  "Trainer",
  "Inputs dealer."
];

const initiativeOptions = [
  "Savings club",
  "Investment club",
  "Insurance."
];

const resourceOptions = [
  "Warehouse",
  "facilities",
  "Trabspirtu",
  "Full Time",
  "Part Time"
];

const Page = () => {

  const user = useUser();

  const [step, setStep] = useState(1);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedInitiatives, setSelectedInitiatives] = useState<string[]>([]);

  const handleRoleChange = (role: string) => {
    setSelectedRoles((prev) =>
      prev.includes(role)
        ? prev.filter((r) => r !== role)
        : [...prev, role]
    );
  };

  const handleInitiativeChange = (initiative: string) => {
    setSelectedInitiatives((prev) =>
      prev.includes(initiative)
        ? prev.filter((i) => i !== initiative)
        : [...prev, initiative]
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 flex flex-col items-center">

         <div>
            <Logo styles={{width:"50px",height:"50px"}} />
         </div>
        
        {
            step == 1 && (
                <div className="w-full flex flex-col gap-4">
                     <div className="mb-4">
                        {user && <h2 className="font-semibold text-center text-gray-600">Hi {user.lastName}</h2>}
                        <h1 className="text-xl font-bold mb-6 text-center">Welcome to Pedoi</h1>
                        <div className="font-regular mb-2 text-gray-800 text-left">
                           We would like to know your Commitmentment  to  National Cocoa  Sector cluster Development initiative with Pedoi Ltd
                        </div>
                        <div className="font-regular mb-2 text-gray-800 text-left">
                           Take a minute to answer a few questions
                        </div>
                    
                         <Button
                            type="button"
                            className="w-full mt-6"
                            onClick={() => setStep(2)}
                         
                        >
                         Start Now
                        </Button>

                     </div>
                </div>
            )
        }
        {step === 2 && (
          <form className="w-full flex flex-col gap-4">
            <div className="mb-4">
              <div className="font-semibold mb-2 text-gray-800 text-center">
                What role are you looking to play in the development of Cocoa sector? <br />
                <span className="text-sm font-normal">Tick all applicable</span>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                {roleOptions.map((role) => (
                  <label key={role} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedRoles.includes(role)}
                      onChange={() => handleRoleChange(role)}
                      className="accent-primary w-4 h-4 rounded"
                    />
                    <span className="text-gray-700 text-sm">{role}</span>
                  </label>
                ))}
              </div>
              {selectedRoles.includes("Grower") && <div className="w-full mt-6">
                    <div className="font-semibold mb-2 text-gray-800 text-center">
                        How many gardens are you ready now or willing to commit to growing
                    </div>
                     <Input
                      placeholder="Number of gardens"
                      type="number"
                     />
                
              </div>
              }
            </div>
            <Button
              type="button"
              className="w-full mt-6"
              onClick={() => setStep(3)}
              disabled={selectedRoles.length === 0}
            >
              Next
            </Button>
          </form>
        )}
         {step === 3 && (
          <form className="w-full flex flex-col gap-4">
            <div className="mb-4">
              <div className="font-semibold mb-2 text-gray-800 text-center">
                What resources do you have available that you are willing to commit to the initiative <br />
                <span className="text-sm font-normal">Tick all applicable</span>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                {resourceOptions.map((role) => (
                  <label key={role} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedRoles.includes(role)}
                      onChange={() => handleRoleChange(role)}
                      className="accent-primary w-4 h-4 rounded"
                    />
                    <span className="text-gray-700 text-sm">{role}</span>
                  </label>
                ))}
              </div>
            </div>
            <Button
              type="button"
              className="w-full mt-6"
              onClick={() => setStep(4)}
              disabled={selectedRoles.length === 0}
            >
              Next
            </Button>
          </form>
        )}
        {step === 4 && (
          <form className="w-full flex flex-col gap-4">
            <div className="mb-4">
              <div className="font-semibold mb-2 text-gray-800 text-center">
                What other initiatives related to your member participation are you willing to consider: <br />
                <span className="text-sm font-normal">Tick all applicable</span>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                {initiativeOptions.map((initiative) => (
                  <label key={initiative} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedInitiatives.includes(initiative)}
                      onChange={() => handleInitiativeChange(initiative)}
                      className="accent-primary w-4 h-4 rounded"
                    />
                    <span className="text-gray-700 text-sm">{initiative}</span>
                  </label>
                ))}
              </div>
            </div>
            <Button
              type="button"
              className="w-full mt-6"
              onClick={() => {/* handle submit or go to next step */}}
              disabled={selectedInitiatives.length === 0}
            >
              Finish
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Page;