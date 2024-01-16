'use client'

import { FunctionComponent, useState } from "react";

interface NavLinksProps {
    
}
 
const NavLinks: FunctionComponent<NavLinksProps> = () => {

    const [activeIndex, setActiveIndex] = useState<null | Number>(null);

    return ( 
        <div className="flex gap-4 h-full">

        </div>
    );
}
 
export default NavLinks;