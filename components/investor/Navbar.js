"use client"
import { CompassIcon, HandCoins } from "lucide-react";
import ThemeSwitcher from "../ThemeSwitcher"
import dynamic from "next/dynamic";
const Select = dynamic(() => import('react-select'), { ssr: false });
function Navbar(){
    let options = [
        {value:"ethereum",label:"Ethereum"},
        {value:"BNB",label:"BNB"},
        {value:"polygon",label:"Polygon"},
        {value:"arbitrum",label:"Arbitrum"},
        {value:"optimism",label:"Optimism"},
        {value:"avalanche",label:"Avalanche"},
        {value:"base",label:"Base"}
    ]
    return(
        <div className="flex justify-between mb-10 pt-5 pb-2">
            <h1 className="text-2xl font-bold w-4/12 text-[#2752E7] ms-4 py-2 px-4">Cryphire</h1>
            <ul className="flex justify-around w-8/12">
                <li className="py-2 px-4"> <ThemeSwitcher /></li>
                <li className="py-2 px-4 cursor-pointer"><CompassIcon className="inline me-2"/>Explore</li>
                <li className="py-2 px-4 cursor-pointer"><HandCoins className="inline me-2"/> Portfolio</li>
                <li >
                    <Select  options={options} placeholder="select network" styles={
                        {
                            control: (base) => ({
                            ...base,
                            width: '100%',
                            border:"none",
                            outline:"none",
                            boxShadow:"none",
                            backgroundColor:"transparent",
                            paddingTop:"1px",
                           
                        }),

                        option: (base) => ({
                            ...base,
                            border:"none",
                            outline:"none",
                            boxShadow:"none",
                            backgroundColor:"transparent",
                            paddingTop:"5px",
                            color:"black",
                            ":hover":{
                                backgroundColor:"#2752E7",
                                color:"white"
                            }
                        }),
                        singleValue: (base) => ({
                            ...base,
                            color:"text-gray-500",
                        }),
                     

                    }
                    } 
                      
                      />
                </li>
                <li><button className="bg-[#2752E7] py-2 px-4 text-white rounded-full">Connect Wallet</button></li>
            </ul>
        </div>
    )
}

export default Navbar