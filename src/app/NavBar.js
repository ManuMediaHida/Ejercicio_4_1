import Link from "next/link";

function NavBar(){
    return (
        <nav className="NavBar">
            <div>  <Link href="/">Inicio</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/blog">Blog</Link></div>
          
            <Link href="/about">Acerca de</Link>
            <Link href="/registro">Registrarme</Link>
        </nav>
        )
}
export default NavBar
