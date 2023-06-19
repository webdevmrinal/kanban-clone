import homeIcon from "../assets/category.svg";
import messagesIcon from "../assets/message.svg";
import tasksIcon from "../assets/task-square.svg";
import membersIcon from "../assets/profile-2user.svg";
import settingsIcon from "../assets/setting-2.svg";
import plusIcon from "../assets/add-square-2.svg";

export default function Sidebar() {
  return (
    <div className="sticky bg-white h-[100vh] w-[13%] border-r md:w-[15%]">
      <div className="pt-1 border-b md:m-4 ">
        <div className="flex gap-3 m-4">
          <img src={homeIcon} alt="" />
          <span className="text-[#787486] font-medium hidden md:inline-block">
            Home
          </span>
        </div>
        <div className="flex gap-3 m-4">
          <img src={messagesIcon} alt="" />
          <span className="text-[#787486] font-medium hidden md:inline-block">
            Messages
          </span>
        </div>
        <div className="flex gap-3 m-4">
          <img src={tasksIcon} alt="" />
          <span className="text-[#787486] font-medium hidden md:inline-block">
            Tasks
          </span>
        </div>
        <div className="flex gap-3 m-4">
          <img src={membersIcon} alt="" />
          <span className="text-[#787486] font-medium hidden md:inline-block">
            Members
          </span>
        </div>
        <div className="flex gap-3 m-4">
          <img src={settingsIcon} alt="" />
          <span className="text-[#787486] font-medium hidden md:inline-block">
            Settings
          </span>
        </div>
      </div>


      <div className="hidden lg:block w-[100%] pt-1 border-b lg:m-4">
        <div className="flex justify-around gap-3 my-2">
          <span className="uppercase text-xs font-bold text-[#787486]">My Projects</span>
          <img className="inline-block" src={plusIcon} alt="" />
        </div>
        <div className="flex items-center">
          <div className="text-2xl">&bull;</div>
          <div>Mobile App</div>
          <div className="text-[10px]">&bull;&bull;&bull;</div>
        </div>
      </div>
    </div>
  );
}
