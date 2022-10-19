import { toast } from "react-toastify"
import axios from "axios"
export const fetchData = async (url) => {
  try {
    const response = await axios.get(url)

    return response.data.data
  } catch (error) {
    toast.error(error)
  }
}
