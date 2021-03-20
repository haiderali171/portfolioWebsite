import React, { useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const App4 = () => {
  const [show, doShow] = useState({
    itemOne: false
  });
  const ourRef = useRef(null);

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
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="portfolio-heading section-heading">
            <h1>Portfolio</h1>
            <h2>Have A Look!</h2>
          </div>
          <div className="portfolio-item tex">
            <div className="portfolio-img">
              <img src={"/static/images/portitem1.jpeg"} alt="" />
            </div>
            <div className="portfolio-description text-center">
              <h3>Blog, Stories and Content</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="#" className="cta">View details</a>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src={'/static/images/portitem2.jpeg'} alt="" />
            </div>
            <div className="portfolio-description text-center">
              <h3>Websites, Applications and Other Programming Stuff</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="#" className="cta">View details</a>
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
  margin: 5px;
  margin-bottom: 1000px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const rootElement = document.getElementById("portfolio");
ReactDOM.render(<App4 />, rootElement);