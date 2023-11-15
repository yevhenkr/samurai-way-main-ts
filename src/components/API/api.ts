import axios from 'axios'

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true
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

}
export const authAPI = {
    me() {
        return instance.get(`/auth/me`)
    }
}