import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    let linknames = props.links.map(function (name, index) {
        return <li key={index} className="nav-item">
            <a className="nav-link" href="/">{name}</a>
        </li>;
    });
    return (
        <>
            {/* <div className="linecool"></div> */}
            <nav className={`navbar bg-${props.mode} navbar-expand-lg bg-body-tertiary`} data-bs-theme={`${props.mode}`}>

                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {linknames}
                        </ul>
                        {
                            props.search === 1 &&
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        }
<div className="form-check form-switch mx-5">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`}  htmlFor="flexSwitchCheckDefault">{props.modeMsg}</label>
</div>
                    </div>
                </div>
            </nav>
        </>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    search: PropTypes.number,
    links: PropTypes.array.isRequired
};
Navbar.defaultProps = {
    title: 'Title Here',
    search: 1,
    links: ["Home"]
};