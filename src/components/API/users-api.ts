import axios from 'axios'

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/users",
    withCredentials: true
})

export const usersAPI = {
    getUsers<ResponseType>() {
        return instance.get("")
    }
}

export type GetUsers={
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