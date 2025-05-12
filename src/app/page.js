import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <section className="hero relative min-h-screen bg-black text-primary-content overflow-hidden">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/images/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          fallbacksrc="/images/hero-pic.jpg"
        />

        {/* Overlay to darken the video for better text visibility (optional) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

        {/* Content */}
        <div className="hero-content flex-col lg:flex-row-reverse relative z-20">
          <div>
            <h1 className="text-5xl font-bold">Welcome to Ruma's Delights</h1>
            <p className="pl-1 py-6 text-lg">
              Authentic Bengali and International Cuisine Served Fresh
            </p>
            <button className="btn btn-accent">View Menu</button>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-base-200 py-16 px-6 lg:px-24">
        <h2 className="text-4xl font-semibold text-center mb-12">
          Featured Dishes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card shadow-lg">
              <figure>
                <img src={`/images/dish-${i}.jpeg`} alt={`Dish ${i}`} />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Delicious Dish {i}</h3>
                <p>A taste of Bengal with a modern twist.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 px-6 lg:px-24">
        <h2 className="text-4xl font-semibold text-center mb-12">
          Customer Reviews
        </h2>
        <div className="carousel w-full p-6 space-x-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="carousel-item w-full md:w-1/2 lg:w-1/3">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <p>
                    "The food was incredible! Best Bengali meal I've ever had."
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Happy Customer</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="bg-primary py-16 text-primary-content text-center">
        <h2 className="text-4xl font-semibold mb-4">Visit Us Today</h2>
        <p className="mb-6 text-lg">
          Join us for an unforgettable dining experience.
        </p>
        <button className="btn btn-accent">Make a Reservation</button>
      </section>
    </main>
  );
}
