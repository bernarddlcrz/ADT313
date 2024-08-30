import './Name.css';
function Name({Firstname, Lastname}) {
    return (
        <div>
            <h1 className='text-brown'>
                {Firstname} <span>{Lastname}</span></h1>
        </div>
    )
    
}

export default Name;