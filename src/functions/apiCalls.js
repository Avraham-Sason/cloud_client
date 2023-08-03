import axios from "axios"
axios.defaults.baseURL = "http://localhost:8000"


async function apicalls(method, url, data) {
    try {
        const result = await axios({
            method,
            data,
            url,
            headers: {
                "Authorization": "Bearer " + localStorage.token
            }
        })
        return result.data

    } catch (error) {
        console.log(error);
        throw error
    }
}


const get = (url) => {
    return apicalls("get", url)
}

const post = (url, data) => {
    return apicalls("post", url, data)
}

const put = (url, data) => {
    return apicalls("put", url, data)
}

const Delete = (url, data) => {
    return apicalls("delete", url, data)
}
export default ({ get, post, put, Delete })

