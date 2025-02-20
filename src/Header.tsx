import './Header.css';

function Header() {
    return (
        <>
            <h1>Somya Dwivedi</h1>
            <br />
            <h4>Network Engineer !!</h4>
            <p>Welcome to my portfolio website. Here you will find information about my projects, skills, and experience in the field of network engineering.</p>
            <nav>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Project</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contacts</a></li>
                </ul>
            </nav>
            <section id="about">
                <h2>About Me !!</h2>
                <p>I am a dedicated network engineer with over 5 years of experience in designing, implementing, and managing complex network infrastructures. My passion for technology drives me to continuously learn and adapt to new challenges in the field.</p>
            </section>
            <section id="projects">
                <h2>Projects</h2>
                <ul>
                    <li>Project A - Description of project A.</li>
                    <li>Project B - Description of project B.</li>
                    <li>Project C - Description of project C.</li>
                </ul>
            </section>
            <section id="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Network Design</li>
                    <li>Network Security</li>
                    <li>Routing and Switching</li>
                    <li>Wireless Networking</li>
                </ul>
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <p>If you would like to get in touch, please feel free to reach out via email at somya@example.com or connect with me on LinkedIn.</p>
            </section>
        </>
    );
}

export default Header;
