import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Person() {
  //recollim els params que ens venen per la url
  // const parameters = useParams();
  //valors per defecte en paràmetres opcionals
  // const { name = "sergi", surname = "molina" } = useParams(); //així fem destructuració
  const { name, surname } = useParams();
  console.log(name);
  // if (!name) name = "Sergi";
  // if (!surname) surname = "Molina";
  const navigate = useNavigate();

  const send = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let surname = e.target.surname.value;
    //el vull rediregir a /person/name/surname agafant aquests dos valors
    let url = `/person/${name}/${surname}`;
    if (name.length <= 0 && surname.length <= 0) {
      navigate("/start");
      console.log("fuckme");
    } else if (name === "contact") {
      navigate("/contact");
    } else {
      navigate(url);
      console.log("tetaaa");
    }
  };

  return (
    <div>
      {!name && <h1>There is no person to show!</h1>}
      {name && (
        <h1>
          person page: {name} {surname}
        </h1>
      )}

      <p>this is the person page, you moron!</p>
      <form onSubmit={send}>
        <input type="text" name="name" />
        <input type="text" name="surname" />
        <input type="submit" name="send" value="send" />
      </form>
    </div>
  );
}

export default Person;
