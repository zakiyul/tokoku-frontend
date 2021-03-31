import { useState, useEffect } from "react";
import Axios from "axios";

export default function Create() {
  const [toko, setToko] = useState([]);
  const [categori, setCategori] = useState([]);
  const [produk, setProduk] = useState({});

  const getToko = async () => {
    const { data } = await Axios.get(`http://localhost:3000/api/toko`);
    setToko(data);
  };
  const getCategori = async () => {
    const { data } = await Axios.get(`http://localhost:3000/api/categori`);
    setCategori(data);
  };

  const handleChange = (e, name) => {
    const value = e.targe.value;
    setProduk({ ...produk, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const response = Axios.post(`http://localhost:3000/api/produk`, produk);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToko();
    getCategori();
  }, []);

  return (
    <div>
      <h2>Halaman form create product</h2>

      <form>
        <label htmlFor="nama">Nama</label>
        <input
          type="text"
          name="nama"
          id="nama"
          onChange={(e) => handleChange(e, "nama")}
        />

        <label htmlFor="harga">Harga</label>
        <input
          type="number"
          name="harga"
          id="harga"
          onChange={(e) => handleChange(e, "harga")}
        />

        <label htmlFor="toko">Toko</label>
        <select name="toko" id="toko">
          {toko && toko.map((t) => <option value={t._id}>{t.nama}</option>)}
        </select>

        <label htmlFor="categori">Categori</label>
        <select name="categori" id="categori">
          {categori &&
            categori.map((c) => <option value={c._id}>{c.jenis}</option>)}
        </select>

        <label htmlFor="gambar">Gambar</label>
        <input type="file" name="gambar" id="gambar" />

        <br />
        <button type="submit" onClick={handleChange}>
          add
        </button>
      </form>
    </div>
  );
}
