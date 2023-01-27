export default interface IRegister {
  user: {
    name: string;
    email: string;
    organizationId: string;
    employeeId: string;
    password: string;
    confirm_password: string;
  };
}
