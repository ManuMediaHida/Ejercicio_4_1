import NavBarTienda from './NavBarTienda';

function layout ({ children }){
  return (
    <div className='menuTienda'>
    
      <NavBarTienda/>
      <div>{children}</div>

    </div>
  );
};

export default layout;
