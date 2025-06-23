"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { useUser } from "../context/UserContext";
import { saveQuestionaire } from "./action";
import { useRouter } from "next/navigation";
import {CheckCircle} from "lucide-react"

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

const subscriptionOptions = [
  "contact me",
  "I will consider later",
];


interface QnData {
    userId:string
    roles:string[]
    initiatives:string[] 
    numberOfGardens:number
    resources:string[]
    aboutMembership:string
    district:string
    county:string 
    subCounty:string
    zone:string
}




const Page = () => {

  const user = useUser();
  const router = useRouter()

  const [step, setStep] = useState(1);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedInitiatives, setSelectedInitiatives] = useState<string[]>([]);
  const [selectedResources, setSelectedResources] = useState<string[]>([]);
  const [selectedSubscriptionOption, setSelectedSubscriptionOption] = useState<string>("");
  const [numberOfGardens,setNumberOfGardens]= useState<number>(0)
  const [district,setDistrict] = useState<string>("")
  const [county,setCounty] = useState<string>("")
  const [subCounty,setSubCounty] = useState<string>("")
  const [zone,setZone] = useState<string>("")
  const [loading,setLoading] = useState<boolean>(false)

  const [showSuccess,setShowSuccess] = useState<boolean>(false)




  const handleRoleChange = (role: string) => {
    setSelectedRoles((prev) =>
      prev.includes(role)
        ? prev.filter((r) => r !== role)
        : [...prev, role]
    );
  };

  const handleSelectedResources = (res: string) => {
    setSelectedResources((prev) =>
      prev.includes(res)
        ? prev.filter((i) => i !== res)
        : [...prev, res]
    );
  };

  const handleSelectedSubscription = (sub: string) => {
    setSelectedSubscriptionOption((prev) =>
      prev == sub ? prev : sub
    );
  };

   const handleInitiativeChange = (initiative: string) => {
    setSelectedInitiatives((prev) =>
      prev.includes(initiative)
        ? prev.filter((i) => i !== initiative)
        : [...prev, initiative]
    );
  };


  const handleSavingQuestionaire=async()=>{
    setLoading(true)
    const data:QnData = {
      userId: user.id,
      roles:selectedRoles,
      initiatives:selectedInitiatives,
      resources:selectedResources,
      numberOfGardens:numberOfGardens,
      aboutMembership:selectedSubscriptionOption,
      district:district,
      county:county,
      subCounty:subCounty,
      zone:zone
    }

    const res = await saveQuestionaire(data)

    if(res.error){
       //show error
    }

    if(res.success){ 
      setShowSuccess(true)
    }

    setLoading(false)
  }

  if(showSuccess){
     return (
        <div className=" w-screen h-screen bg-white p-10 flex flex-col justify-center items-center">
                   <CheckCircle size={80} color="green" />
                   <h1 className="text-xl font-bold  text-center">Response recorded successfully</h1>
                   <div className="text-lg font-regular mb-6 text-center">
                     Thank you for your valuable time; click the button below to proceed to your dashboard
                   </div>

                   <Button 
                     onClick={()=>{
                       router.replace("/app/dashboard")
                     }}
                    >
                      Go to Dashboard
                   </Button>
        </div>
     )
  }

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
                      value={numberOfGardens.toString()}
                      onChange={(e)=>{
                        const a = e.target.value.length > 0 ? e.target.value : "0"
                        setNumberOfGardens(parseInt(a))
                      }}
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
                {resourceOptions.map((resource) => (
                  <label key={resource} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedResources.includes(resource)}
                      onChange={() => handleSelectedResources(resource)}
                      className="accent-primary w-4 h-4 rounded"
                    />
                    <span className="text-gray-700 text-sm">{resource}</span>
                  </label>
                ))}
              </div>
            </div>
            <Button
              type="button"
              className="w-full mt-6"
              onClick={() => setStep(4)}
              disabled={selectedResources.length === 0}
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
              onClick={() => setStep(5)}
              disabled={selectedInitiatives.length === 0}
            >
              Next
            </Button>
          </form>
        )}
        {step === 5 && (
          <form className="w-full flex flex-col gap-4">
            <div className="mb-4">
              <div className="font-semibold mb-2 text-gray-800 text-center">
                  Where are you from
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <Input
                   placeholder="Enter District"
                   value={district}
                   onChange={(e)=> setDistrict(e.target.value)}
                 />

                 <Input
                   placeholder="Enter County"
                   value={county}
                   onChange={(e)=> setCounty(e.target.value)}
                 />

                 <Input
                   placeholder="Enter Sub County"
                   value={subCounty}
                   onChange={(e)=> setSubCounty(e.target.value)}
                 />

                 <Input
                   placeholder="Enter Zone"
                   value={zone}
                   onChange={(e)=> setZone(e.target.value)}
                 />
              </div>
            </div>
            <Button
              type="button"
              className="w-full mt-6"
              onClick={() => setStep(6)}
              disabled={district.length > 0 && subCounty.length > 0 ? false : true}
            >
              Next
            </Button>
          </form>
        )}
         {step === 6 && (
         <form className="w-full flex flex-col gap-4">
            <div className="mb-4">
              <div className="font-semibold mb-2 text-gray-800 text-center">
                  This initiative is Private sector driven in collaboration with a membership model <br></br>
                  Are you willing and ready to commit to membership registration and subscription for access to support services? 
              </div>
              <div className="flex flex-col gap-2 mt-4">
                {subscriptionOptions.map((sub) => (
                  <label key={sub} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedSubscriptionOption.includes(sub)}
                      onChange={() => handleSelectedSubscription(sub)}
                      className="accent-primary w-4 h-4 rounded"
                    />
                    <span className="text-gray-700 text-sm">{sub}</span>
                  </label>
                ))}
              </div>
            </div>
            <Button
              type="button"
              className="w-full mt-6"
              onClick={()=> handleSavingQuestionaire()}
              disabled={selectedSubscriptionOption.length === 0}
              loading={loading}
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