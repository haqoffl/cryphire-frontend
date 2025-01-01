import Pie from "@/components/charts/Pie";
import { Copy, ExternalLink } from "lucide-react";

function Pool() {
    return (
        <div className="container mx-auto font-poppins">
            {/* header section */}
            <div className="w-full lg:flex lg:px-10 border-b pb-2">

            <div className="ms-5 w-full lg:w-2/12 lg:border-r">
            <img className="inline-block mb-5" src={"https://cryptofonts.com/img/SVG/usdt.svg"} width={45} height={45}/>
            
            <div className="inline-block ms-5">
            <h1 className="text-xl font-poppins font-semibold">USDT</h1>
            <div>
            <span className="text-gray-500">USD Tether</span>
            <span className="text-gray-500 inline"><ExternalLink className="inline ms-2 cursor-pointer" size={16}/></span>
            </div>
            </div>
            </div>
            <div className="w-full lg:w-10/12 lg:flex justify-between text-center">
            <div className="flex justify-around mb-5 w-full lg:w-6/12">
            <div>
                    <p className="text-lg font-semibold">100k</p>
                    <p className="text-sm text-gray-500">Current Pool value</p>
                </div>

                <div>
                    <p className="text-lg font-semibold">500k</p>
                    <p className="text-sm text-gray-500">Total Pool value</p>
                </div>
            </div>

            <div className="flex  justify-around mb-5 w-full lg:w-6/12"> 

            <div>
                    <p className="text-lg font-semibold ">5 days left</p>
                    <p className="text-sm text-gray-500">Pool deadline</p>
                </div>

                <div>
                    <p className="text-lg font-semibold">30 days</p>
                    <p className="text-sm text-gray-500">investment Duration</p>
                </div>
            </div>
            </div>
            </div>

            {/* body section */}
           <div className="w-full lg:flex justify-around mt-5 p-5">
            {/* approve and invest small screen */}
           <div className="block lg:hidden w-full ">
                <div className="p-3 border dark:border-none rounded-lg  bg-slate-50 dark:bg-gray-700 mb-10">
                    <p className="text-lg font-poppins">Approve and Invest</p>
                    <span className="text-xs font-notoSans text-gray-700 dark:text-gray-300 inline-block mt-2">
                    By approving and investing in the pool, your funds empower traders to execute strategies on your behalf. Profits generated are shared, giving you passive earnings without active trading
                    </span>
                

                  <div className="flex justify-around">
                  <input type="number" className="input mt-3 p-2 ps-2 rounded-lg outline-none w-7/12 shadow" placeholder="Enter amount"/>
                  <button className="bg-primary text-white py-2 mt-3 w-4/12">Invest</button>
                  </div>
                </div>
                </div>
            {/* info container */}
             <div className="w-full lg:w-5/12 ">
             <div className="p-3 border dark:border-none rounded-lg  bg-slate-50 dark:bg-gray-700 mb-10">
                {/* pool info */}
                    <div className="lg:flex gap-5 justify-between">
                        <div className="w-full lg:w-4/12  mt-4 font-poppins">
                            <p>Pool Info</p>
                        </div>
                        <div className="w-full lg:w-8/12  mt-2 ">
                     <div className="text-center lg:flex gap-2 ">
                     <div className="flex justify-center">
                        <Pie />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-notoSans">Total Pool</p>
                            <p className="text-lg font-poppins">200k of 500k</p>
                        </div>
                     </div>

                     <div className="mt-5 font-poppins">
                            <p><span className="text-gray-700 dark:text-gray-400 font-notoSans text-sm">Pool Address: </span>0x123456789..Hdy <Copy className="inline cursor-pointer ms-2 size-3"/></p>
                            <p><span className="text-gray-700 dark:text-gray-400 font-notoSans text-sm">Total investor: </span>1.5k</p>
                            <p><span className="text-gray-700 dark:text-gray-400 font-notoSans text-sm">Trader staked amount: </span>50k USDT</p>
                            <p><span className="text-gray-700 dark:text-gray-400 font-notoSans text-sm">Trader share: </span>5%</p>
                            <p><span className="text-gray-700 dark:text-gray-400 font-notoSans text-sm">Pool deadline: </span>5 days left</p>
                            <p><span className="text-gray-700 dark:text-gray-400 font-notoSans text-sm">investment duration: </span>30 days</p>


                    </div>
                        </div>
                  

                    </div>
                    <br />
                    <hr />
                    {/* trader strategy */}
                    <div className="lg:flex gap-5 justify-between">
                        <div className="w-full lg:w-4/12  mt-4 font-poppins">
                            <p>About strategy</p>
                        </div>
                        <div className="w-full lg:w-8/12  mt-2 ">
                        <p className="text-sm font-poppins">
                        I’ll allocate the 500k USDT public pool strategically to maximize returns. A portion will be used for liquidity provisioning on decentralized exchanges, earning fees from trades. The rest will fund algorithmic trading strategies, leveraging market trends and arbitrage opportunities. Transparent reporting and smart contract governance ensure security and confidence in managing the pool effectively.
                        </p>
                        </div>
                  

                    </div>

                    <br />
                    <hr />
                    {/* About trader */}
                    <div className="lg:flex gap-5 justify-between">
                        <div className="w-full lg:w-4/12  mt-4 font-poppins">
                            <p>About Trader</p>
                        </div>

                        <div className="w-full lg:w-8/12 mt-4 ">
                        <p><span className="text-gray-700 dark:text-gray-400 font-notoSans text-sm">Trader Address: </span>0x123456789..Hdy <ExternalLink className="inline cursor-pointer ms-2 size-3"/></p>

                        <p className="text-primary"><span className="text-gray-700 dark:text-gray-400 font-notoSans text-sm">View Swap interaction History: </span>open <ExternalLink className="inline cursor-pointer ms-2 size-3"/></p>

                        <p className="text-primary"><span className="text-gray-700 dark:text-gray-400 font-notoSans text-sm">View Liquidity interaction History: </span>open <ExternalLink className="inline cursor-pointer ms-2 size-3"/></p>
                        </div>
                  
                      
                       

                    </div>
                </div>
             </div>

                {/* approve and invest */}
                <div className="hidden lg:block w-5/12 ">
                <div className="p-3 border dark:border-none rounded-lg  bg-slate-50 dark:bg-gray-700 mb-10">
                    <p className="text-lg font-poppins">Approve and Invest</p>
                    <span className="text-xs font-notoSans text-gray-700 dark:text-gray-300 inline-block mt-2">
                    By approving and investing in the pool, your funds empower traders to execute strategies on your behalf. Profits generated are shared, giving you passive earnings without active trading
                    </span>
              
                  <div className="flex justify-around">
                  <input type="number" className="input mt-3 p-2 ps-2 rounded-lg outline-none w-7/12 shadow" placeholder="Enter amount"/>
                  <button className="bg-primary text-white py-2 mt-3 w-4/12">Invest</button>
                  </div>
                </div>
                </div>
           </div>
        </div>
    );
}

export default Pool