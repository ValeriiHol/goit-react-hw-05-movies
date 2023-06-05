import { Link } from 'react-router-dom';
import css from 'components/BackLink/BackLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={css.button_back}>
      {children}
    </Link>
  );
};

export default BackLink;
