import Part from "./Part"

const Content = ({ parts }) => {
  const list = parts.map((part, index) => {
    return <Part key={index} name={part.name} exercises={part.exercises} />
  })
  return list
}

export default Content
