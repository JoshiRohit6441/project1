import { NavLink } from 'react-router-dom';
let Card = ({ img, title, para, link, id }) => {
    return (
        <>
            <div className='cardbody' key={id}>
                <img className='course' src={img} alt="error" />
                <h1 className='title'>{title}</h1>
                <p className='about_course'>{para}</p>
                <button className='cardbtn'>
                    <NavLink className="cardlink" to={link}>Visit Site</NavLink>
                </button>
            </div>
        </>
    )
}
export default Card