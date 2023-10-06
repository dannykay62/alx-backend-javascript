// first task
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearOfExperience?: number;
    [propName: string]: any;
}

// create a Teacher
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

  // Create Director
  export interface Directors extends Teacher {
    numberOfReports: number;
  }

  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  // Task 3,printTeacher
  export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

// implement printTeacher that returns last letter of firstName and full lastName
const printTeacher: printTeacherFunction = (
    firstName: string,
    lastName: string
): string => {
    return `${firstName[0]}. ${lastName}';
};

