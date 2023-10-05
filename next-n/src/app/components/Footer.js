import styles from "@/app/styles/footer.module.css"; // Import the CSS module

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-contents"]}>
          <div className={styles["footer-logo"]}>
            <Link href="/">
              <img src="" alt="" />
            </Link>
          </div>
          <div className={styles["footer-links"]}>
            <p>Quick Links</p>
            <div className={styles["Quick-links"]}>
              <a href="/">Home</a>
              <a href="mailto:khadkarupesh818@gmail.com">Support</a>
              <a href="mailto:khadkarupesh818@gmail.com">Report an issue</a>
            </div>
          </div>
          <div className={styles["footer-sites"]}>
            <p>Find me on</p>
            <div className={styles["social-media"]}>
              <a href="#" target="_blank">
                <FacebookIcon />
              </a>
              <a href="#" target="_blank">
                <InstagramIcon />
              </a>
              <a href="#" target="_blank">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles["copyright-container"]}>
          <div className={styles["copyright-items"]}>
            <div className={styles["footer-copyright-l"]}>
              Copyright @2023 Onlinestore
            </div>
            <div className={styles["footer-copyright-r"]}>
              <Link href="/terms">
                <p>Terms of Use</p>
              </Link>
              <Link href="/privacy">
                <p>Privacy Policy</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
