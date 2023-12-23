import Bear from "../assets/landscape-bear.png"

type Props = {
  className?: string
}

export const Hero = (props: Props) => {

  const { className } = props

  return (
    <div 
      className={className}
    >
      <img 
        src={Bear} 
        alt="Space Bear" 
        className="w-full h-screen"
      />
    </div>
  )
}
