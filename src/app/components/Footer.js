import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-secondary text-secondary-content/50 p-10">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-content/80">
              Ruma&apos;s Delights
            </h3>
            <p className="mb-4">
              Authentic Bengali cuisine in the heart of Georgia.
            </p>
            <div className="text-info-content/60 flex space-x-4 items-center place-content-center">
              <Link
                href="#"
                className="hover:text-info-content/30 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="hover:text-info-content/30 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="hover:text-info-content/30 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-content/80">
              Contact
            </h3>
            <address className="not-italic ">
              <p>3302 Shallowford Road</p>
              <p>Chamblee, GA 30341</p>
              <p className="mt-2">(770) 717-7004</p>
              <p className="mb-2">(770) 617-8995</p>

              <p>info@rumasdelights.com</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-content/80">
              Hours
            </h3>
            <ul className="space-y-1">
              <li>Monday 11:00am - 10:00pm</li>
              <li>Tuesday - Closed</li>
              <li>Wednesday 11:00am - 10:00pm</li>
              <li>Thursday 11:00am - 10:00pm</li>
              <li>Friday 11:00am - 10:00pm</li>
              <li>Saturday & Sunday 11:30am - 10:00pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-base-300 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; 2025 Ruma&apos;s Delights. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer