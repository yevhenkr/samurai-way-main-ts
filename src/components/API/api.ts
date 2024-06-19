import axios from 'axios'
import {ProfileObject} from "../../redux/state";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {"API-KEY":"ea858fca-ab41-4a51-b908-8563a6bea420"}
})

export const api = {
    getUsers(currentPage: number, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count${pageSize}`).then(
            (res) => {
                return res.data
            })
    },
    getProfile(userId: string) {
        return profileAPI.getProfile(userId)
    },
    unFollowed(userId: number) {
        return instance.delete(`/follow/${userId}`).then((res) => {
            return res.data
        })
    },
    followed(id: number) {
        return instance.post(`/follow/${id}`).then((res) => {
            return res.data
        })
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`/profile/${userId}`);
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`);
    },
    putStatus(status: string) {
        return instance.put(`/profile/status`, {status: status});
    },
    putProfile(data: ProfileObject) {
        // if (data.contacts && data.contacts.Github) {
        //     data.contacts.github = data.contacts.Github;
        //     data.contacts.Github = "data rewrite to github";
        // }
        return instance.put(`/profile`, data);
    },
    putPhoto(data:File) {
        const formData = new FormData()
        formData.append('image', data)
        return instance.put(`/profile/photo`, formData, {headers: {'Content-Type':"multipart/form-data"}})
    }
}

export const authAPI = {
    me() {
        return instance.get(`/auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`/auth/login`)
    },
}
