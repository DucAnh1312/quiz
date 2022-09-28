import axios from "axios";
const forgotApi = {
    post: (user) => {
        const url = 'https://quangnh.xyz/v1/authentication/forgot-password';
        return axios.post(url, {
            email: user.email,
        })
    }
}

export default forgotApi
