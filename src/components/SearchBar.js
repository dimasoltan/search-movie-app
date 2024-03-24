import {useState} from "react"
import {Button, Form, InputGroup} from "react-bootstrap";


const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <form>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search Movies..."
                    aria-label="Search Movies..."
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                <Button type="submit" onClick={handleSubmit}>Search</Button>
            </InputGroup>
        </form>
    )
}

export default SearchBar;