import React, { useLayoutEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './hocs/Layout';
import Home from './subcomponents/Home';
import Blog from './subcomponents/Blog';
import BlogDetail from './subcomponents/BlogDetail';
import Category from './subcomponents/Category';
import ReactDOM from "react-dom";
import styled from "styled-components";

export const App = () => {
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
      <section className="blog1" id="blog1">
      <div className="container">
      <div className="blog1-details">
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/blog' component={Blog} />
                {/*   <Route exact path='/category/:id' component={Category} /> */}
                    <Route exact path='/blog/:id' component={BlogDetail} /> 
                </Switch>
            </Layout>
        </Router>
         </div>
         </div>
         </section>
        </Div>
</Wrapper>
</>);
};

const Div = styled.div`
  height: 500px;
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

const rootElement = document.getElementById("aboutme");
ReactDOM.render(<App />, rootElement);


