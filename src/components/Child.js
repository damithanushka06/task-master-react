const Child = ({message, onMessageChange}) =>{

    return (
        <input
            type="text"
            value={message}
            onChange={(e) => onMessageChange(e.target.value)}
        />
    )

}
export default Child;
