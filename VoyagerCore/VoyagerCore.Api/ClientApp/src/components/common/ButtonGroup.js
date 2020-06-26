import React from "react";
function ButtonGroup() {
  return (
    <div id="group">
      <div id="group" class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
          <input type="radio" name="options" id="option1" checked />
          Tek Yön
        </label>
        <lapel class="btn btn-secondary">
          <input type="radio" name="options" id="option2" />
          Gidiş-Dönüş
        </lapel>
      </div>
    </div>
  );
}
export default ButtonGroup;
