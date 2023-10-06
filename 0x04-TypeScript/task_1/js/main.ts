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