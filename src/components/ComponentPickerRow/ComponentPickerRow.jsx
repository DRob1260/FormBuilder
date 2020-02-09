import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addFormComponent} from '../../actions/index.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleRight, faAngleRight} from '@fortawesome/free-solid-svg-icons';

function ComponentPickerRow({label, name}) {
    const [mouseIsHere, setMouseIsHere] = useState(false);

    const dispatch = useDispatch();

    const rowStyle = {color: 'white', padding: '1em', cursor:'pointer'}
    const rowStyleWithHover = {color: '#007bff', padding: '1em', cursor:'pointer'}

    return(
      <>
        <Row
            id={'componentPickerRow'}
            style={mouseIsHere ? rowStyleWithHover : rowStyle}
            onMouseEnter={() => setMouseIsHere(true)}
            onMouseLeave={() => setMouseIsHere(false)}
            onClick={() => dispatch(addFormComponent(name))}
        >
            <Col>
                <h5>{label}</h5>
            </Col>
            <Col xs={1} style={{textAlign: 'center'}}>
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
    name: ''
}

export {ComponentPickerRow};


