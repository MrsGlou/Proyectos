import { useContext } from "react"; 
import { FiltersContext } from "../context/filters";

export function useFilters() {
    //Destructuring del FiltersContext
    const {filters, setFilters} = useContext(FiltersContext)
  
  
    //IMPORTANTE
    const filterProducts = (products) => {
      return products.filter((product) => {
        return (
          //Solo nos aparecen aquellos que cumplen estas dos condiciones
          product.price >= filters.minPrince &&
          (filters.category === "all" || product.category === filters.category)
        );
      });
    };
    return { filterProducts, setFilters };
  }