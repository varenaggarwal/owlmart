import { useEffect, useState } from "react";
import axios from "axios";
import { useCartData } from "../contexts/data-context";
import { INITIAL_LOAD } from "../reducer/reducer";

export function useProductLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useCartData();

  useEffect(() => {
    (async function () {
      setIsLoading(() => true);
      try {
        const serverResponse = await axios.get("/api/products");
        dispatch({
          type: INITIAL_LOAD,
          payload: serverResponse.data.products,
        });
        setIsLoading(() => false);
      } catch (error) {
        setError(() => error);
        setIsLoading(() => false);
      }
    })();
  }, []);
  return { isLoading, error };
}
