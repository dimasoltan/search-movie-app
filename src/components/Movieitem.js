import {Card} from "react-bootstrap";

const MovieItem = ({movie}) => {
    return (
        <div className="col">
            <Card style={{width: '20rem'}}>
                <Card.Img variant="top" src={movie.Poster} height="400rem"/>
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>
                        <b> {movie.Year}</b>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieItem;