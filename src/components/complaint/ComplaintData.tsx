import { useComplaint } from "../../contexts/ComplaintContext";

export default function ComplaintData() {
  const complaint = useComplaint();

  return (
    <>
      <div className="grid gap-4">
        <h1 className="font-bold md:text-xl lg:text-2xl">Ocorrência N°: 000000000000121</h1>
        <p>Nome da vítima: </p>
        <p>Sexo: </p>
        <p>Idade: </p>
        <p>Situação informada: {complaint.infoCena}</p>
        <p>Tipo de caso: </p>
      </div>
    </>
  );
}
