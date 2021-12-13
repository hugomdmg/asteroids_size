function Usuario(props){
    console.log('desde usuarios');
    console.log(props.data.data);
let lista = props.data.data[0].fav.map((dato, index)=>{
    return(
        <p>{dato}</p>
    )
})
return(
    <div>
        <h3>Your saved searches:</h3>
    {lista}
    </div>
)
};

export default Usuario;