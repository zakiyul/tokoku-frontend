import { useState, useEffect } from "react";
import Axios from "axios";

export default function List() {
  const [toko, setToko] = useState([]);
  const getToko = async () => {
    const { data } = await Axios.get(`http://localhost:3000/api/toko`);
    setToko(data);
  };

  useEffect(() => {
    getToko();
  }, []);

  return (
    <>
      <h2>List Toko</h2>
      <a href="/toko/create">+ CREATE</a>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Owner</th>
            <th>Alamat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {toko &&
            toko.map((t, i) => (
              <tr key={i}>
                <td> {i + 1} </td>
                <td>
                  <a href={`/toko/single/${t._id}`}>{t.nama}</a>
                </td>
                <td>{t.owner}</td>
                <td>{t.alamat}</td>
                <td>
                  <a href={`/toko/update/${t._id}`}>update</a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
