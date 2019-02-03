import axios from 'axios';
const API_URL: string = 'https://api.jpeg.dog/images';

interface PhotoSrc {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    square: string;
    landscape: string;
    tiny: string;
}

export interface Photo {
    id: number;
    width: number;
    height: number;
    photographer: string;
    photographer_url: string;
    src: PhotoSrc;
}

export const getPhotos = () => axios.get<Photo[]>(API_URL);
