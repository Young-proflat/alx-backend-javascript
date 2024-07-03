/**
 * function that returns an array of object located in a specific city
 * using filter menthod
 */
export default function getStudentsByLocation(students, city) {
    if ( students instanceof Array) {
        return students.filter((student) => student.location === city);
    }
    return [];
}
