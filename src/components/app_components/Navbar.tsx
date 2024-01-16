import { FunctionComponent } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "./Icons";
import NavLinks from "./NavLinks";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {
    return ( 
        <div className="sticky z-50 bg-white top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="h-16 flex items-center">
                            {/* TODO: Mobile Navbar */}

                            <div className="ml-4 flex lg:ml-0">
                                <Link href={'/'}>
                                    <Icons.logo className="h-10 w-10"/>
                                </Link>
                            </div>

                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch ">
                                <NavLinks/>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
     );
}
 
export default Navbar;