import { NavLink } from "react-router-dom";
import logo from '../assets/Pickleball Logo.png';

function Navbar () {
    return (
        <nav style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="bg-[#00205b] px-6 py-2 flex items-center gap-6">
            <NavLink to="/">
                <img src={logo} alt="MU Pickleball" className="h-12" />
            </NavLink>
            
            <div className="flex gap-2">
               {['/', '/about', '/schedule'].map((path, i) => (
                <NavLink
                    key={path}
                    to={path}
                    className="px-4 py-2 rounded text-sm font-semibold tracking-wide transition-colors text-[#F7D417] hover:bg-[#F7D417] hover:text-[#00205b]"
                >
                    {['Home', 'About', 'Schedule'][i]}
                </NavLink>
            ))}
                <a
                href='https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=aC_jqy3HDUK1vXUMY6Jo5AYqVWlnQkZEnh4nQelvlVZUN1RGSUVUU01LVEMxTjdFSkpRN0E3UTc5Ry4u'
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded text-sm font-semibold tracking-wide transition-colors text-[#F7D417] hover:bg-[#F7D417] hover:text-[#00205b]"
                >
                Sign Up
                </a>
            </div>
        </nav>
    );
}

export default Navbar;