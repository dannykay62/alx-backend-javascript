export default getListStudentsIds(students) {
    if (Array.isArray(students)) {
        return students.map((items) => items.id);
    }
    return [];
}