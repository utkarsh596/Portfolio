import Projects from './Project';

const skill = [
    {
      name:'JavaScript',
      image:'fab fa-js fa-3x',
      color:'yellow'
    },
    {
      name:'React',
      image:'fab fa-react fa-3x',
      color:'cyan'
    },
    {
      name:'NodeJS',
      image:'fab fa-node fa-3x',
      color:'green'
    },
    {
      name:'C++',
      image:'fab fa-cuttlefish fa-3x',
      color:'gray'
    },
    {
      name:'SQL',
      image:'fas fa-database fa-3x',
      color:'purple'
    },
  ];

  const Skills = () =>{
    return(
    <div>
      <Projects/>
        <h1 id='skills' className='text-center' style={{fontSize:'70px' , color:'#00917C'}}>Skills</h1>
        <div className='d-flex flex-wrap justify-content-center'>
          {
          skill.map((language)=>{
            return(
              <div className='skill'>
                <i className={language.image} style={{color:language.color , textShadow:'1px 1px 1px black'}}></i>
                <span style={{fontSize:'35px'}}>{language.name}</span>
              </div>
            );
          })
          }
        </div>
        
    </div>
    );
  }


export default Skills;