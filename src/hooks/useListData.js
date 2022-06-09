// create custom hook for React Query
import { useQuery } from "react-query";
function useListData() {
  const postsData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  };
  const { data, isLoading, isError } = useQuery("posts", postsData);
  return { data, isLoading, isError };
}
export default useListData;
