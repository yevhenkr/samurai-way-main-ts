import axios from 'axios';
import { Dispatch } from 'redux';
import { ProfileObject } from "../../redux/state";
import {setAuthUserData} from "../../redux/auth-reducer";

// Создаем экземпляр axios с предустановленной конфигурацией
const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0", // Базовый URL для API
    withCredentials: true, // Включаем отправку cookies с запросами
    headers: {"API-KEY": "ea858fca-ab41-4a51-b908-8563a6bea420"} // Заголовки по умолчанию
});

// Основной объект для работы с API
export const api = {
    // Метод для получения списка пользователей
    getUsers(currentPage: number, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(
            (res) => {
                return res.data; // Возвращаем данные из ответа
            }
        );
    },
    // Метод для получения профиля пользователя
    getProfile(userId: string) {
        return profileAPI.getProfile(userId); // Используем метод из profileAPI
    },
    // Метод для отписки от пользователя
    unFollowed(userId: number) {
        return instance.delete(`/follow/${userId}`).then((res) => {
            return res.data; // Возвращаем данные из ответа
        });
    },
    // Метод для подписки на пользователя
    followed(id: number) {
        return instance.post(`/follow/${id}`).then((res) => {
            return res.data; // Возвращаем данные из ответа
        });
    },
}

// Объект для работы с профилем пользователя
export const profileAPI = {
    // Метод для получения профиля пользователя
    getProfile(userId: string) {
        return instance.get(`/profile/${userId}`);
    },
    // Метод для получения статуса пользователя
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`);
    },
    // Метод для обновления статуса пользователя
    putStatus(status: string) {
        return instance.put(`/profile/status`, { status: status });
    },
    // Метод для обновления профиля пользователя
    putProfile(data: ProfileObject) {
        return instance.put(`/profile`, data);
    },
    // Метод для обновления фото профиля пользователя
    putPhoto(data: File) {
        const formData = new FormData();
        formData.append('image', data);
        return instance.put(`/profile/photo`, formData, { headers: { 'Content-Type': "multipart/form-data" } });
    }
}

// Объект для работы с аутентификацией
export const authAPI = {
    // Метод для получения информации о текущем пользователе
    me() {
        return instance.get(`/auth/me`);
    },
    // Метод для входа в систему
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`/auth/login`, { email, password, rememberMe });
    },
    // Метод для выхода из системы
    logout() {
        return instance.delete(`/auth/login`);
    },
}

// Пример использования API в Redux-Thunk для получения данных о пользователе
export const getAuthUserData = () => (dispatch: Dispatch) => {
    // Обращаемся к API через прокси-сервер
    return authAPI.me()
        .then(response => {
            // Проверяем результат запроса
            if (response.data.resultCode === 0) {
                // Извлекаем id, email и login из ответа
                let { id, email, login } = response.data.data;
                // Диспатчим действие с данными пользователя
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
        .catch(error => console.error('Error:', error)); // Обрабатываем ошибки
};
