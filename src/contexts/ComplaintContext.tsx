import { createContext, ReactNode, useContext, useState } from "react";

//interface do contexto
interface ComplaintContextProps {
    situacaoInformada: string,
    endereco: string,
    mapa: string,
    status: string,
    infoCena: string,
    handleRegisterComplaint: (situacaoInformada: string, endereco: string, mapa: string, status: string, infoCena: string) => void;
}

//contexto inicia indefinido
export const ComplaintContext = createContext<ComplaintContextProps | undefined>(
    undefined
);

//interface do provider
interface ComplaintProviderProps {
    children: ReactNode;
}

//define o provider do context
export const ComplaintProvider = ({ children }: ComplaintProviderProps) => {
    const [situacaoInformada, setSituacaoInformada] = useState("");
    const [endereco, setEndereco] = useState("");
    const [mapa, setMapa] = useState("");
    const [status, setStatus] = useState("");
    const [infoCena, setInfoCena] = useState("");

    const handleRegisterComplaint = (situacaoInformada: string, endereco: string, mapa: string, status: string, infoCena: string) =>{
        setSituacaoInformada(situacaoInformada);
        setEndereco(endereco);
        setMapa(mapa);
        setStatus(status);
        setInfoCena(infoCena);
    };

    return (
        <ComplaintContext.Provider
        value={{
            situacaoInformada,
            endereco,
            mapa,
            status,
            infoCena,
            handleRegisterComplaint
        }}
        >
        {children}
        </ComplaintContext.Provider>
    );
};

//cria um hook personalizado para puxar o contexto
export const useComplaint = (): ComplaintContextProps => {
    const context = useContext(ComplaintContext);
    if (context === undefined) {
        throw new Error("useComplaint must be used within a ComplaintProvider");
    }
    return context;
};
