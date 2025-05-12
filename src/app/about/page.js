import React from 'react'

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Welcome to Ruma's Delights! We are dedicated to bringing you the best
          in traditional and modern desserts. Our passion for sweets is matched
          only by our commitment to quality and customer satisfaction.
        </p>
      </div>
      <div>
        {/* About Section */}
        <section className="py-16 px-6 lg:px-24">
          <h2 className="text-4xl font-semibold text-center mb-8">Our Story</h2>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              src="/images/atlanta.jpg"
              className="w-full lg:w-1/2 rounded-lg shadow"
              alt="Atlanta"
            />
            <p className="text-lg lg:w-1/2">
              Located in the heart of Chamblee, Georgia, Ruma's Delights brings
              together the rich flavors of traditional Bengali cuisine with the
              bold tastes of international dishes. Whether you're dining in,
              grabbing a quick takeout, or planning a catered event, our mission
              is to provide a warm, welcoming experience with food that delights
              every palate.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;