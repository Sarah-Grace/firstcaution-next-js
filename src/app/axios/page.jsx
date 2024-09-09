

import axios from "axios";

function AxiosPage() {
    const handleGet = async() => {
        await axios.get("http://192.168.0.62:9000/api/register/").then((res) => {
            console.log(res.data);
        });
    }
    handleGet();
  return (
    <>
        <button>
            Get Data
        </button>
    </>
  )
}

export default AxiosPage