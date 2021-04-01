import { useState } from "react";
import Axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const initState = {
  nama: "",
  owner: "",
  alamat: "",
};

const Create = () => {
  const history = useHistory();
  const [toko, setToko] = useState(initState);

  const createToko = async () => {
    const response = await Axios.post(`http://localhost:3000/api/toko`, toko);
    swal({
      title: response.statusText,
      icon: "success",
    });
    setToko(initState);
  };

  const handleChange = (e, name) => {
    const value = e.target.value;
    setToko({ ...toko, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      createToko();
      history.push("/toko");
    } catch (error) {
      alert("Network error!");
    }
  };

  const goBack = () => {
    history.push("/toko");
  };

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

        <button onClick={handleSubmit}>add</button>
        <button onClick={goBack}>back</button>
      </form>
    </>
  );
};

export default Create;
