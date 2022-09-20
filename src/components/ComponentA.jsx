import React from 'react'
import ComponentB from './ComponentB'
import { Contact } from './contact.class'

const ComponentA = () => {
    const createContact =  new Contact ('Andriel' , 'Noa' , 'isnoah2022@gmail.com' )

  return (
    <div>
        <ComponentB contact={createContact}></ComponentB>
    </div>
  )
}

export default ComponentA