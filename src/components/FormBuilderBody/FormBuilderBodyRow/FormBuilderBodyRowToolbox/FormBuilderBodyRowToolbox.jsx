import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlidersH,
  faCircleNotch,
  faExclamationTriangle,
  faTimes,
  faCircle,
  faCaretUp,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import "./FormBuilderBodyRowToolbox.scss";

function FormBuilderBodyRowToolbox({ loading, error }) {
  return (
    <div className={"FormBuilderBodyRowToolbox"}>
      {loading ? loadingState() : error ? errorState() : defaultState()}
    </div>
  );
}

const loadingState = () => {
  return (
    <div className={"loadingIcon"}>
      <FontAwesomeIcon icon={faCircleNotch} spin />
    </div>
  );
};

const errorState = () => {
  return (
    <div className={"errorIcon"}>
      <FontAwesomeIcon icon={faExclamationTriangle} />
    </div>
  );
};

const defaultState = () => {
  return (
    <Container>
      <Row className={"m-2"}>
        <Col className="deleteIcon fa-layers fa-fw">
          <FontAwesomeIcon
            className={"outer"}
            icon={faCircle}
            size={"lg"}
            transform={"grow-6"}
          />
          <FontAwesomeIcon className={"inner"} icon={faTimes} />
        </Col>
      </Row>
      <Row className={"m-2"}>
        <Col className="genericIcon fa-layers fa-fw">
          <FontAwesomeIcon
            className={"outer"}
            icon={faCircle}
            size={"lg"}
            transform={"grow-6"}
          />
          <FontAwesomeIcon className={"inner"} icon={faSlidersH} />
        </Col>
      </Row>
      <Row className={"m-2"}>
        <Col className="genericIcon fa-layers">
          <Container>
            <Row className={"justify-content-end"}>
              <Col className="genericIcon fa-layers">
                <FontAwesomeIcon
                  className={"outer"}
                  icon={faCircle}
                  size={"lg"}
                  transform={"grow-6"}
                />
                <FontAwesomeIcon className={"inner"} icon={faCaretDown} />
              </Col>
              <Col className="genericIcon fa-layers fa-fw">
                <FontAwesomeIcon
                  className={"outer"}
                  icon={faCircle}
                  size={"lg"}
                  transform={"grow-6"}
                />
                <FontAwesomeIcon className={"inner"} icon={faCaretUp} />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

const MoveButton = () => {
  return (
    <div>
      <div className="genericIcon fa-layers fa-fw"></div>
    </div>
  );
};

FormBuilderBodyRowToolbox.defaultProps = {
  loading: false
};

export { FormBuilderBodyRowToolbox };
