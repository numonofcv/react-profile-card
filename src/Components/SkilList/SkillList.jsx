import React from 'react'
import Skill from './Skill'
import './SkillList.css'

export default function SkilList() {
  return (
    <div className='skillList'>
    
        <Skill skill="React" emoji="💪" color='#125655ff' radius='8px' padding='4px 11px' margin='0 5px 0 0' boxShadow='0 4px 20px rgba(213, 190, 190, 0.584)'/>
    
        <Skill skill="HTML+CSS" emoji="💪" color='orangered' radius='8px' padding='4px 11px' margin='0 5px 0 0' boxShadow='0 4px 20px rgba(213, 190, 190, 0.584)'/>
    
        <Skill skill="JavaScript" emoji="💪" color='#14de79ff' radius='8px' padding='4px 11px' margin='0 5px 0 0' boxShadow='0 4px 20px rgba(213, 190, 190, 0.584)'/>
    
        <Skill skill="Svelte" emoji="💪" color='orange' radius='8px' padding='4px 11px' margin='0 5px 0 0' boxShadow='0 4px 20px rgba(213, 190, 190, 0.584)'/>
    </div>
  )
}
