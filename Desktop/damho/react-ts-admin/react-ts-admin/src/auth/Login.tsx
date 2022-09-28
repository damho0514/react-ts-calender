import { styled } from '@mui/material/styles';
import { Card, Avatar } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LoginForm from './LoginForm';

const PREFIX = 'RaLogin';
export const LoginClasses = {
  card: `${PREFIX}-card`,
  avatar: `${PREFIX}-avatar`,
  icon: `${PREFIX}-icon`,
};

const Root = styled('div', {
  name: PREFIX,
  // overridesResolver: (props, styles) => styles.root,
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  height: '1px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: 'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',

  [`& .${LoginClasses.card}`]: {
    minWidth: 300,
    marginTop: '6em',
  },
  [`& .${LoginClasses.avatar}`]: {
    margin: '1em',
    display: 'flex',
    justifyContent: 'center',
  },
  [`& .${LoginClasses.icon}`]: {
    // backgroundColor: theme.palette.secondary[500],
  },
}));
export function Login() {
  return (
    <Root>
      <Card className={LoginClasses.card}>
        <div className={LoginClasses.avatar}>
          <Avatar className={LoginClasses.icon}>
            <LockIcon />
          </Avatar>
        </div>
      </Card>
    </Root>
  );
}

Login.defaultProps = {
  children: <LoginForm />,
};
export default Login;
