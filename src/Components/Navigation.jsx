import React from 'react'
import '../styles/navigation.css';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Navigation() {
    return (
        <footer className="footer-container">
            <p className="footer-text">
                Made by <span>Kartik Dhumal</span>
            </p>
            <div className="social-links">
                <a
                    href="https://www.linkedin.com/in/kartikdhumal/"
                    className="social-link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin className="social-icon" />
                </a>

                <a
                    href="https://github.com/kartikdhumal"
                    className="social-link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub className="social-icon" />
                </a>

                <a
                    href="mailto:kartikdhumal24@gmail.com"
                    className="social-link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaEnvelope className="social-icon" />
                </a>

                <a
                    href="https://www.instagram.com/kartik_dhumal._/"
                    className="social-link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagram className="social-icon" />
                </a>

            </div>
        </footer>
    )
}

export default Navigation
