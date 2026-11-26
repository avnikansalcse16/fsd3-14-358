
const myButton =() => {
    const handleClick = () => {
        alert("Button Clicked");
    }

    return () => (
        <button
           className ="bg-black text-white rounded p3"
            onClick={handleClick}
        >
            Click Me
        </button>
    );
};
const Event =() => {
    return <div>
        <myButton />
    </div>;
};
export default Event;