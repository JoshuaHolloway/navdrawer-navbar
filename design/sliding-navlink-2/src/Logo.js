import logo from './Elevate_web_logo_2.png';

export default function Logo() {
  return (
    <img
      src={logo}
      alt='logo'
      height='35%'
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '40px',
      }}
    />
  );
}
