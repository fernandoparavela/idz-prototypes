import headerStyles from '../styles/header.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header(props){

	const [isToggled, setToggle] = useState(false);

	const toggleState = function(){
		
		setToggle(!isToggled);

		if(isToggled==false){	
			document.getElementById("buttonOn").setAttribute(
				"style", 
				"background:none; border: white 1px solid; transition: 0.2s ease-in-out; transition-delay:0.5s; cursor:pointer;"
			)
			document.getElementById("menu").classList.add(headerStyles.menuOpenState)
		}else{
			document.getElementById("buttonOn").setAttribute(
				"style", 
				"background-color:black; border: none; transition: 0.2s ease-in-out; transition-delay:0.5s; cursor:pointer;"
			)
			document.getElementById("menu").classList.remove(headerStyles.menuOpenState)
		}
	}

	return(
		<div className={headerStyles.header}>
			<div className={headerStyles.logoContainer}>
				<Link href="/">
					<div className={headerStyles.logo}/>
				</Link>
			</div>
			<div className={headerStyles.menuGlobal}>
				<ul>
					<li>Sobre</li>
					<li>Portfolio</li>
					<li>Magazine</li>
					<li>Sobre</li>
					<li>Contato</li>
				</ul>
			</div>
			<div className={headerStyles.menuComprar}>
				<ul>
					<li>Comprar</li>
					<li>Alugar</li>
				</ul>
			</div>
			<div className={headerStyles.menuMobile}>
				<img src="../images/icon/menu.svg"/>
			</div>
		</div>
	)
}