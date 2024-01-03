import { IconType } from "react-icons";

interface ButtonProps {
 text: string,
 onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
 small?: boolean
 outline?: boolean
 icon?: IconType | undefined
 disabled?: boolean
 deleteBtn?: boolean
}
const Button: React.FC<ButtonProps> = ({ text, onClick, small, outline, disabled, deleteBtn, icon: Icon }) => {
 return (
  <div>
   <button
    disabled={disabled}
    className={`my-1 flex items-center justify-center gap-2 rounded-lg p-3 
    ${small ? "w-[250px]" : "w-full"} 
    ${outline ? "border text-black" : "bg-black text-white"}
    ${deleteBtn ? "bg-red-600" : ""}`}
    onClick={onClick}>
    {Icon && <Icon />}

    {text}
   </button>
  </div>

 )
}

export default Button