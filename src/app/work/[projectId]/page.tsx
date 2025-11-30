/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// UI Local Components
import { ProjectDetails } from "@/componets";

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
type ProjectDetailsPageProps = {
  params: {
    projectId: string
  }
};

async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { projectId } = await params;
  /* ***************** RENDERING ****************** */
  return <ProjectDetails projectId={projectId} />;
};
  
export default ProjectDetailsPage;