import React from "react";

const ProjectDetailsModal = ({ setOpenModal }: any) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "29rem",
            height: "29rem",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "1.5rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <button
            style={{
              position: "absolute",
              right: "39rem",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              color: "#333",
            }}
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
          <div>
            <>
              <div
                style={{
                  width: "inherit",
                  height: "20rem",
                  borderRadius: "0.5rem",
                }}
              >
                <div style={{ display: "flex", margin: "2rem" }}>
                  <img
                    style={{
                      height: "3rem",
                      width: "3rem",
                      borderRadius: "50%",
                    }}
                    src="https://picsum.photos/200/300"
                    alt="test"
                  />
                  <span
                    style={{
                      fontWeight: 600,
                      marginLeft: "1rem",
                      marginTop: "0.3rem",
                    }}
                  >
                    BuzzWorks
                  </span>
                </div>

                <div>
                  <div
                    style={{
                      paddingLeft: "1rem",
                      fontSize: "1.5rem",
                      textAlign: "left",
                      fontWeight: 600,
                    }}
                  >
                    Project Details
                  </div>
                  <div
                    style={{ color: "grey", textAlign: "left", margin: "1rem" }}
                  >
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </div>
                </div>
              </div>
            </>
            <div style={{ marginTop: "3rem" }}>
              <button
                style={{
                  fontWeight: 600,
                  color: "black",
                  height: "3rem",
                  width: "12rem",
                  borderRadius: "0.5rem",
                  border: 0,
                  fontSize: "1rem",
                }}
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  fontWeight: 600,
                  color: "white",
                  background: "#ae91e1",
                  height: "3rem",
                  width: "12rem",
                  borderRadius: "0.5rem",
                  border: 0,
                  fontSize: "1rem",
                  marginLeft: "1rem",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsModal;
