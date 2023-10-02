import "./App.css"

import Course from "./components/Course"

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        { name: "Fundamentals of React", exercises: 10 },
        { name: "Using props to pass data", exercises: 7 },
        { name: "State of a component", exercises: 14 },
        { name: "Rendering a collection", exercises: 10 },
        { name: "Forms", exercises: 5 },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
    {
      name: "Authentication",
      id: 3,
      parts: [
        { name: "Authentication", exercises: 10, id: 1 },
        { name: "Authorization", exercises: 7, id: 2 },
      ],
    },
  ]

  return (
    <>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  )
}

export default App
