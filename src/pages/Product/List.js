import { useState, useEffect } from "react";
import Axios from "axios";

export default function List() {
  const [products, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      const response = await Axios.get(`http://localhost:3000/api/produk`);
      setProduct(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>Halaman List Products</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Toko</th>
            <th>Gambar</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, i) => (
              <tr key={i}>
                <td> {i + 1} </td>
                <td>
                  {" "}
                  <a href={`/product/single/${product._id}`}>
                    {product.nama}
                  </a>{" "}
                </td>
                <td className="center">Rp.{product.harga}</td>
                {/* <td className="center">{product.tokoId.nama}</td> */}
                <td className="center">{product.categoriId.jenis}</td>
                <td>
                  <img
                    src={`http://localhost:3000/${product.gambar}`}
                    alt={product.nama}
                    width="80"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
