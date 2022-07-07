import React from "react";
import { Input } from "./Input";

export const ShowInputs = () => {
  return (
    <div className="data w-auto p-5">
      <h2>Types of Inputs</h2>

      <div className="contenedor w-auto">

        <div className="divisor">
          <div className="boton p-3 w-auto animate__animated animate__pulse">
            <p className="info"> {String("<Input/>")} </p>
            <Input value="hola"/>
          </div>

          <div className="boton  p-3 w-auto animate__animated animate__pulse">
            <p className="info"> {String('<Input variant="email"/>')} </p>
            <Input variant="number"/>
          </div>

          <div className="boton  p-3 w-auto animate__animated animate__pulse">
            <p className="info"> {String('<Input variant="password"/>')} </p>
            <Input variant="password" />
          </div>
        </div>

        <div className="divisor">
          <div className="boton  p-3 w-auto animate__animated animate__pulse">
            <p className="info"> {String(' <Input variant="checkbox"/>')} </p>
            <Input variant="checkbox" />
          </div>
          <div className="boton  p-3 w-auto animate__animated animate__pulse">
            <p className="info"> {String(' <Input variant="radio"/>')} </p>
            <Input variant="radio" />
          </div>
        </div>

        <div className="divisor">
        <div className="boton  p-3 w-auto animate__animated animate__pulse">
            <p className="info"> {String(' <Input placeholder="Have a nice day"/>')} </p>
            <Input placeholder="Have a nice day" />
          </div>
          <div className="boton  p-3 w-auto animate__animated animate__pulse">
            <p className="info"> {String(' <Input readOnly placeholder="ReadOnly"/>')} </p>
            <Input readOnly placeholder="ReadOnly" />
          </div>
        </div>

        <div className="divisor">
        <div className="boton  p-3 w-auto animate__animated animate__pulse">
            <p className="info"> {String(' <Input size="sm"/>')} </p>
            <Input size="sm" />
          </div>
          <div className="boton  p-3 w-auto animate__animated animate__pulse">
            <p className="info"> {String('<Input size="md"/>')} </p>
            <Input size="md" />
          </div>
          <div className="boton  p-3 w-auto animate__animated animate__pulse">
            <p className="info"> {String(' <Input size="lg"/>')} </p>
            <Input size="lg"/>
          </div>
        </div>

        <div className="divisor">
          <div className="boton  p-3 w-auto animate__animated animate__pulse">
            <p className="info"> {String(' <Input status="error"/>')} </p>
            <Input status="error" />
          </div>

          <div className="boton  p-3 w-auto animate__animated animate__pulse">
            <p className="info"> {String(' <Input status="valid"/>')} </p>
            <Input status="valid"  />
          </div>
          <div className="boton  p-3 w-auto animate__animated animate__pulse">
            <p className="info"> {String(' <Input helpText="This is some text for help" />')} </p>
            <Input helpText="This is some text for help"/>
          </div>
        </div>

        <div className="divisor">
        

        </div>

        
      </div>
    </div>
  );
};
