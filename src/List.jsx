import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id} style={{ display: "flex" }}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
        style={{ borderRadius: "50%", margin: "10px" }}
      />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article
      style={{
        backgroundColor: "#150168",
        padding: "20px",
        width: "400px",
        borderRadius: "8px",
        color: "white",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Scientists List</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
