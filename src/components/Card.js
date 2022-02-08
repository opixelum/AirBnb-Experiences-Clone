import starIcon from "../images/star.png"

export default function Card(props) {
    return (
        <div id="card">
          <ul>
            <li>
              <img className="thumbnail" alt="Thumbnail"
              src={`../images/${props.img}`}/>
              <img className="star-icon" alt="Reviews" src={starIcon}/>
              <small>{props.rating} ({props.reviewCount}) • {props.location}</small>
              <p>{props.title}</p>
              <p><b>{props.price} $</b> / person</p>
            </li>
          </ul>
        </div>
    )
}