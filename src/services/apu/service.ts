import axios from 'axios';
import { StudentNews } from '../../types/apu';

export default class APUNews {
    async fetchStudentNews(): Promise<Array<StudentNews>> {
        return (await axios.get('https://api.apiit.edu.my/apspace/student')).data;
    }
}
