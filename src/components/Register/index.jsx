import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { Container, WrapTabs } from "./style";

const Register = () => {
  const onChange = (key) => {
    // console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Sign In`,
      children: <SignIn />,
    },
    {
      key: "2",
      label: `Sign Up`,
      children: <SignUp />,
    },
  ];

  return (
    <Container>
      <WrapTabs defaultActiveKey="1" items={items} onChange={onChange} />
    </Container>
  );
};
export default Register;
