import Navbar from "@/components/investor/Navbar";

export default function layout({ children }) {
    return (
        <div>
          <div className="hidden lg:block">
          <Navbar />
          </div>
            {children}
        </div>
    );
}