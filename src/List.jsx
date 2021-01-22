import React, {useEffect, useState} from 'react'

const List = React.memo(({ getItems }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(5))
        console.log('Updating Items in child(List) from useCallback example');
    }, [getItems])

    return (
        items.map(item => <div key={item}>{item}</div>)
    )
})

export default List;