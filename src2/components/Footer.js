

// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a
          href="https://www.linkedin.com/in/shivansh-bhardwaj-2a624b200/"
          target="_blank"
          title="Shivansh Bhardwaj's Linkedin Profile"
        >
          Shivansh Bhardwaj
        </a>
        <i className="fa-solid fa-copyright"></i>
        {year}
        <a
          href="https://github.com/iamshivansh2002"
          target="_blank"
          title="Food Nest Github Repository"
        >
          <strong>
            Food<span>Nest</span>
          </strong>
        </a>
      </div>
    );
  };
  
  export default Footer;
  

