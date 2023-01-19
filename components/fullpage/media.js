import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import Mouse from "../mouse/mouse";
import Section from "../section/section";
import Page from "../page/page";
import Photo from "../photo/photo";
import PortfImg from "../portf-img/portf-img";
import "./fullpage.css";

import { FaJs, FaAngular, FaVuejs, FaAws, FaNodeJs, FaReact, FaPython, FaJira} from 'react-icons/fa';
import { SiDjango, SiFlask, SiTensorflow, SiKeras } from "react-icons/si";

import 'bootstrap/dist/css/bootstrap.css';

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#292c35">
      <Content
        main={
          <div className="container fade-in-image">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 col-xxs-12 text-white d-flex flex-column justify-content-center lead">
                An enthusiastic and highly motivated individual, mastered frontend and backend. Using tech stacks such as MEAN, MERN stacks. <br/>
                Strong background of Javascript, Typescript, React, Node, Angular, Vue, etc.
                A U.S. citizen From Myrtle Beach, SC. Studied at Coastal Carolina University
                Along with a certification from Bottega University for Full-Stack Development.
                I currently reside in Atlanta, GA as a Freelance Full-Stack Engineer.
                Open to continuous long-term contract roles. As well as direct-hire roles. Check me out. 
              </div>
              <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 col-xxs-12">
                <Photo size='450' />
              </div>
            </div>

          </div>
        }
        action={
          <div className="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/page-two");
              }}
            >
              Goto the next page
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

export const Second = withNavigationContext(({ fullpage }) => {
  return (
    <Page>
      <Section wrapper={false} backgroundColor="#4158b4">
        <Content
          main={
            <>
              <Lettering
                title="Construction Bevy: 2022 - Present"
                text={["• Design, implement (write code), and test",
                "• Help to Improve system performance and reliability",
                "• Design client-side and server-side architecture",
                "• Build features and applications with a mobile responsive design",
                "• Test software to ensure responsiveness and efficiency",
                "• Troubleshoot, debug and upgrade software",
                "• Build features and applications with a mobile responsive design"]}
              />
              
            </>
          }

          action={
            <div className="button">
              <AwesomeButton
                size="large"
                onPress={() => {
                  fullpage.navigate("/page-three");
                }}
              >
                Goto the next page
              </AwesomeButton>
            </div>
          }
        />
      </Section>
      <Section backgroundColor="#617be3">
        <Lettering
          title="Lux Boards: 2020 - 2022"
          text={["• Fully Developed E-Commerence Website",
          "• Developed interactive UI/UX using HTML, CSS, and Javascript",
          "• Performing SEO setups, page redirects, and optimizations",
          "• Developed and manage well-functioning databases and applications"]}
        />
      </Section>
    </Page>
  );
});

export const Forth = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#292c35">
      <Content
        main={
          <PortfImg/>
        }
        action={
          <div className="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/page-three");
              }}
            >
              Goto the prev page
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

export const Third = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#ff6f5e">
      {/* <Background src="https://caferati.me/images/series/bojack-0.png" /> */}
      <Content
        main={
          <div className='container' style={{ color: "white", fontSize: "1.5em" }}>
            <div className='row '>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-xxs-12'>
                <div className="d-flex flex-column justify-content-center align-items-center" style={{padding: "0% 20% 0% 20%"}}>
                  <div className="row container-fluid"><div style={{width: "20%"}}><FaJs/></div> <div style={{width:'60%'}}>JavaScript</div> <div style={{width: "20%"}}> 95%</div></div>
                  <div className="row container-fluid"><div style={{width: "20%"}}><FaAngular/></div> <div style={{width:'60%'}}>Angular</div><div style={{width: "20%"}}> 95%</div></div>
                  <div className="row container-fluid"><div style={{width: "20%"}}><FaVuejs/></div> <div style={{width:'60%'}}>Vue</div><div style={{width: "20%"}}> 95%</div></div>
                  <div className="row container-fluid"><div style={{width: "20%"}}><FaAws/></div> <div style={{width:'60%'}}>AWS</div><div style={{width: "20%"}}> 95%</div></div>
                  <div className="row container-fluid"><div style={{width: "20%"}}><FaNodeJs/></div> <div style={{width:'60%'}}>Node.js</div><div style={{width: "20%"}}> 95%</div></div>
                </div>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-xxs-12'>
                <div className="d-flex flex-column justify-content-center align-items-center" style={{padding: "0% 20% 0% 20%"}}>
                  <div className="row container-fluid"><div style={{width: "20%"}}><FaPython/></div> <div style={{width:'60%'}}>Python</div> <div style={{width: "20%"}}> 95%</div></div>
                  <div className="row container-fluid"><div style={{width: "20%"}}><FaJira/></div> <div style={{width:'60%'}}>Jira</div><div style={{width: "20%"}}> 95%</div></div>
                  <div className="row container-fluid"><div style={{width: "20%"}}><SiDjango/></div> <div style={{width:'60%'}}>Django</div><div style={{width: "20%"}}> 95%</div></div>
                  <div className="row container-fluid"><div style={{width: "20%"}}><SiFlask/></div> <div style={{width:'60%'}}>Flask</div><div style={{width: "20%"}}> 95%</div></div>
                  <div className="row container-fluid"><div style={{width: "20%"}}><SiKeras/></div> <div style={{width:'60%'}}>Keras</div><div style={{width: "20%"}}> 95%</div></div>
                </div>
              </div>
            </div>
            
          </div>
        }
        
        action={
          <div className="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/page-four");
              }}
            >
              Goto the next page
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

export const media = [
  {
    slug: "",
    className: "slide page-one",
    children: <Home />
  },
  {
    slug: "page-two",
    className: "sectioned page-two",
    children: <Second />
  },
  {
    slug: "page-three",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "slide page-three",
    children: <Third />
  },
  {
    slug: "page-four",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "slide page-four",
    children: <Forth />
  }
];
