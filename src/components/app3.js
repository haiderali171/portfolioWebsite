import React, { useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
export const App3 = () => {
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
      <section className="services" id="services">
  <div className="container">
    <div className="services-heading section-heading">
      <h1>Services</h1>
      <h6>Hello! In The Future</h6>
    </div>
    <div className="my-product text-center">
      <div className="product1">
        <h1>Content Writing</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="product2 text-center">
        <h1>Web Development</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div>
</section>


      </Div>

    </Wrapper>
  </>);
};

const Div = styled.div`
  height: 700px;
  width: 350px;
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 1s;
  margin: 10px;
  margin-top: 125px
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const rootElement = document.getElementById("services");
ReactDOM.render(<App3 />, rootElement);