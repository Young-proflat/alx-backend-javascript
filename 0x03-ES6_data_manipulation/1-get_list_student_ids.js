/**
 * Mapping a function that returns array of ids form a list
 * using map function on the array
 * if the argument is not array,the function is returning an empty array
 */
export default function getListStudentIds(students) {
    if ( students instanceof Array) {
        return students.map((student) => student.id);
    }
    return [];
}
