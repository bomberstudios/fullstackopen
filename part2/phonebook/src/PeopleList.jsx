const PeopleList = ({ persons, nameFilter }) => {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(nameFilter.toLowerCase())
        )
        .map((person) => (
          <div key={person.name}>
            {person.name}: {person.number}
          </div>
        ))}
    </>
  )
}

export default PeopleList
