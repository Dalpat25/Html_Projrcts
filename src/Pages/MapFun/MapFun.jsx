import React from 'react'


const MapFun = () => {
return (
<div>
<div>
{
data.map((e)=>{
return(
<>
<p>{e.name}</p>
<p>{e.id}</p>
</>
)
})
}
</div>

</div>
)
}
export default MapFun