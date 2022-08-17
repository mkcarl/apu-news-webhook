import APUNews from './service';

const client = new APUNews();

export async function getAllStudentNews() {
    return await client.fetchStudentNews();
}
