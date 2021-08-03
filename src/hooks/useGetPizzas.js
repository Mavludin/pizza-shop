import axios from 'axios'
import { useQuery } from 'react-query'
import { pizzasUrl } from '../shared/apiUrls';

export const useGetPizzas = () => {
  return useQuery("pizzas", async () => {
    const { data } = await axios.get(pizzasUrl);
    return data;
  });
}
