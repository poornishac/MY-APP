import React, { useEffect } from "react";
import { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal.tsx";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    console.log("got triggered");
  }, []);

  return (
    <>
      <div
        style={{
          height: "14rem",
          backgroundColor: "#b4d1d4",
          width: "100",
        }}
      ></div>

      <div style={{ display: "flex" }}>
        <img
          style={{
            height: "10rem",
            width: "10rem",
            borderRadius: "50%",
            position: "absolute",
            top: "11rem",
            left: "8rem",
          }}
          src="https://picsum.photos/200/300"
          alt="test"
        />
        <div style={{ position: "absolute", marginLeft: "20rem" }}>
          <div
            style={{
              fontWeight: 600,
              marginTop: "1rem",
              fontSize: "2rem",
              textAlign: "left",
            }}
          >
            Jaya Wills
          </div>
          <div>I'm a Product Designer Based in Melbourne</div>
        </div>
      </div>
      <div
        style={{
          marginTop: "12rem",
          marginLeft: "12rem",
          marginRight: "12rem",
          textAlign: "left",
          width: "64rem",
        }}
      >
        <span style={{ fontWeight: 600 }}> About Me</span>
        <div style={{ color: "grey" }}>
          <p>
            I'm a Product DesignerBased in Melbourne, Australia. I enjoy working
            on product design, design systems,and webflow projects, but I don't
            take myself too seriously.
          </p>
          <p>
            I've worked with some of the world's most exciting companies,
            including Coinbase, Stripe, and Linear. I'm passionate about helping
            startup's grow, improve their UX and customer experience and to
            raise venture capital through good design
          </p>
          <p>
            My work has been featured on Typewolf, Mindsparkle Magazine, ebflow,
            Fonts In Use, CSS Winner, httpster, Siteinspire and Best Website
            Gallery
          </p>
        </div>
      </div>
      <div
        style={{
          marginLeft: "12rem",
          borderRadius: "0.5rem",
          borderStyle: "solid",
          height: "9rem",
          width: "22rem",
          borderColor: "#e9e4e4",
        }}
      >
        <div style={{ height: "5rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              margin: "1rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {" "}
              <img
                style={{
                  height: "1rem",
                  width: "1rem",
                  borderRadius: "50%",
                }}
                src="https://picsum.photos/200/300"
                alt="test"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: 600 }}>Lead Product Designer</span>
              <span style={{ fontSize: 13, color: "grey" }}>Polymath</span>
            </div>
          </div>
          <div
            style={{
              textAlign: "left",
              paddingLeft: "1rem",
              fontSize: "small",
            }}
          >
            May 2020 - Present
          </div>
        </div>
        <hr style={{ borderTop: "1px solid #e9e4e4" }} />
        <div
          style={{
            textAlign: "right",
            paddingRight: "1rem",
            color: "#ae91e1",
            fontWeight: 600,
            cursor: "pointer",
          }}
          onClick={() => {
            console.log("clicked here");
            setOpenModal(true);
          }}
        >
          View Project
        </div>
      </div>
      {openModal && <ProjectDetailsModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Dashboard;
