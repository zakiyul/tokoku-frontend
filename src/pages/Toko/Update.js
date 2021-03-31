import { useState, useEffect } from "react";
import Axios from "axios";
import swal from "sweetalert";
import { useHistory, useParams } from "react-router-dom";

const initState = {
  nama: "",
  owner: "",
  alamat: "",
};

const Create = () => {
  const history = useHistory();
  const { tokoId } = useParams();
  const [toko, setToko] = useState(initState);

  const getDataToko = async () => {
    const { data } = await Axios.get(
      `http://localhost:3000/api/toko/${tokoId}`
    );
    setToko(data);
  };

  const updateToko = async () => {
    const { data } = await Axios.put(
      `http://localhost:3000/api/toko/${tokoId}`,
      toko
    );
    swal(data.message);
  };

  const handleChange = (e, name) => {
    const value = e.target.value;
    setToko({ ...toko, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      updateToko();
      history.push("/toko");
    } catch (error) {
      alert("Network error!");
    }
  };

  const goBack = () => {
    history.push("/toko");
  };

  useEffect(() => {
    getDataToko();
  }, [tokoId]);

  return (
    <>
      <form>
        <label htmlFor="nama">nama</label>
        <input
          value={toko.nama}
          type="text"
          name="nama"
          id="nama"
          onChange={(e) => handleChange(e, "nama")}
        />
        <label htmlFor="owner">owner</label>
        <input
          value={toko.owner}
          type="text"
          name="owner"
          id="owner"
          onChange={(e) => handleChange(e, "owner")}
        />
        <label htmlFor="alamat">alamat</label>
        <input
          value={toko.alamat}
          type="text"
          name="alamat"
          id="alamat"
          onChange={(e) => handleChange(e, "alamat")}
        />
        <button onClick={handleSubmit}>update</button> <br />
        <button onClick={goBack}>back</button>
      </form>
    </>
  );
};

export default Create;
