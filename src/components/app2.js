import React, { useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import './main.css';
import { useMediaQuery } from 'react-responsive';

export const App = () => {
  const [show, doShow] = useState({
    itemOne: false
  });
  const ourRef = useRef(null);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
    const div1Pos = topPos(ourRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        doShow(state => ({ ...state, itemOne: true }));
        }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (<>
    <Wrapper>
      <Div animate={show.itemOne} ref={ourRef}>
      <section className="aboutme" id="aboutme">
    
  <div className="container">
    <div className="aboutme-details">
      <div className="aboutme-heading">
        { isTabletOrMobile && <> <h1>About Me</h1> </> }
        { isTabletOrMobile && <> <h6>Some words about who I am!.</h6> </> }
      </div>
      { isTabletOrMobile && <> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </> }
      <div className="social-media">
        <ul className="button text-center">
          <li>
            <a href="#" className="icon-link my-auto">
              <i className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="#" className="icon-link my-auto">
              <i className="fab fa-snapchat-square" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      </Div>
    </Wrapper>
  </>);
};

const Div = styled.div`
  height: 900px;
  width: 350px;
  transform: translateX(${({ animate }) => (animate ? "0" : "100vw")});
  transition: transform 1s;
  margin: 10px;
`;

const Wrapper = styled.div`
  margin-top: 2vh;
  align-items: center;
`;

const rootElement = document.getElementById("aboutme");
ReactDOM.render(<App />, rootElement);
