import Link from "next/link";
import css from "./style/navigation.module.css";
import navigationLink from "./NavigationList";
// import images

// icons
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [show, setShow] = useState(false);
  const [upArrow, setUpArrow] = useState(false);
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  const NavbarController = () => {
    window.scrollY > 300 ? setShow(true) : setShow(false);
    window.scrollY > 400 ? setUpArrow(true) : setUpArrow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", NavbarController);
    return () => {
      window.removeEventListener("scroll", NavbarController);
    };
  }, []);

  return (
    <>
      <nav
        className={
          `flex flex-row justify-between items-center ${
            show && css.nav__fixed
          } ` + css.navigation
        }
      >
        <div className={"flex flex-row gap-3"}>
          <div className={css.nav__logo}>
            <svg
              width="211"
              height="25"
              viewBox="0 0 211 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8438 21.2344C19.0833 21.474 19.3021 21.651 19.5 21.7656C19.6979 21.8698 19.8542 21.9271 19.9688 21.9375C20.0833 21.9479 20.2448 21.9531 20.4531 21.9531C20.6719 21.9531 20.9688 21.8542 21.3438 21.6562L21.8438 22.7812C21.1458 23.6458 20.2865 24.2552 19.2656 24.6094C18.8385 24.7552 18.4948 24.8281 18.2344 24.8281C17.2448 24.8281 16.4115 24.5781 15.7344 24.0781C15.0573 23.5781 14.474 23 13.9844 22.3438C13.4948 21.6875 13.0312 20.9375 12.5938 20.0938C11.7812 18.5521 11.1562 16.9844 10.7188 15.3906C9.78125 15.5156 8.75521 15.5781 7.64062 15.5781V19.0156C7.64062 19.8594 7.70312 21.2083 7.82812 23.0625L7.89062 24C7.00521 24.2708 5.94792 24.4062 4.71875 24.4062C3.5 24.4062 2.72396 24.2708 2.39062 24C2.69271 21.8021 2.84375 20.125 2.84375 18.9688V6.4375C2.84375 5.51042 2.76042 4.91667 2.59375 4.65625C2.42708 4.39583 2.31771 4.22917 2.26562 4.15625C2.21354 4.07292 2.11979 3.99479 1.98438 3.92188C1.85938 3.83854 1.77083 3.78125 1.71875 3.75C1.60417 3.69792 1.42188 3.63021 1.17188 3.54688C1.01562 3.14062 0.9375 2.73958 0.9375 2.34375C0.9375 1.9375 0.942708 1.6875 0.953125 1.59375C3.74479 1.16667 6.82812 0.953125 10.2031 0.953125H11.0938C13.3125 0.994792 15.2083 1.54167 16.7812 2.59375C17.5521 3.11458 18.1667 3.79167 18.625 4.625C19.0833 5.45833 19.3125 6.40104 19.3125 7.45312C19.3125 9.20312 18.8906 10.6979 18.0469 11.9375C17.2135 13.1667 15.8333 14.0938 13.9062 14.7188C14.7188 15.8125 15.401 16.75 15.9531 17.5312C16.5052 18.3125 16.9531 18.9323 17.2969 19.3906C17.6406 19.849 17.9219 20.2083 18.1406 20.4688C18.3698 20.7292 18.6042 20.9844 18.8438 21.2344ZM14.6875 7.48438C14.6875 4.73438 13.0521 3.35938 9.78125 3.35938C9.16667 3.35938 8.45312 3.40104 7.64062 3.48438V13.1562C11.3281 13 13.5312 12.0208 14.25 10.2188C14.5417 9.45833 14.6875 8.54688 14.6875 7.48438ZM39.2031 18.6562C39.9635 18.6562 40.5052 18.9635 40.8281 19.5781C41.151 20.1927 41.3125 21.099 41.3125 22.2969C41.3125 23.4948 41.2292 24.1667 41.0625 24.3125C37.375 24.1562 33.9948 24.0677 30.9219 24.0469C27.8594 24.026 25.8958 24.0104 25.0312 24C25.3333 21.5104 25.4844 18.7604 25.4844 15.75V5.625C25.4844 4.71875 25.3438 4.13542 25.0625 3.875C24.9375 3.76042 24.7552 3.66146 24.5156 3.57812C24.3594 3.36979 24.2812 3.03646 24.2812 2.57812C24.2812 2.10938 24.2969 1.78125 24.3281 1.59375C25.2552 1.58333 26.5573 1.57292 28.2344 1.5625C29.9115 1.55208 31.2083 1.54167 32.125 1.53125C34.6979 1.5 37.6771 1.41667 41.0625 1.28125C41.2292 1.42708 41.3125 2.09896 41.3125 3.29688C41.3125 4.49479 41.151 5.40104 40.8281 6.01562C40.5052 6.63021 39.901 6.9375 39.0156 6.9375C38.1302 6.9375 37.5104 6.66146 37.1562 6.10938V4.21875C34.1146 4.07292 31.6927 4 29.8906 4C30.151 5.14583 30.2812 6.55208 30.2812 8.21875C30.2812 8.34375 30.2812 8.46354 30.2812 8.57812V11.4844L37 11.1406C37.1667 11.3385 37.25 11.7396 37.25 12.3438C37.25 12.9375 37.1979 13.5469 37.0938 14.1719C36.5208 14.2552 35.7031 14.2969 34.6406 14.2969C33.5885 14.2969 32.1354 14.1927 30.2812 13.9844V17.0312C30.2812 17.1458 30.2812 17.2656 30.2812 17.3906C30.2812 19.0677 30.151 20.4688 29.8906 21.5938C31.6927 21.5938 34.1146 21.5208 37.1562 21.375V19.4844C37.3333 19.1406 37.7396 18.8958 38.375 18.75C38.625 18.6875 38.901 18.6562 39.2031 18.6562ZM60.3438 2.46875C60.6771 2.89583 60.9062 3.32812 61.0312 3.76562C61.1667 4.20312 61.3385 5.31771 61.5469 7.10938C61.7656 8.89062 61.9896 11.026 62.2188 13.5156C62.4479 16.0052 62.6354 17.9323 62.7812 19.2969C62.9271 20.6615 63.1562 22.2188 63.4688 23.9688C62.7188 24.2083 61.8125 24.3281 60.75 24.3281C59.6979 24.3281 58.9583 24.2083 58.5312 23.9688C58.0938 22.7188 57.7656 20.2448 57.5469 16.5469L51.1719 16.25C50.2031 21.4583 48.5208 24.2135 46.125 24.5156C46.0208 24.526 45.9219 24.5312 45.8281 24.5312C45.099 24.5312 44.4323 24.3125 43.8281 23.875C43.224 23.4271 42.9219 22.8906 42.9219 22.2656C43.7865 21.6823 44.5833 20.8698 45.3125 19.8281C46.0521 18.7865 46.6615 17.6719 47.1406 16.4844C47.6302 15.2865 48.0521 14.0208 48.4062 12.6875C49.0521 10.1771 49.375 7.84375 49.375 5.6875C49.375 4.94792 49.2865 4.40104 49.1094 4.04688C48.9323 3.69271 48.5625 3.47396 48 3.39062C47.8333 3.18229 47.75 2.8125 47.75 2.28125C47.75 1.75 47.7708 1.41667 47.8125 1.28125C50.7188 1.4375 54.4948 1.54167 59.1406 1.59375C59.6198 1.73958 60.0208 2.03125 60.3438 2.46875ZM57.375 14.1719C57.3229 13.0677 57.2656 11.6771 57.2031 10C57.1406 8.32292 57.099 7.28646 57.0781 6.89062C57.0573 6.48438 57.026 6.10417 56.9844 5.75C56.9427 5.38542 56.901 5.125 56.8594 4.96875C56.8177 4.8125 56.75 4.67188 56.6562 4.54688C56.5312 4.36979 56.2135 4.25 55.7031 4.1875C55.2031 4.125 54.0365 4.09375 52.2031 4.09375C52.2031 5.45833 52.125 7.14583 51.9688 9.15625C51.8229 11.1667 51.6771 12.7448 51.5312 13.8906H52.125C53.9167 13.8906 55.6667 13.9844 57.375 14.1719ZM68.9062 19.5156L68.875 6.4375C68.875 5.125 68.4948 4.28125 67.7344 3.90625C67.6406 3.85417 67.4896 3.79688 67.2812 3.73438C67.0833 3.67188 66.9635 3.63021 66.9219 3.60938C66.7656 3.40104 66.6875 3.0625 66.6875 2.59375C66.6875 2.11458 66.7031 1.78125 66.7344 1.59375C68.0052 1.33333 69.2812 1.20312 70.5625 1.20312C71.8542 1.20312 72.6979 1.21875 73.0938 1.25C73.5 1.27083 73.7188 1.29167 73.75 1.3125C73.8958 1.375 73.9583 1.58854 73.9375 1.95312L73.7031 8.03125V19.1719C73.7031 19.8698 73.7292 20.3906 73.7812 20.7344C73.8333 21.0781 73.9479 21.3438 74.125 21.5312C74.8229 21.4792 75.875 21.4062 77.2812 21.3125C78.6875 21.2188 79.7917 21.1354 80.5938 21.0625L80.8125 19.1094C80.9479 18.9115 81.1979 18.7292 81.5625 18.5625C81.9271 18.3854 82.3802 18.2969 82.9219 18.2969C83.474 18.2969 83.901 18.4531 84.2031 18.7656C84.7344 19.3177 85 20.5417 85 22.4375C85 23.2396 84.9062 23.75 84.7188 23.9688C83.8229 23.9896 79.8333 24 72.75 24H69.7031C69.4948 23.9271 69.3073 23.6719 69.1406 23.2344C68.9844 22.7865 68.9062 22.1667 68.9062 21.375V19.5156Z"
                fill="white"
              />
              <path
                d="M102.672 18.6562C103.432 18.6562 103.974 18.9635 104.297 19.5781C104.62 20.1927 104.781 21.099 104.781 22.2969C104.781 23.4948 104.698 24.1667 104.531 24.3125C100.844 24.1562 97.4635 24.0677 94.3906 24.0469C91.3281 24.026 89.3646 24.0104 88.5 24C88.8021 21.5104 88.9531 18.7604 88.9531 15.75V5.625C88.9531 4.71875 88.8125 4.13542 88.5312 3.875C88.4062 3.76042 88.224 3.66146 87.9844 3.57812C87.8281 3.36979 87.75 3.03646 87.75 2.57812C87.75 2.10938 87.7656 1.78125 87.7969 1.59375C88.724 1.58333 90.026 1.57292 91.7031 1.5625C93.3802 1.55208 94.6771 1.54167 95.5938 1.53125C98.1667 1.5 101.146 1.41667 104.531 1.28125C104.698 1.42708 104.781 2.09896 104.781 3.29688C104.781 4.49479 104.62 5.40104 104.297 6.01562C103.974 6.63021 103.37 6.9375 102.484 6.9375C101.599 6.9375 100.979 6.66146 100.625 6.10938V4.21875C97.5833 4.07292 95.1615 4 93.3594 4C93.6198 5.14583 93.75 6.55208 93.75 8.21875C93.75 8.34375 93.75 8.46354 93.75 8.57812V11.4844L100.469 11.1406C100.635 11.3385 100.719 11.7396 100.719 12.3438C100.719 12.9375 100.667 13.5469 100.562 14.1719C99.9896 14.2552 99.1719 14.2969 98.1094 14.2969C97.0573 14.2969 95.6042 14.1927 93.75 13.9844V17.0312C93.75 17.1458 93.75 17.2656 93.75 17.3906C93.75 19.0677 93.6198 20.4688 93.3594 21.5938C95.1615 21.5938 97.5833 21.5208 100.625 21.375V19.4844C100.802 19.1406 101.208 18.8958 101.844 18.75C102.094 18.6875 102.37 18.6562 102.672 18.6562ZM107.703 19.6562C107.703 18.4375 108.401 17.8281 109.797 17.8281C110.505 17.8281 111.203 18.0104 111.891 18.375C111.891 19.6979 112.167 20.7135 112.719 21.4219C113.271 22.1198 114.214 22.4688 115.547 22.4688C116.891 22.4688 117.875 22.2135 118.5 21.7031C119.125 21.1927 119.438 20.3802 119.438 19.2656C119.438 18.0781 118.979 17.0625 118.062 16.2188C117.312 15.5208 116.443 14.9167 115.453 14.4062C114.464 13.8958 113.667 13.4792 113.062 13.1562C112.458 12.8229 111.88 12.4583 111.328 12.0625C110.786 11.6667 110.302 11.2396 109.875 10.7812C108.958 9.79167 108.5 8.60938 108.5 7.23438C108.5 5.84896 108.859 4.68229 109.578 3.73438C110.984 1.88021 113.271 0.953125 116.438 0.953125C118.875 0.953125 120.734 1.45833 122.016 2.46875C123.182 3.39583 123.766 4.42708 123.766 5.5625C123.766 6.09375 123.583 6.53125 123.219 6.875C122.865 7.21875 122.312 7.39062 121.562 7.39062C120.812 7.39062 120.042 7.19792 119.25 6.8125C119.25 6.73958 119.25 6.67188 119.25 6.60938C119.25 5.45312 118.99 4.52604 118.469 3.82812C117.958 3.13021 117.182 2.78125 116.141 2.78125C115.099 2.78125 114.271 3.07292 113.656 3.65625C113.052 4.23958 112.75 5.09896 112.75 6.23438C112.75 7.21354 113.229 8.07292 114.188 8.8125C114.854 9.33333 115.729 9.86458 116.812 10.4062C117.896 10.9479 118.75 11.3906 119.375 11.7344C120.01 12.0677 120.615 12.4479 121.188 12.875C121.76 13.2917 122.266 13.75 122.703 14.25C123.661 15.3333 124.141 16.5833 124.141 18C124.141 19.4062 123.76 20.599 123 21.5781C122.24 22.5469 121.224 23.2865 119.953 23.7969C118.682 24.2969 117.401 24.5469 116.109 24.5469C114.828 24.5469 113.745 24.4427 112.859 24.2344C111.974 24.0365 111.224 23.7708 110.609 23.4375C109.995 23.0938 109.464 22.7083 109.016 22.2812C108.141 21.4479 107.703 20.5729 107.703 19.6562ZM147.047 5.0625C146.932 5.78125 146.724 6.29688 146.422 6.60938C146.13 6.92188 145.615 7.07812 144.875 7.07812C144.135 7.07812 143.526 6.80729 143.047 6.26562V4.0625C141.828 4.15625 140.438 4.21875 138.875 4.25V17.7344C138.875 20.1302 139.005 22.2188 139.266 24C138.453 24.2708 137.427 24.4062 136.188 24.4062C134.958 24.4062 134.12 24.2708 133.672 24L134.078 18.9688V4.25L129.641 4.09375V6.26562C129.505 6.46354 129.255 6.65104 128.891 6.82812C128.526 6.99479 128.068 7.07812 127.516 7.07812C126.964 7.07812 126.536 6.92188 126.234 6.60938C125.943 6.29688 125.734 5.78646 125.609 5.07812C125.495 4.36979 125.438 3.63542 125.438 2.875C125.438 2.10417 125.536 1.61458 125.734 1.40625C128.37 1.53125 131.714 1.59375 135.766 1.59375C139.818 1.59375 143.542 1.53125 146.938 1.40625C147.135 1.61458 147.234 2.09375 147.234 2.84375C147.234 3.59375 147.172 4.33333 147.047 5.0625ZM165.312 2.46875C165.646 2.89583 165.875 3.32812 166 3.76562C166.135 4.20312 166.307 5.31771 166.516 7.10938C166.734 8.89062 166.958 11.026 167.188 13.5156C167.417 16.0052 167.604 17.9323 167.75 19.2969C167.896 20.6615 168.125 22.2188 168.438 23.9688C167.688 24.2083 166.781 24.3281 165.719 24.3281C164.667 24.3281 163.927 24.2083 163.5 23.9688C163.062 22.7188 162.734 20.2448 162.516 16.5469L156.141 16.25C155.172 21.4583 153.49 24.2135 151.094 24.5156C150.99 24.526 150.891 24.5312 150.797 24.5312C150.068 24.5312 149.401 24.3125 148.797 23.875C148.193 23.4271 147.891 22.8906 147.891 22.2656C148.755 21.6823 149.552 20.8698 150.281 19.8281C151.021 18.7865 151.63 17.6719 152.109 16.4844C152.599 15.2865 153.021 14.0208 153.375 12.6875C154.021 10.1771 154.344 7.84375 154.344 5.6875C154.344 4.94792 154.255 4.40104 154.078 4.04688C153.901 3.69271 153.531 3.47396 152.969 3.39062C152.802 3.18229 152.719 2.8125 152.719 2.28125C152.719 1.75 152.74 1.41667 152.781 1.28125C155.688 1.4375 159.464 1.54167 164.109 1.59375C164.589 1.73958 164.99 2.03125 165.312 2.46875ZM162.344 14.1719C162.292 13.0677 162.234 11.6771 162.172 10C162.109 8.32292 162.068 7.28646 162.047 6.89062C162.026 6.48438 161.995 6.10417 161.953 5.75C161.911 5.38542 161.87 5.125 161.828 4.96875C161.786 4.8125 161.719 4.67188 161.625 4.54688C161.5 4.36979 161.182 4.25 160.672 4.1875C160.172 4.125 159.005 4.09375 157.172 4.09375C157.172 5.45833 157.094 7.14583 156.938 9.15625C156.792 11.1667 156.646 12.7448 156.5 13.8906H157.094C158.885 13.8906 160.635 13.9844 162.344 14.1719ZM191.484 5.0625C191.37 5.78125 191.161 6.29688 190.859 6.60938C190.568 6.92188 190.052 7.07812 189.312 7.07812C188.573 7.07812 187.964 6.80729 187.484 6.26562V4.0625C186.266 4.15625 184.875 4.21875 183.312 4.25V17.7344C183.312 20.1302 183.443 22.2188 183.703 24C182.891 24.2708 181.865 24.4062 180.625 24.4062C179.396 24.4062 178.557 24.2708 178.109 24L178.516 18.9688V4.25L174.078 4.09375V6.26562C173.943 6.46354 173.693 6.65104 173.328 6.82812C172.964 6.99479 172.505 7.07812 171.953 7.07812C171.401 7.07812 170.974 6.92188 170.672 6.60938C170.38 6.29688 170.172 5.78646 170.047 5.07812C169.932 4.36979 169.875 3.63542 169.875 2.875C169.875 2.10417 169.974 1.61458 170.172 1.40625C172.807 1.53125 176.151 1.59375 180.203 1.59375C184.255 1.59375 187.979 1.53125 191.375 1.40625C191.573 1.61458 191.672 2.09375 191.672 2.84375C191.672 3.59375 191.609 4.33333 191.484 5.0625ZM208.703 18.6562C209.464 18.6562 210.005 18.9635 210.328 19.5781C210.651 20.1927 210.812 21.099 210.812 22.2969C210.812 23.4948 210.729 24.1667 210.562 24.3125C206.875 24.1562 203.495 24.0677 200.422 24.0469C197.359 24.026 195.396 24.0104 194.531 24C194.833 21.5104 194.984 18.7604 194.984 15.75V5.625C194.984 4.71875 194.844 4.13542 194.562 3.875C194.438 3.76042 194.255 3.66146 194.016 3.57812C193.859 3.36979 193.781 3.03646 193.781 2.57812C193.781 2.10938 193.797 1.78125 193.828 1.59375C194.755 1.58333 196.057 1.57292 197.734 1.5625C199.411 1.55208 200.708 1.54167 201.625 1.53125C204.198 1.5 207.177 1.41667 210.562 1.28125C210.729 1.42708 210.812 2.09896 210.812 3.29688C210.812 4.49479 210.651 5.40104 210.328 6.01562C210.005 6.63021 209.401 6.9375 208.516 6.9375C207.63 6.9375 207.01 6.66146 206.656 6.10938V4.21875C203.615 4.07292 201.193 4 199.391 4C199.651 5.14583 199.781 6.55208 199.781 8.21875C199.781 8.34375 199.781 8.46354 199.781 8.57812V11.4844L206.5 11.1406C206.667 11.3385 206.75 11.7396 206.75 12.3438C206.75 12.9375 206.698 13.5469 206.594 14.1719C206.021 14.2552 205.203 14.2969 204.141 14.2969C203.089 14.2969 201.635 14.1927 199.781 13.9844V17.0312C199.781 17.1458 199.781 17.2656 199.781 17.3906C199.781 19.0677 199.651 20.4688 199.391 21.5938C201.193 21.5938 203.615 21.5208 206.656 21.375V19.4844C206.833 19.1406 207.24 18.8958 207.875 18.75C208.125 18.6875 208.401 18.6562 208.703 18.6562Z"
                fill="#FE0808"
              />
            </svg>
          </div>

          <div className={"col-span-1 " + css.nav__link__list}>
            {navigationLink.map(({ icon, name, path }, ind) => {
              return (
                <Link href={path} key={ind}>
                  <a className={css.nav__link}>{name}</a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={css.nav__btn}>
          <Link href={"/"}>
            <a>Log In</a>
          </Link>
          <Link href={"/"}>
            <a>Sign In</a>
          </Link>
        </div>
      </nav>
      <div
        className={css.buttom__to__top + ` ${upArrow && css.up__btn_show}`}
        onClick={scrollUp}
      >
        <ArrowUpwardOutlinedIcon className={css.up__arrow} />
      </div>
    </>
  );
}
