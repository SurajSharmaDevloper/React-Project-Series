import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom"

const Breadcrumbs = () => {
  const {pathname} = useLocation();
  const pathnames = pathname.split("/").filter((x)=> x)
  let BreadcrumbPath = "";

  return (
    <div className="w-full text-sm flex items-center gap-2 py-2 px-5 bg-[#EDEDED] text-neutral-400 dark:bg-neutral-900 ">
      <Link to="/" className="flex items-center gap-2" ><Home className="w-3 h-3" />Home</Link>
      {pathnames.map((name, index)=>{
        BreadcrumbPath += `/${name}`;
        return <span className="inline-flex items-center" key={index} ><ChevronRight /><Link to={`/${name}`} >{name}</Link></span>
      })}
    </div>
  )
}

export default Breadcrumbs;