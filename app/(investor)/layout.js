import Navbar from "@/components/investor/Navbar";

export default function layout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}