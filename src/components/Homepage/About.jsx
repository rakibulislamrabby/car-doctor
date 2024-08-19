import Image from "next/image";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 pt-16 pb-28">
      <div className="relative w-full h-auto lg:w-[60%]">
        {/* Large Image */}
        <div className="relative">
          <Image
            src="/assets/images/about_us/person.jpg"
            alt="Main Image"
            width={500}
            height={800}
            className="rounded-lg"
          />
          {/* Small Image */}
          <div className="absolute bottom-0 right-0 transform translate-x-24 translate-y-24">
            <Image
              src="/assets/images/about_us/parts.jpg"
              alt="Overlay Image"
              width={300}
              height={200}
              className="rounded-lg border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="pr-20 space-y-5">
        <p className="text-primary font-semibold">About Us</p>
        <h1 className="text-5xl font-bold">We are qualified <br /> & of experience in this field</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        <button className="btn btn-primary">Get More Info</button>
      </div>
    </div>
  );
};

export default About;
