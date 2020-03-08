import React from "react";
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
import { useDispatch } from "react-redux";
import { removeFormComponent } from "../../../../actions/form";
import "./FormBuilderBodyRowToolbox.scss";

function FormBuilderBodyRowToolbox({ componentId, loading, error }) {
  const dispatch = useDispatch();

  const loadingState = () => {
    return (
      <span className={"loadingIcon align-middle"}>
        <FontAwesomeIcon icon={faCircleNotch} size={"lg"} spin />
      </span>
    );
  };

  const errorState = () => {
    return (
      <span className={"errorIcon align-middle"}>
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </span>
    );
  };

  const defaultState = () => {
    return (
      <div className={"Toolbox"}>
        <div>
          <span 
            className={"deleteIcon fa-layers fa-fw"}
            title={"delete"}
            onClick={() => dispatch(removeFormComponent(componentId))}
          >
            <FontAwesomeIcon
              className={"outer"}
              icon={faCircle}
              size={"lg"}
              transform={"grow-6"}
            />
            <FontAwesomeIcon className={"inner"} icon={faTimes} />
          </span>
        </div>
        <div>
          <span 
            className={"genericIcon fa-layers fa-fw"}
            title={"edit"}
          >
            <FontAwesomeIcon
              className={"outer"}
              icon={faCircle}
              size={"lg"}
              transform={"grow-6"}
            />
            <FontAwesomeIcon className={"inner"} icon={faSlidersH} />
          </span>
        </div>
        <div>
          <span 
            className="genericIcon fa-layers fa-fw"
            title={"move down"}
          >
            <FontAwesomeIcon className={"outer"} icon={faCircle} size={"lg"} />
            <FontAwesomeIcon className={"inner"} icon={faCaretDown} />
          </span>
          <span 
            className="genericIcon fa-layers fa-fw"
            title={"move up"}
          >
            <FontAwesomeIcon className={"outer"} icon={faCircle} size={"lg"} />
            <FontAwesomeIcon className={"inner"} icon={faCaretUp} />
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className={"FormBuilderBodyRowToolbox p-0"}>
      {loading ? loadingState() : error ? errorState() : defaultState()}
    </div>
  );
}

FormBuilderBodyRowToolbox.defaultProps = {
  loading: false,
  error: false
};

export { FormBuilderBodyRowToolbox };
