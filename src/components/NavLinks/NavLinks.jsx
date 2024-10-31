import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const NavLinks = ({route}) => {
  return (
    <div>
      <li className='px-4 py-1 lg:py-0 font-medium text-gray-700 hover:bg-emerald-300'>
        <NavLink to={route.path}>{route.name}</NavLink>
      </li>
    </div>
  )
}

NavLinks.propTypes = {
  route: PropTypes.object.isRequired,
};

export default NavLinks
