import { TeamCard } from "./TeamMember";
function About() {

  const parul = {
    name: "Parul",
    designation: "Front-end Engineer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const saloni = {
    name: "Saloni",
    designation: "Backend-end Engineer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  
  
  

  return (
    <>
      <h1 className="font-bold text-white text-center text-5xl">
        Meet Our Team!
      </h1>
      <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center align-center">
        <TeamCard member={parul} />
        <TeamCard member={saloni} />
        
      </div>
    </>
  );
}
export { About };
