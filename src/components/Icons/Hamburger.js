export default function Hamburger(props){
  return(
    <svg width="86" height="53" viewBox="0 0 86 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="86" height="13" rx="5" fill={props.color||"white"}/>
    <rect y="40" width="86" height="13" rx="5" fill={props.color||"white"}/>
    <rect y="20" width="86" height="13" rx="5" fill={props.color||"white"}/>
    </svg>

  )
}
