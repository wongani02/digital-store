import { FunctionComponent } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "./Icons";
import NavLinks from "./NavLinks";
import { buttonVariants } from "../ui/button";
import { Span } from "next/dist/trace";
import Cart from "./Cart";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {

    const user = null;

    return ( 
        <div className="sticky z-50 bg-transparent backdrop-blur top-0 inset-x-0 h-12">
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

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    
                                    {user ? null : (<Link 
                                    className={buttonVariants({variant: 'ghost'})}
                                    href={'/sign-in'}> Sign in</Link>)}

                                    {user ? null : (
                                    <span className="h-6 w-px bg-gray-100" aria-hidden="true"/>
                                    )}

                                    {user ? (
                                        <div>

                                        </div>
                                    ) : <Link className={buttonVariants({variant: 'ghost'})} href={'sign-up/'}>Create Account</Link>}

                                    {user ? (
                                        <span className="h-6 w-px bg-gray-100" aria-hidden="true"/>
                                    ) : null}

                                    {user ? null : (
                                        <div className="flex lg:ml-6">
                                            <span className="h-6 w-px bg-gray-100" aria-hidden="true"/>
                                        </div>
                                    )}

                                    <div className="ml-4 flow-root lg:ml-6">
                                        <Cart/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
     );
}
 
export default Navbar;