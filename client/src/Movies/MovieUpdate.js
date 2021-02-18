import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";


const initialMovie = {
    title: "",
    director: "",
    metascore: "",
    stars: []
};

const UpdateForm = props => {
    const { push } = useHistory();
    const { id } = useParams();
    const [item, setItem] = useState(initialMovie);

    useEffect( () => {
        axios.get(`http`)
    },[]);
}





//Movie card data format {
//     id: 5,
//     title: 'Tombstone',
//     director: 'George P. Cosmatos',
//     metascore: 89,
//     stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
//   }