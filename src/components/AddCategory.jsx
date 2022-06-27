import { useState } from "react"
import { PropTypes } from 'prop-types';
import { Input } from "@nextui-org/react";
export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {setInputValue(e.target.value)}
  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputValue.trim().length <= 1) return
    onNewCategory(inputValue.trim())
    setInputValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        fullWidth
        clearable
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        label="Search for your gif"
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}