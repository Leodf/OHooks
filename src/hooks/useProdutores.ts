import { useEffect, useState } from "react";
import { loadProdutores } from "../services/loadData";

const useProdutores: React.FC = () => {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const data = loadProdutores();
    setTitle(data.title);
    setList(data.list as any);
  }, []);

  return [title, list];
};

export default useProdutores;
