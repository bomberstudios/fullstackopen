const Header = (props) => <h1>{props.title}</h1>
const Content = (props) => {
  const list = props.parts.map((part, index) => {
    return <Part key={index} name={part.name} exercises={part.exercises} />
  })
  return (
    list
  )
}

const Part = (props) => <p>{props.name} {props.exercises}</p>
const Total = (props) => <p>Number of exercises {props.count}</p>

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
      <Total count={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App