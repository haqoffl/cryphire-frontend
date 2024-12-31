import { ExternalLink } from "lucide-react";

function Pool() {
    return (
        <div className="container mx-auto font-poppins">
            {/* header section */}
            <div className="lg:flex px-10 border-b pb-2">

            <div className="lg:w-2/12 lg:border-r">
            <img className="inline-block mb-5" src={"https://cryptofonts.com/img/SVG/usdt.svg"} width={45} height={45}/>
            
            <div className="inline-block ms-5">
            <h1 className="text-xl font-poppins font-semibold">USDT</h1>
            <div>
            <span className="text-gray-500">USD Tether</span>
            <span className="text-gray-500 inline"><ExternalLink className="inline ms-2 cursor-pointer" size={16}/></span>
            </div>
            </div>
            </div>
            <div className="w-10/12 lg:flex justify-between text-center">
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
                    <p className="text-lg font-semibold">5 days left</p>
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
           <div className="flex justify-around mt-5">
                <div className="w-5/12 p-2 border bg-slate-50">

                </div>
                <div className="w-5/12">

                </div>
           </div>
        </div>
    );
}

export default Pool