import { DragDropContext } from "react-beautiful-dnd";
import Todo from "./Todo";
import InProgress from "./InProgress";
import Done from "./Done";
import { useState } from "react";

import userOne from "../assets/small-avatar/Ellipse 12.svg";
import userTwo from "../assets/small-avatar/Ellipse 12-2.svg";
import userThree from "../assets/small-avatar/Ellipse 12-3.svg";
import userFour from "../assets/small-avatar/Ellipse 12-5.svg";
import userFive from "../assets/small-avatar/Ellipse 13.svg";

import imageOne from "../assets/unsplash_MicqqGyDQ6w.svg";
import imageTwo from "../assets/unsplash_BS_1XGRkIH4.svg";
import imageThree from "../assets/unsplash_KIqJfzbII9w.svg";

export default function Board() {
  const [tasks, setTasks] = useState({
    todo: [
      {
        priority: "Low",
        title: "Brainstorming",
        desc: "Brainstorming brings team members' diverse experience into play.",
        comments: "12",
        files: "0",
        contributors: [userTwo, userFive, userOne],
      },
      {
        priority: "High",
        title: "Research",
        desc: "User research helps you to create an optimal product for users.",
        comments: "10",
        files: "10",
        contributors: [userThree, userFour],
      },
      {
        priority: "High",
        title: "Wireframes",
        desc: "It has survived not only five centuries, but also the leap into electronic typesetting.",
        comments: "5",
        files: "3",
        contributors: [userThree, userOne, userFour],
      },
      {
        priority: "Low",
        title: "Task 4",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        comments: "8",
        files: "9",
        contributors: [userThree, userOne],
      },
    ],
    inprogress: [
      {
        priority: "Low",
        title: "Onboarding Illustration",
        image: [imageOne],
        comments: "14",
        files: "15",
        contributors: [userOne, userFive, userTwo],
      },
      {
        priority: "Low",
        title: "Moodboard",
        image: [imageTwo, imageThree],
        comments: "9",
        files: "10",
        contributors: [userTwo],
      },
      {
        priority: "Low",
        title: "Something",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: [],
        comments: "3",
        files: "9",
        contributors: [userOne, userThree],
      },
    ],
    done: [
      {
        priority: "Completed",
        title: "Mobile App Design",
        image: "",
        comments: "12",
        files: "15",
        contributors: [userFive, userThree],
      },
      {
        priority: "Completed",
        title: "Design Systems",
        desc: "It just needs to adapt the UI from what you did before ",
        comments: "12",
        files: "15",
        contributors: [userFive, userTwo, userOne],
      },
    ],
  });

  function handleOnDragEnd(result) {
    console.log(result);
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const start = tasks[source.droppableId];
    const finish = tasks[destination.droppableId];

    if (start === finish) {
      const newList = Array.from(start);
      const [removed] = newList.splice(source.index, 1);
      newList.splice(destination.index, 0, removed);

      setTasks({ ...tasks, [source.droppableId]: newList });
    } else {
      const startList = Array.from(start);
      const finishList = Array.from(finish);
      const [removed] = startList.splice(source.index, 1);
      finishList.splice(destination.index, 0, removed);

      setTasks({
        ...tasks,
        [source.droppableId]: startList,
        [destination.droppableId]: finishList,
      });
    }
  }

  return (
    <div className="w-full mx-auto">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="flex m-4 flex-col md:flex-row gap-4 justify-between">
            <Todo tasks={tasks.todo} />
            <InProgress tasks={tasks.inprogress} />
            <Done tasks={tasks.done} />
          </div>
        </DragDropContext>
    </div>
  );
}
