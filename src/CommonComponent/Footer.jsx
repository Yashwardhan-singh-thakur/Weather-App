import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footMsg">
        <p>
          Made with &nbsp;
          <i className="fa-solid fa-heart"></i>
          &nbsp; by Yashwaradhan
        </p>
      </div>
      <div className="footLink">
        <a href="https://x.com/YashwardhanSt">
          <XIcon className="ftLink" />
        </a>
        <a href="https://www.linkedin.com/in/yashwardhan-singh-thakur-72b992203/">
          <i className="ftLink fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/yashwardhan_singh_thakur/?hl=en">
          <InstagramIcon className="ftLink" />
        </a>
      </div>
    </footer>
  );
}
