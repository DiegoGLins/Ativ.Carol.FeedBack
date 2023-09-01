import { Container, Divider, Grid } from "@mui/material";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Jefferson: React.FC = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Grid xs={12} className="boxCard" container>
          <Grid container item>
            <img
              style={{
                position: "absolute",
                bottom: "90px",
                borderRadius: "40px",
                width: "180px",
                height: "230px",
                padding: "25px 15px 25px 30px",
              }}
              src={"./image/Jefferson.jpg"}
            ></img>
          </Grid>
          <Grid
            container
            item
            style={{
              marginTop: "15px",
              position: "relative",
              width: "650px",
              padding: "30px 50px 118px 200px",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              overflow: "hidden",
            }}
          >
            <Grid
              item
              style={{
                fontFamily: "sans-serif",
                fontSize: "24px",
                font: "bold",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p className="star">{"\u2B50"}</p>
                <p>{"JEFFERSON"}</p>
              </div>
              <Divider
                style={{
                  border: "#fff solid 1px",
                  marginTop: "10px",
                  marginBottom: "20px",
                  width: "300px",
                }}
              />
            </Grid>
            <Grid
              item
              style={{
                width: "100%",
                fontFamily: "sans-serif",
                fontSize: "18px",
                fontStyle: "normal",
                textAlign: "start",
              }}
            >
              <Accordion
                style={{
                  marginBottom: "10px",
                  color: "#fff",
                  borderTopStyle: "ridge",
                  borderStartStartRadius: "30px",
                  borderEndEndRadius: "30px",
                  backgroundColor: "transparent",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "blue" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{"1º Soft Skill"}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>*Censo crítico</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                style={{
                  marginBottom: "10px",
                  color: "#fff",
                  borderTopStyle: "groove",
                  borderStartStartRadius: "30px",
                  borderEndEndRadius: "30px",
                  backgroundColor: "transparent",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "blue" }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>{"2º Soft Skill"}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>*Paciente</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                style={{
                  color: "#fff",
                  borderTopStyle: "groove",
                  borderStartStartRadius: "30px",
                  borderEndEndRadius: "30px",
                  backgroundColor: "transparent",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "blue" }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>{"3º Soft Skill"}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>*Comunicativo</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Jefferson;
