import React, {useState} from "react";

function AddSpot({ allSpots, setAllSpots }) {
  const [addSpot, setAddSpot] = useState({
    name: '',
    city: '',
    state: '',
    street: '',
    image: '',
    description: '',
  })

  function handleChange(event) {
    setAddSpot({
      ...addSpot,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newSpot = {
      name: addSpot.name,
      city: addSpot.city,
      state: addSpot.state,
      street: addSpot.street,
      image: addSpot.image,
      description: addSpot.description,
    }
    fetch('http://localhost:3000/spots', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSpot)
    })
    .then(r => r.json())
    .then(data => setAllSpots([...allSpots, data]))
    setAddSpot({
      name: '',
      city: '',
      state: '',
      street: '',
      image: '',
      description: '',
    })
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Add a Spot</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          style={{fontSize: '20px'}}
          type='text'
          name='name'
          value={addSpot.name}
          placeholder='name...'
        />
        <br/>
        <input
          onChange={handleChange}
          style={{fontSize: '20px'}}
          type='text'
          name='city'
          value={addSpot.city}
          placeholder='city...'
        />
        <br/>
        <input
          onChange={handleChange}
          style={{fontSize: '20px'}}
          type='text'
          name='state'
          value={addSpot.state}
          placeholder='state...'
        />
        <br/>
        <input
          onChange={handleChange}
          style={{fontSize: '20px'}}
          type='text'
          name='street'
          value={addSpot.street}
          placeholder='street/coordinates...'
        />
        <br/>
        <input
          onChange={handleChange}
          style={{fontSize: '20px'}}
          type='text'
          name='image'
          value={addSpot.image}
          placeholder='image URL...'
        />
        <br/>
        <textarea
          onChange={handleChange}
          style={{fontSize: '20px'}}
          type='text'
          name='description'
          value={addSpot.description}
          placeholder='description...'
        />
        <br/>
        <button style={{fontSize: '20px'}}>Submit Spot!</button>
      </form>
    </div>
  )
}

export default AddSpot