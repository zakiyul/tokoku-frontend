import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";
import swal from "sweetalert";

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

  const deleteToko = async () => {
    const response = await Axios.delete(
      `http://localhost:3000/api/toko/${tokoId}`
    );
    console.log(response);
  };

  const hapus = () =>
    swal({
      title: "Delete Toko?",
      text: "Sekali delete maka tidak akan kembali lagi!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteToko();
        goBack();
        swal("Poof!, toko sudah terdelete!", {
          icon: "success",
        });
      } else {
        swal("Toko masih aman!");
      }
    });

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
          <button onClick={hapus}>Delete</button>
        </div>
      )}
      <button onClick={goBack}>&laquo; back</button>
    </>
  );
}
