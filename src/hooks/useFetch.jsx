import axios from "axios";

function useFetch(url) {
    let data;
    axios.get(url)
        .then((res) => {
            data = res.data;
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

    return [data];
}

export default useFetch;
