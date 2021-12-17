import React, { useState } from 'react'

function EditPage({ handleClick, cards, addCard, deleteCard }) {
    const [input, setInput] = useState({
        front: '', back: ''
    })


    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addCard(input.front, input.back);
        setInput({
            front: '',
            back: ''
        })
    }

    const handleDelete = (index) => {
        deleteCard(index);
    }


    const rows = cards.map((card, i) => {
        return (
            <tr key={i}>
                <td>{card.front}</td>
                <td>{card.back}</td>
                <td>
                    <button onClick={() => handleDelete(i)}>Delete</button>
                </td>
            </tr>
        )
    })

    return (

        <div>

            <p>Halaman Edit</p>

            <table>
                <tr>
                    <th>Front</th>
                    <th>Back</th>
                    <th>Delete</th>
                </tr>
                <tbody>
                    {rows}
                </tbody>
            </table>

            <div>

                <input onChange={handleChange} value={input.front} name="front" placeholder='Front' />
                <input onChange={handleChange} value={input.back} name="back" placeholder='Back' />
                <button onClick={handleSubmit}>Add Card</button>

            </div>
            <button onClick={handleClick} style={{ marginTop: '20px' }} >Go to View Page</button>

        </div>
    )
}

export default EditPage
