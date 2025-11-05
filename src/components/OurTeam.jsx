import { teamMembers } from "../utilis/teamMembers";
import TeamMember from "./TeamMember";

const OurTeam = () => {
  return (
    <section className="pt-12 lg:pt-24 bg-white">
      <div className="container space-y-6 lg:space-y-12">
        <div className="max-w-[32.438rem] mx-auto space-y-3 lg:space-y-4 text-center">
          <h2>Meet our team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {teamMembers.map(teamMember=>(
                <TeamMember key={teamMember.id} img={teamMember.img} name={teamMember.name} designation={teamMember.designation} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
