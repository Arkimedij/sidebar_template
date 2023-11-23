import React from 'react'

function Menu({active ,setActive,setCategory}) {
  const links=[
    {id:1, name:"General",value:"general"},
    {id:1, name:"Cricket",value:"cricket"},
    {id:1, name:"Technology",value:"technology"},
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