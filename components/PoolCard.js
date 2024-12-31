"use client"
import { ArrowRight } from "lucide-react";

export default function PoolCard(){

    return (
<>

<div className="flex justify-center">
       <table className="table mt-10 w-10/12 text-center divide-y divide-gray-300">
  <thead className="text-sm font-notoSans text-gray-500">
    <tr>
      <th className="px-4 py-6">Asset</th>
      <th className="px-4 py-6">Current Pool value</th>
      <th className="px-4 py-6">Total Pool value</th>
      <th className="px-4 py-6">Pool Deadline</th>
      <th className="px-4 py-6">investment Duration</th>
    </tr>
  </thead>
  <tbody className="text-lg font-poppins">

  <tr className="border-b hover:bg-gray-100 ease-in-out duration-300 dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/usdc.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">USDC</span>
      </td>
      <td className="px-4 py-6">100k</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
     <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>
    </tr>

    <tr className="border-b  hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/usdt.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">USDT</span>
      </td>
      <td className="px-4 py-6">1.5M</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>

    </tr>

    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/wbtc.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">WBTC</span>
      </td>
      <td className="px-4 py-6">50K</td>
      <td className="px-4 py-6">5k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>

    </tr>

    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/eth.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">ETH</span>
      </td>
      <td className="px-4 py-6">100k</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>

    </tr>

    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/shib.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">SHIB</span>
      </td>
      <td className="px-4 py-6">100k</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>
    </tr>

    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/aave.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">AAVE</span>
      </td>
      <td className="px-4 py-6">100k</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>

    </tr>

    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/1inch.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">1INCH</span>
      </td>
      <td className="px-4 py-6">100k</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>

    </tr>

    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/chain.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">CHAIN</span>
      </td>
      <td className="px-4 py-6">100k</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>

    </tr>

    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/link.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">LINK</span>
      </td>
      <td className="px-4 py-6">100k</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>

    </tr>
  
    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300 dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/usdc.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">USDC</span>
      </td>
      <td className="px-4 py-6">100k</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
     <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>
    </tr>

    <tr className="border-b  hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/usdt.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">USDT</span>
      </td>
      <td className="px-4 py-6">1.5M</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>

    </tr>

    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/wbtc.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">WBTC</span>
      </td>
      <td className="px-4 py-6">50K</td>
      <td className="px-4 py-6">5k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>

    </tr>

    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/eth.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">ETH</span>
      </td>
      <td className="px-4 py-6">100k</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>

    </tr>

    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/shib.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">SHIB</span>
      </td>
      <td className="px-4 py-6">100k</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>
    </tr>

    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/aave.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">AAVE</span>
      </td>
      <td className="px-4 py-6">100k</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>

    </tr>

    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/1inch.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">1INCH</span>
      </td>
      <td className="px-4 py-6">100k</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>

    </tr>

    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/chain.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">CHAIN</span>
      </td>
      <td className="px-4 py-6">100k</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>

    </tr>

    <tr className="border-b hover:bg-gray-100 ease-in-out duration-300  dark:hover:bg-gray-800 dark:border-b-gray-500">
      <td className="px-4 py-6">
        <img className="inline-block" src={"https://cryptofonts.com/img/SVG/link.svg"} width={30} height={30} />
        <span className="ml-2 mt-2">LINK</span>
      </td>
      <td className="px-4 py-6">100k</td>
      <td className="px-4 py-6">500k</td>
      <td className="px-4 py-6">28 days left</td>
      <td className="px-4 py-6">30 days</td>
      <td className="px-4 py-6"><button className="text-primary py-1 px-2 text-sm">explore pool <ArrowRight className="inline ms-2 size-4"/></button></td>

    </tr>
  </tbody>
</table>
    </div>
    <p className="text-center text-gray-500 mt-10 mb-10 font-notoSans">No more pools</p>
</>
    )
}

//#2752E7 -dark blue