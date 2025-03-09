import { useParams } from "react-router-dom";

const useIntParams = () => {
  const { id } = useParams();
  return id === undefined ? undefined : parseInt(id!);
};

export default useIntParams;
