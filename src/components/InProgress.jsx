import { Draggable, Droppable } from "react-beautiful-dnd";
import plusIcon from "../assets/add-square.svg";
import commentIcon from "../assets/message.svg";
import filesIcon from "../assets/folder-2.svg";

export default function InProgress({ tasks }) {
  return (
    <div className="bg-[#F5F5F5] px-2 mx-2 flex-1 rounded-2xl">
      <div className="flex items-center justify-between font-medium mx-4 py-4 border-b-4 border-[#FFA500]">
        <span>
          <span className="text-2xl pr-2 text-[#FFA500]">&bull;</span>
          <span>On Progress</span>
          <div className="inline-block m-1 h-5 w-5 leading-5 text-xs text-center font-medium bg-[#E0E0E0] text-[#625F6D] rounded-full">
            {tasks.length.toString()}
          </div>
        </span>
      </div>
      <Droppable droppableId="inprogress">
        {(provided) => (
          <div
            className="mt-6"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((item, index) => (
              <Draggable
                key={item.title}
                draggableId={item.title}
                index={index}
              >
                {(provided) => (
                  <div
                    className="bg-white p-4 m-2 py-2 rounded-2xl"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <div>
                      <div className="flex justify-between items-center">
                        <span
                          className={`font-medium text-xs px-2 py-1 rounded-md ${
                            item.priority === "Low"
                              ? "text-[#D58D49] bg-[#DFA87433]"
                              : item.priority === "Completed"
                              ? "text-[#68B266] bg-[#83C29D33]"
                              : "text-[#D8727D] bg-[#D8727D1A]"
                          }`}
                        >
                          {item.priority}
                        </span>
                        <span className="font-extrabold">...</span>
                      </div>
                      <div className="font-semibold text-lg text-[#0D062D]">
                        {item.title}
                      </div>
                      {item.desc && (
                        <div className="font-normal text-xs text-[#787486] pb-6">
                          {item?.desc}
                        </div>
                      )}
                      <div className="flex justify-evenly">
                        {item.image &&
                          item.image.map((image, index) => (
                            <img key={index} src={image} />
                          ))}
                      </div>

                      <div className="flex items-center justify-between mt-6 mb-2">
                        <div className="flex flex-row-reverse -translate-x-2">
                          {item.contributors.map((user, avatarIndex) => (
                            <img
                              className={`inline-block`}
                              style={{
                                transform: `translateX(${
                                  avatarIndex > 0 ? avatarIndex * 6 : 0
                                }px)`,
                              }}
                              key={`${user}`}
                              src={user}
                              alt=""
                            />
                          ))}
                        </div>

                        <div className="font-normal text-xs text-[#787486]">
                          <span className="px-2 font-medium text-xs">
                            <img
                              className="h-4 inline-block pr-1"
                              src={commentIcon}
                              alt=""
                            />
                            <span>{item.comments}</span>
                            <span>&nbsp;comments</span>
                          </span>
                          <span className="px-2 font-medium text-xs">
                            <img
                              className="h-4 inline-block pr-1"
                              src={filesIcon}
                              alt=""
                            />
                            <span>{item.files}</span>
                            <span>&nbsp;files</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
