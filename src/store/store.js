const oldTasks = [
  {
    id: "a1f4c2e1-7d21-4b6f-9b6a-1111aabbcc01",
    title: "Learn React",
    color: "yellow",
    fav: true,
    completed: true,
    tags: [
      { name: "frontend", color: "blue" },
      { name: "react", color: "cyan" },
    ],
  },
  {
    id: "b2e5d3f2-8a32-5c7a-0c7b-2222bbccdd02",
    title: "Practice GitHub",
    color: "red",
    fav: false,
    completed: false,
    tags: [{ name: "git", color: "orange" }],
  },
];

export const tasks = JSON.parse(localStorage.getItem("tasks")) || oldTasks;
