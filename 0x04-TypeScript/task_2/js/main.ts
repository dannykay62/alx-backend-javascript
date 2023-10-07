interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        console.log("Working fro homw");
        return "Working from home";
    }

    getToWork(): string {
        console.log("Getting a coffee break");
        return "Getting a coffee break";
    }

    getCoffeeBreak(): string {
        console.log("Getting a coffee break");
        return "Getting a coffe break";
    }

    workDirectorTasks(): string {
        console.log("Getting to director tasks");
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        console.log("Cannot work from home");
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        console.log("Cannot have a break");
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        console.log("Getting to work");
        return "Getting to work";
    }
}

// Create a function createEmployee
export function createEmployee(salary: string | number): Teacher | Director {
    if (typeof(salary) === "number" && salary < 500) return new Teacher();

    return new Director();
}

// console.log(createEmployee(200));
// Teacher
// console.log(createEmployee(1000));
// Director
// console.log(createEmployee('$500'));
// Director
