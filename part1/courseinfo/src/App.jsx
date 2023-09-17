/* eslint-disable react/prop-types */
const Header = ({title}) => <h1>{title}</h1>
const Content = ({parts}) => {
  const list = parts.map((part, index) => {
    return <Part key={index} name={part.name} exercises={part.exercises} />
  })
  return (
    list
  )
}
const Part = ({name, exercises}) => <p>{name} {exercises}</p>
const Total = ({parts}) => {
  let totalExercises = 0
  parts.forEach((part) => {
    totalExercises += part.exercises
  })
  return (<p>Number of exercises {totalExercises}</p>)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App