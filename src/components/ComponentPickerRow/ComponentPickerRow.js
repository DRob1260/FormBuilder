import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleRight, faAngleRight} from '@fortawesome/free-solid-svg-icons';

function ComponentPickerRow({label, component, handleClick}) {
    const [textStyle, setTextStyle] = useState({color: 'white', padding: '1em'});
    const [mouseIsHere, setMouseIsHere] = useState(false);

    const rowStyle = {color: 'white', padding: '1em', cursor:'pointer'}
    const rowStyleWithHover = {color: '#007bff', padding: '1em', cursor:'pointer'}

    return(
      <>
        <Row
            style={mouseIsHere ? rowStyleWithHover : rowStyle}
            onMouseEnter={() => setMouseIsHere(true)}
            onMouseLeave={() => setMouseIsHere(false)}
            onClick={handleClick}
        >
            <Col xs={10}>
                <h5>{label}</h5>
            </Col>
            <Col xs={2} style={{textAlign: 'center'}}>
                <FontAwesomeIcon icon={faChevronCircleRight} size={'lg'} hidden={mouseIsHere ? false : true}/>
                <FontAwesomeIcon icon={faAngleRight} size={'lg'} hidden={mouseIsHere ? true : false}/>
            </Col>
        </Row>
      </>
    );
}

ComponentPickerRow.defaultProps = {
    label: '',
    component: <></>,
    handleClick: () => {}
}

export {ComponentPickerRow};


