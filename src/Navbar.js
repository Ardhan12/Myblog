const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Arip Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;

/* contoh kalau ingin membuat kotak di New Blog
 style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}
*/