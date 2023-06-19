import logo from "../assets/Group 7.svg";
import arrowleft from "../assets/arrowLeft.svg";
import calendarIcon from "../assets/calendar-2.svg";
import helpIcon from "../assets/message-question.svg";
import notificationIcon from "../assets/notification.svg";
import userAvatar from "../assets/Mask Group-2.svg";
import arrowDown from "../assets/arrow-down.svg";
import searchIcon from "../assets/search-normal.svg";

export default function Header() {
  return (
    <div className="border-b sticky top-0 left-0 z-10 bg-white flex items-center justify-between gap-2 md:justify-between md:px-6">
      <div className=" border-r flex items-center pl-3 pr-2 py-3 md:max-w-md md:w-[15%]">
        <img className="inline-block w-8 md:w-auto" src={logo} alt="" />
        <span className="hidden md:block text-xl font-semibold md:pl-1">
          Project M.
        </span>
        <img className="hidden md:block md:pl-6" src={arrowleft} alt="" />
      </div>

      <div className="flex-1 flex justify-between items-center py-2 md:pl-6">
        <form
          className=" flex items-center text-sm gap-2 px-4 py-2 bg-[#F5F5F5] rounded-md"
          action="submit"
        >
          <img className="h-4" src={searchIcon} alt="" />
          <input
            className="outline-none bg-[#F5F5F5]"
            type="text"
            placeholder="Search for anything..."
          />
          <button hidden></button>
        </form>
        <div className="hidden md:flex md:gap-4 md:flex-1 place-content-end md:pr-8">
          <img src={calendarIcon} alt="" />
          <img src={helpIcon} alt="" />
          <img src={notificationIcon} alt="" />
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden text-right md:block ">
            <div className="">Anima Agarwal</div>
            <div className="text-sm text-[#787486]">U.P, India</div>
          </div>
          <img className="mr-4 md:mr-0" src={userAvatar} alt="" />
          <img className="hidden md:block" src={arrowDown} alt="" />
        </div>
      </div>
    </div>
  );
}
