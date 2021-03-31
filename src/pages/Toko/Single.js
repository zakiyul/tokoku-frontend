import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";

export default function Single() {
  const history = useHistory();
  const [toko, setToko] = useState({});
  const { tokoId } = useParams();
  const getToko = async () => {
    const { data } = await Axios.get(
      `http://localhost:3000/api/toko/${tokoId}`
    );
    setToko(data);
  };

  const goBack = () => {
    history.push("/toko");
  };

  useEffect(() => {
    getToko();
  }, [tokoId]);

  return (
    <>
      {toko && (
        <div>
          <div>Nama : {toko.nama}</div>
          <div>Owner : {toko.owner}</div>
          <div>Alamat : {toko.alamat}</div>
        </div>
      )}
      <button onClick={goBack}>&laquo; back</button>
    </>
  );
}
