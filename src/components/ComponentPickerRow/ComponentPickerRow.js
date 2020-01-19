import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleRight, faAngleRight} from '@fortawesome/free-solid-svg-icons';

function ComponentPickerRow({label, name, handleClick}) {
    const [mouseIsHere, setMouseIsHere] = useState(false);

    const rowStyle = {color: 'white', padding: '1em', cursor:'pointer'}
    const rowStyleWithHover = {color: '#007bff', padding: '1em', cursor:'pointer'}

    return(
      <>
        <Row
            id={'componentPickerRow'}
            style={mouseIsHere ? rowStyleWithHover : rowStyle}
            onMouseEnter={() => setMouseIsHere(true)}
            onMouseLeave={() => setMouseIsHere(false)}
            onClick={handleClick}
        >
            <Col xs={10}>
                <h5>{label}</h5>
            </Col>
            <Col xs={2} style={{textAlign: 'center'}}>
                <FontAwesomeIcon
                    id={'componentPickerRowArrow'}
                    icon={faAngleRight}
                    size={'lg'}
                    hidden={mouseIsHere ? true : false}
                />
                <FontAwesomeIcon
                    id={'componentPickerRowArrowOnHover'}
                    icon={faChevronCircleRight}
                    size={'lg'}
                    hidden={mouseIsHere ? false : true}
                />
            </Col>
        </Row>
      </>
    );
}

ComponentPickerRow.defaultProps = {
    label: '',
    name: '',
    handleClick: undefined
}

export {ComponentPickerRow};

