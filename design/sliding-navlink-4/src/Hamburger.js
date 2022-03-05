export default function Hamburger(p) {
  return (
    <svg
      onClick={p.onClick}
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='currentColor'
      className='bi bi-list'
      viewBox='0 0 16 16'
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '40px',
      }}
    >
      <path
        fillRule='evenodd'
        fill='#F7F7F7'
        d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
      />
    </svg>
  );
}
