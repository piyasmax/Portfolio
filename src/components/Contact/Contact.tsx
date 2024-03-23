import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:ghosh.piyas121@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:ghosh.piyas121@gmail.com">ghosh.piyas121@gmail.com</a>
        </div>
        <div>
        <a href="tel:+917908179142"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917908179142">(+91) 7908178142</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}