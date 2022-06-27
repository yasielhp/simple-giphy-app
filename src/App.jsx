import { useState } from "react"
import { AddCategory, GifGrid, Header } from "./components/"
import { Container } from "@nextui-org/react";


export const App = () => {
  const [categories, setCategories] = useState(['trending'])

  const handleAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }
  return (
    <Container md>
      <Header/>
      <AddCategory onNewCategory={e => handleAddCategory(e)}/>
         { categories.map((category) => (<GifGrid key={category} category={category } />))}
    </Container>
  )
}
