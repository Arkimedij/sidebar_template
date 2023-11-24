import React from 'react'

function Menu({active ,setActive,setCategory}) {
  const links=[
    {id:2, name:"Technology",value:"technology"},
    {id:1, name:"Sports",value:"sports"},
    
  ];
  function onClick(id,value) {
    setActive(id)
    setCategory(value)
  }
  return (
    <div className='menu-home'>
      <ul>
        {links.map(link =>(
          <li key={link.id}
          className={active===link.id ? "active" : "inactive"}
          onClick={()=>onClick(link.id,link.value)}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu