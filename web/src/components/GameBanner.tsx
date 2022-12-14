import { NavLink } from "react-router-dom";

interface GameBannerProps  {
  id: string;
  bannerUrl: string;
  title: string;
  adsCount: number;
  className?: string;
}

export function GameBanner({
  id, 
  bannerUrl,
  adsCount,
  title,
  className,
}: GameBannerProps) {
    
  return (
    <NavLink to={id} className={`relative rounded-lg overflow-hidden ${className}`}>
      <img src={bannerUrl} alt="" />
      <div className="absolute w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount} anúncio{adsCount >= 2 && 's'}
        </span>
      </div> 
   </NavLink>
  )
}