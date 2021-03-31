import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";

export default function Single() {
  const history = useHistory();
  const { productId } = useParams();
  const [product, setProduct] = useState({
    nama: "",
    harga: 0,
    categoriId: {},
    tokoId: {},
  });

  const getProduct = async () => {
    try {
      const response = await Axios.get(
        `http://localhost:3000/api/produk/${productId}`
      );
      setProduct(response.data);
      console.log(response.data);
      console.log(product);
    } catch (error) {
      alert(error);
    }
  };

  const goBack = () => {
    history.push("/product");
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  return (
    <div>
      <h2>Halaman Single Product</h2>
      {product ? (
        <>
          <div>Name : {product.nama} </div>
          <div>Harga : {product.harga} </div>
          <div>Toko : {product.tokoId.nama ? product.tokoId.nama : null} </div>
          <div>
            Kategori :{" "}
            {product.categoriId.jenis ? product.categoriId.jenis : null}{" "}
          </div>
          <img
            src={`http://localhost:3000/${product.gambar}`}
            alt={product.nama}
          />
        </>
      ) : null}
      <button onClick={goBack}>&laquo; back</button>
    </div>
  );
}
