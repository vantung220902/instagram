import axiosService from '../common/axiosServices';
import { API_ENDPOINT } from '../constants';
const url = 'story';
export const getListStory = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
};
