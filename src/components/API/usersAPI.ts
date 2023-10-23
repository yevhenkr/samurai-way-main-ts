import axios from 'axios'

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true
})

export const usersAPI = {
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

export type GetUsers = {
    name: string,
    id: number,
    uniqueUrlName: string,
    photo: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}

type ResponseType<T = {}> = {
    items: GetUsers[],
    totalCount: number,
    error: string
}