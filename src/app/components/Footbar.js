import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footbar = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-secondary text-secondary-content p-10">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ruma&apos;s Delights</h3>
            <p className="text-base-content/70 mb-4">
              Authentic Bengali cuisine in the heart of Atlanta, Georgia.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-base-content/60 hover:text-secondary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-base-content/60 hover:text-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-base-content/60 hover:text-secondary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-base-content/70">
              <p>123 Bengali Lane</p>
              <p>Atlanta, GA 30303</p>
              <p className="mt-2">(404) 555-1234</p>
              <p>info@rumasdelights.com</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="text-base-content/70 space-y-1">
              <li>Monday - Thursday: 11am - 10pm</li>
              <li>Friday - Saturday: 11am - 11pm</li>
              <li>Sunday: 12pm - 9pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-base-300 mt-8 pt-8 text-center text-base-content/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Ruma&apos;s Delights. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footbar