import axios from "axios";
const loginApi = {
    post: (user) => {
        const url = 'https://quangnh.xyz/v1/authentication/login';
        return axios.post(url, {
            email: user.email,
            password: user.password
        })
    }
}

export default loginApi
