import Image from "next/image";
const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <Image
        src="https://images.unsplash.com/photo-1770037367722-5444567fcb52"
        alt="ProfilePic" 
        width={300} 
        height={300}
      ></Image>
    </div>
  );
};
export default AboutPage;