import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:9192" });

export async function addRoom(photo, roomType, roomPrice) {
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("roomType", roomType);
    formData.append("roomPrice", roomPrice);

    const response = await api.post("/room/add/new-room", formData);
    return response.status === 201 ? true : false;

}

export async function getRoomTypes() {
    try {
        const response = await api.get("/room/get/room-types");
        return response.data;
    }
    catch (error) {
        throw new Error("Error while fetching room types" + error);
    }
}