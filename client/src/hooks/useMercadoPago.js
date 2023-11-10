import axios from 'axios'
import { initMercadoPago } from "@mercadopago/sdk-react";
import { useState } from "react";

export const useMercadoPago = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  initMercadoPago("TEST-6fdbf446-88c8-4733-b863-210ea94c1d50");

  const createPreference = async (data) => {
    try {
      setIsLoading(true)
      const response = await axios.post(
        "https://gamertech-backend.vercel.app/create_preference",
        data
      )

      const { id } = response.data;
      if(id){
        setIsLoading(false)
        return id;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async (data) => {
    const id = await createPreference(data);
    if (id) {
      setPreferenceId(id);
    }
  };

  return { preferenceId, handleBuy, isLoading };
};
