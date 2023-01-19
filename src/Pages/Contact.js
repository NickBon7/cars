import "./Contact.css";
import { Zoom } from "react-reveal";

function Contact() {
  return (
    <div className="contact">
      <div className="findUs">
        <Zoom top cascade>
          You will find us at Glasgow, <br />
          Carstreet 12, G4AXW <br />
          <a href="mailto:carnick@gmail.com?body=My custom mail body">
            Send us an E-Mail
          </a>
          <br />
          or call us at 07987654321
        </Zoom>
      </div>
    </div>
  );
}

export default Contact;
