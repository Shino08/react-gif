import { useState } from "react";
import { AddCategory } from "./components/AddCategory.jsx";
import { GifGrid } from "./components/GifGrid.jsx";

export const GifApp = () => {

    const [categories, setCategories] = useState([]);
 
    const onAddCategory = (newCategory) => {

      if( categories.includes(newCategory)) return;
        // return categories.push('Demon Slayer');
        setCategories([newCategory, ...categories]);
    }

  return (
    <>
    {/* Titulo */}
    <h1>GifApp</h1>

    {/* Inputs */}

    <AddCategory onNewCategory={(event) => onAddCategory(event)} currentCategories={ categories }/>

    {/* Listado de gif */}

        {categories.map(category => (
          <GifGrid key={category} category={category}/>
        )

        )}

    {/* Gif Item */}
    </>
  )
}
