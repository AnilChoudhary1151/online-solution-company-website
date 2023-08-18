import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "./Banner";
import blob1 from '../../assets/images/blobanimation.svg'
import blob2 from '../../assets/images/blobanimation2.svg'
import blob3 from '../../assets/images/blobanimation3.svg'

export default function Top() {
  return (
    <Container className="wrapper">
      <div className="comp1 flex a-center j-center flex-col" id="topArrow">
        <div className="title1 flex flex-col a-center">
          <span className="title1-text">Dream .</span>
          <span className="title1-text">money. Disrupt.</span>
        </div>

        <div className="text1">
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </div>

        <Link className="btn1 flex a-center j-center" to="/">
          <div className="btn-text1">See Plans</div>
        </Link>

      </div>

      <div className="comp2">
        <div className="title2">
          People Trusts
        </div>

        <div className="stats2">

          
          <div className="blob-container flex">

          <div className="flex a-center j-center">
            <img className="blob-ring" src={blob1} alt="" />
            <div className="blob-text">20+</div>
            <div className="blob-title">Projects Launched</div>
          </div>

          <div className="flex a-center j-center">
            <img className="blob-ring" src={blob2} alt="" />
            <div className="blob-text">2+</div>
            <div className="blob-title">Years of Experience</div>
          </div>

          <div className="flex a-center j-center">
            <img className="blob-ring" src={blob3} alt="" />
            <div className="blob-text">98+</div>
            <div className="blob-title">Client Retention</div>
          </div>
          </div>
        </div>
        <div className="comp3 flex a-center j-center flex-col" id="bannerportfolio">
          <div className="title3" >
            Take a look at our <span className="span3">portfolio</span>
          </div>

          <Banner />
</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .flex {
    display: flex;
  }
  .a-center {
    align-items: center;
  }
  .j-center {
    justify-content: center;
  }
  .flex-col {
    flex-direction: column;
  }
  .j-between {
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }

  .comp1 {
    padding-top: 195px;
  }
  .blob-container{
    gap: 30px;
  }
  .blob-ring{
    width: 400px;
    /* position: absolute; */
  }
  .blob-title {
    position: absolute;
    padding-top: 370px;
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 37px;
  }
  .blob-text {
    background-color:white;
    position: absolute;
    text-align: center;
    font-family: Poppins;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: black;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .ellipse34 {
    position: absolute;
    left: -50px;
    top: 550px;
    width: 230px;
    z-index: -1;
    pointer-events: none;
  }
  .ellipse35 {
    position: absolute;
    right: -10px;
    top: 160px;
    z-index: -9;
    width: 230px;
    pointer-events: none;
  }
  .title1 {
    max-width: 981px;
    background-color: white;
  }

  .title1-text {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 96px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .text1 {
    display: flex;
    max-width: 981px;
    color: #000;
    background-color: white;
    text-align: center;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 26px;
    margin-bottom: 49px;
    opacity: 0.7;
  }

  .btn1 {
    width: 220px;
    height: 75px;
    border-radius: 60px;
    background: linear-gradient(270deg, lightblue 0%, blue 100%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 246px;
  }

  .btn-text1 {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .title2 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 145px;
  }

  .title2-span {
    background: black;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Poppins;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .stats2 {
    /* gap: 155px; */
    padding: 32px 32px;
    /* width: 300px; */
    padding-bottom: 117px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .red-ring {
    width: 300px;
    height: 300px;
    border-radius: 300px;
    opacity: 0.8;
    background: linear-gradient(180deg, #b20000 0%, #800 100%);
  }

  .white-ring {
    width: 250px;
    height: 250px;
    border-radius: 100%;
    background-color: #fff;
  }

  .ring-text-left {
    text-align: center;
    font-family: Poppins;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: linear-gradient(90deg, #b20000 0%, #800 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ring-text-right {
    text-align: center;
    font-family: Poppins;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: linear-gradient(180deg, #b20000 0%, #800 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .stats-txt {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 37px;
  }

  .band4 {
    height: 278px;
    width: 100%;
    background: #d9d9d9;
    margin-bottom: 202px;
    position: relative;
  }

  .title3 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 4rem;
    margin-top: 6rem;
  }

  .span3 {
    background: black;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Poppins;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .btn3 {
    margin-top: 61px;
    width: 260px;
    height: 75px;
    flex-shrink: 0;
    border-radius: 60px;
    background: #1e1e1e;
  }

  .btn-text3 {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  /* ----------------------------------------------------------------------media ------------------------------------------------------------------------ */

  @media (max-width: 1025px) {
    .comp1 {
      padding-top: 195px;
    }
    .ellipse34 {
      left: -50px;
      top: 550px;
      width: 190px;
    }
    .ellipse35 {
      right: -90px;
      top: 260px;
      width: 190px;
    }
    .title1 {
      max-width: 920px;
    }

    .title1-text {
      font-size: 86px;
    }

    .text1 {
      max-width: 735px;
      font-size: 18px;
      margin-top: 26px;
      margin-bottom: 80px;
    }

    .btn1 {
      width: 210px;
      height: 70px;
    }

    .btn-text1 {
      font-size: 22px;
    }

    .title2 {
      font-size: 40px;
      margin-bottom: 145px;
    }

    .title2-span {
      font-size: 40px;
    }

    .stats2 {
      padding: 32px 32px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .red-ring {
      width: 130px;
      height: 130px;
    }

    .white-ring {
      width: 105px;
      height: 105px;
    }

    .ring-text-left {
      font-size: 35px;
    }

    .ring-text-right {
      font-size: 45px;
    }

    .stats-txt {
      font-size: 20px;
      margin-top: 37px;
    }

    .band4 {
      height: 140px;
      width: 100%;
      margin-bottom: 102px;
    }

    .title3 {
      font-size: 40px;
      padding-bottom: 90px;
    }

    .span3 {
      font-size: 40px;
    }

    .btn3 {
      margin-top: 61px;
      width: 250px;
      height: 70px;
    }

    .btn-text3 {
      font-size: 22px;
    }
  }
  @media (max-width: 770px) {
    .comp1 {
      padding-top: 195px;
    }
    .ellipse34 {
      left: -50px;
      top: 500px;
      width: 120px;
    }
    .ellipse35 {
      right: -90px;
      top: 220px;
      width: 140px;
    }
    .title1 {
      max-width: 700px;
    }

    .title1-text {
      font-size: 60px;
    }

    .text1 {
      max-width: 700px;
      font-size: 18px;
      margin-top: 26px;
      margin-bottom: 60px;
    }

    .btn1 {
      width: 210px;
      height: 70px;
    }

    .btn-text1 {
      font-size: 22px;
    }

    .title2 {
      font-size: 40px;
      margin-bottom: 145px;
    }

    .title2-span {
      font-size: 40px;
    }

    .stats2 {
      padding: 32px 32px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .red-ring {
      width: 130px;
      height: 130px;
    }

    .white-ring {
      width: 105px;
      height: 105px;
    }

    .ring-text-left {
      font-size: 35px;
    }

    .ring-text-right {
      font-size: 45px;
    }

    .stats-txt {
      font-size: 20px;
      margin-top: 37px;
    }

    .band4 {
      height: 140px;
      margin-bottom: 102px;
    }

    .title3 {
      font-size: 40px;
      padding-bottom: 90px;
    }

    .span3 {
      font-size: 40px;
    }

    .btn3 {
      margin-top: 61px;
      width: 250px;
      height: 70px;
    }

    .btn-text3 {
      font-size: 22px;
    }
  }
  @media (max-width: 430px) {
    .comp1 {
      padding-top: 195px;
    }
    .ellipse34 {
      left: -50px;
      top: 400px;
      width: 80px;
    }
    .ellipse35 {
      right: -50px;
      top: 180px;
      width: 80px;
    }
    .title1 {
      max-width: 264px;
    }

    .title1-text {
      font-size: 28px;
    }

    .text1 {
      max-width: 335px;
      font-size: 12px;
      margin-top: 26px;
      margin-bottom: 40px;
    }

    .btn1 {
      width: 126px;
      height: 43px;
    }

    .btn-text1 {
      font-size: 14px;
    }

    .comp2{
      margin-top: -90px;
    }
    .title2 {
      font-size: 24px;
      margin-bottom: 80px;
    }

    .title2-span {
      font-size: 24px;
    }

    .stats2 {
      padding: 32px 32px;
      display: flex;
    }

    .red-ring {
      width: 70px;
      height: 70px;
    }

    .white-ring {
      width: 50px;
      height: 50px;
    }

    .ring-text-left {
      font-size: 15px;
    }

    .ring-text-right {
      font-size: 15px;
    }

    .stats-txt {
      font-size: 9px;
      margin-top: 27px;
    }

    .band4 {
      height: 79px;
      margin-bottom: 102px;
    }

    .title3 {
      font-size: 24px;
      padding-bottom: 90px;
    }

    .span3 {
      font-size: 24px;
    }

    .btn3 {
      margin-top: 25px;
      width: 130px;
      height: 38px;
    }

    .btn-text3 {
      font-size: 14px;
    }
  }
`;
