import ComplaintData from "../components/complaint/ComplaintData";
import ComplaintMap from "../components/complaint/ComplaintMap";
import ComplaintTitle from "../components/complaint/ComplaintTitle";
import SceneData from "../components/complaint/SceneData";
import RightArrow from "../assets/RightArrow.svg";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const navigate = useNavigate();

  return (
    <AuthenticatedLayout>
      <section>
        <div className="container max-w-sm sm:max-w-lg md:max-w-xl py-20 mx-auto space-y-8 px-25 ml-16 sm:ml-24 md:ml-30 lg:px-2 lg:ml-32 xl:ml-56 lg:max-w-4xl 2xl:ml-custom">
          <ComplaintTitle />
          <div className="grid gap-8 sm:gap-2 md:gap-4 lg:gap-32 xl:gap-72 2xl:gap-64 lg:grid-cols-2 lg:items-start">
            <ComplaintMap />
            <div className="flex-col">
              <ComplaintData />
              <SceneData />
            </div>
          </div>
          <button onClick={() => navigate('/viaturas')} className="bg-bluemike flex items-center px-12 sm:px-32 md:px-32 lg:px-64 h-16 text-white sm:text-md md:text-md lg:text-xl font-bold font-poppins rounded">
            <span className="mr-2">Encaminhar para viatura</span>
            <img src={RightArrow} className="w-12" />
          </button>  
        </div>
      </section>
    </AuthenticatedLayout>
  );
}
