import axios from 'axios'

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true
})

export const usersApi = {
    getUsers(currentPage: number, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count${pageSize}`).then(
            (res) => {
                return res.data
            })
    },
    unFollowed(id: number) {
        return instance.delete(`/follow/${id}`).then((res) => {
            return res.data
        })
    },
    followed(id: number) {
        return instance.post(`/follow/${id}`).then((res) => {
            return res.data
        })
    },
}