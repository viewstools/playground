import React from 'react'
import Dropdown from './Dropdown.view.js'
import useDropdown from 'useDropdown.js'

export default function DropdownLogic() {
  let dropdown = useDropdown()

  return <Dropdown {...dropdown} />
}
