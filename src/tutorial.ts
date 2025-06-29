type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is an manager on ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} deparatment`
    );
  }
}

const alice: Employee = { id: 1, name: 'alice', department: 'Sales' };
const steve: Employee = { id: 2, name: 'steve', department: 'HR' };

const bob: Manager = { id: 3, name: 'bobo', employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(bob);
