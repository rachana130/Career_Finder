import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";

const Interests = props => {
  const dispayInterests = () =>
    props.data.OccupationDetail[0].InterestDataList.map(interest => {
      return (
        <Fragment key={interest.ElementName}>
          <Card
            variant="light btn-sm"
            title={interest.ElementDescription}
            style={{
              backgroundColor: "#8cd211",
              color: "white",
              border: "0px",
              marginBottom: "5px"
            }}
          >
            <Card.Body>
              <h6>
                {" "}
                <i
                  style={{ color: "white" }}
                  className="fa fa-arrow-circle-right"
                  aria-hidden="true"
                ></i>{" "}
                {interest.ElementName}
              </h6>
              <h6 className="font-weight-light">
                {interest.ElementDescription}
              </h6>
            </Card.Body>
          </Card>
        </Fragment>
      );
    });

  return (
    <Fragment>
      <Card style={{ border: "0px" }}>
        <Card.Body>
          <h3 className="font-weight-light">Interests</h3>
          <br />
          {dispayInterests()}
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Interests;