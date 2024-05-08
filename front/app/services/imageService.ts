import axios from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_API_UPLOAD_URL || '';

export const upload = async (file: File) => {
    const formData = new FormData();
    formData.append('photo', file);

    const { data } = await axios.post(`${apiUrl}/uploadImage`, formData);
    return data;
};

export const get = async (filename: string) => {
    const { data } = await axios.get(`${apiUrl}/viewImage?imageName=${filename}`);
    return data.imageUrl;
}