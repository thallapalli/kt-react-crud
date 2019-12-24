import axios from 'axios'


const API_URL ='http://ktcrud-app-dev.ca-central-1.elasticbeanstalk.com';
const API_URL_RETRIEVEALLNOTES = `${API_URL}/retrievenotes`;

class CreateNoteService {

    retrieveAllCourses(name) {
        return axios.get(API_URL_RETRIEVEALLNOTES);
    }
}

export default new CreateNoteService()