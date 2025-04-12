
const Navbar = ({nav}) => {
    return (
        <li>
            <a href={nav.path}>{nav.name}</a>
        </li>
    );
};

export default Navbar;