import axios from 'axios'


const API_URL ='http://ktcrud-app-dev.ca-central-1.elasticbeanstalk.com';
const API_URL_RETRIEVEALLNOTES = `${API_URL}/retrievenotes`;

class CreateNoteService {

    retrieveAllCourses() {
        return axios.get(API_URL_RETRIEVEALLNOTES);
    }
    deleteCourse(id) {
        //console.log('executed service')
        return axios.delete(`${API_URL}/deletenote/${id}`);
    }
    
}

export default new CreateNoteService()