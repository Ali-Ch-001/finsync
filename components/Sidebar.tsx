'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Footer from './Footer'
import PlaidLink from './PlaidLink'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="FinSync logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">FinSync</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          const [hasError, setHasError] = useState(false); // Error state for image loading

          return (
            <Link href={item.route} key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative w-6 h-6"> 
                {/* Use Bootstrap Icons for Spin Wheel with conditional color */}
                {item.label === 'Spin Wheel' ? (
                  <i className={`bi bi-arrow-repeat text-2xl ${isActive ? 'text-white' : 'text-gray-700'}`}></i>
                ) : (
                  <Image 
                    src={hasError ? "/icons/default-icon.svg" : item.imgURL} // Fallback on error
                    alt={item.label}
                    width={24}
                    height={24}
                    className={cn({
                      'brightness-[3] invert-0': isActive
                    })}
                    onLoadingComplete={(result) => {
                      if (result.naturalWidth === 0) {
                        setHasError(true); // Image failed to load
                      }
                    }}
                    onError={() => setHasError(true)} // Handle load failure
                  />
                )}
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}
        
        <PlaidLink user={user} />
      </nav>

      <Footer user={user} />
    </section>
  )
}

export default Sidebar;