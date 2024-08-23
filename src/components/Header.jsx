import Line from "./Line";
import Navbar from "./Navbar";
import TopNav from "./TopNav";
// import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="flex flex-col border-b pb-3 border-b-white shadow-md">
      <Line/>
      <TopNav/>
      <Navbar/>
    </div>
  )
}
