import { getTags } from "../../../api/qna";
import { ParenttagType } from "../../../types/Qna";
import useAsyncData from "../../common/useAsyncData";

export function useTags() {
  const [state, fetchData] = useAsyncData<ParenttagType[]>(getTags, []);

  const { isloading, error, data } = state;

  return { isloading, error, data, fetchData };
}
