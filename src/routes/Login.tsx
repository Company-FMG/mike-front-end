import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}
const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

interface IconLabelProps {
  iconSrc: string;
  label: string;
}
const IconLabel: React.FC<IconLabelProps> = ({ iconSrc, label }) => (
  <div className="flex gap-5 self-start text-3xl font-light text-white whitespace-nowrap">
    <Image src={iconSrc} alt="" className="shrink-0 aspect-square w-[37px]" />
    <div className="flex-auto self-start italic">{label}</div>
  </div>
);

const Login: React.FC = () => {
  return (
    <main className="bg-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col grow justify-center py-px min-h-[1160px] max-md:max-w-full">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b84e908038c077e02a1562e4f24dbed83f5362f6c75c44829b09b51fbbb407bd?apiKey=91a1d4223fb149a1a197b80828621a6c&"
              alt=""
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative shrink-0 bg-blue-700 bg-opacity-20 h-[1159px] max-md:max-w-full" />
          </div>
        </section>
        <section className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center items-end px-16 py-20 w-full bg-blue-700 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col mt-24 mr-14 max-w-full w-[557px] max-md:mt-10 max-md:mr-2.5">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a44dae2fcd9b1fbe3574a39c692565c2f69e16f6c1e6798d673d0b8e0f81faa?apiKey=91a1d4223fb149a1a197b80828621a6c&"
                alt=""
                className="w-full aspect-[2.38] max-md:max-w-full"
              />
              <form className="flex flex-col pl-3.5 mt-36 max-md:mt-10 max-md:max-w-full">
                <IconLabel iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bdec2657c7b3d519d79ecfb70044210c240c4dcb0bf94173044b674a3ab86a07?apiKey=91a1d4223fb149a1a197b80828621a6c&" label="Matrícula" />
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4c039c1d198cef788cfb1cd2675fd18884150ea8ad71bf67e0ae6dd3d947708?apiKey=91a1d4223fb149a1a197b80828621a6c&"
                  alt=""
                  className="mt-5 w-full border-white border-solid aspect-[100] border-[3px] stroke-[3.014px] stroke-white max-md:max-w-full"
                />
                <IconLabel iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ebbd445098f55900b1e18de17dd2bab72152f02756d5e7d07501f68c845fd423?apiKey=91a1d4223fb149a1a197b80828621a6c&" label="Senha" />
                <div className="flex overflow-hidden relative flex-col justify-center mt-3.5 border-white border-solid border-[3px] min-h-[4px] stroke-[3.014px] stroke-white max-md:max-w-full">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4c039c1d198cef788cfb1cd2675fd18884150ea8ad71bf67e0ae6dd3d947708?apiKey=91a1d4223fb149a1a197b80828621a6c&"
                    alt=""
                    className="object-cover absolute inset-0 size-full"
                  />
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4c039c1d198cef788cfb1cd2675fd18884150ea8ad71bf67e0ae6dd3d947708?apiKey=91a1d4223fb149a1a197b80828621a6c&"
                    alt=""
                    className="w-full border-white border-solid aspect-[100] border-[3px] stroke-[3.014px] stroke-white max-md:max-w-full"
                  />
                </div>
              </form>
              <a
                href="#"
                className="self-end mt-9 text-xl italic text-white underline"
              >
                Esqueci minha senha
              </a>
              <button className="justify-center items-center px-16 py-7 mt-12 ml-3.5 text-3xl font-bold text-blue-700 whitespace-nowrap bg-white rounded-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
                Entrar
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;