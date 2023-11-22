import Link from "next/link";

function NavBarTienda(){
    return ( 
                <div className="NavBarTienda">
                    <Link href="/tienda/electronica">Electrónica</Link>
                    <Link href="/tienda/decoracion">Decoración</Link>
                    <Link href="/tienda/mobiliario">Mobiliario</Link>
                    <Link href="/tienda/libros">Libros</Link>
                </div>
            
    
        )
}
export default NavBarTienda
