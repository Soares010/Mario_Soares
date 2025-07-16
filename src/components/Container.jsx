import "../assets/styles/Contact.css";
import "../assets/styles/Projects.css";
import "../assets/styles/About.css";
const Container = ({ children }) => {
  return (
    <>
      <div className="inner-content">{children}</div>
    </>
  );
};

export default Container;
